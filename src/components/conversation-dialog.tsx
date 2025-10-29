"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QUICK_TOPIC_OPTIONS, MAJORITY_ZETELS } from "@/config";
import { Deelnemer } from "@/data/deelnemers";
import { useRouter } from "next/navigation";
import {
  CheckIcon,
  LoaderIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  MessageCirclePlusIcon,
} from "lucide-react";
import Image from "next/image";

type Props = {
  deelnemers: Deelnemer[];
};

export function ConversationDialog({ deelnemers }: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [onderwerp, setOnderwerp] = useState("");
  const [selectedDeelnemerIds, setSelectedDeelnemerIds] = useState<number[]>(
    []
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState({ percentage: 0, message: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // Responsive pagination: 6 items on mobile, 12 on desktop
  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth >= 768 ? 12 : 6);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalZetels = selectedDeelnemerIds.reduce((sum, id) => {
    const deelnemer = deelnemers.find((d) => d.id === id);
    return sum + (deelnemer?.partij.zetels ?? 0);
  }, 0);

  const hasMajority = totalZetels >= MAJORITY_ZETELS;

  // Sort deelnemers by zetels (descending)
  const sortedDeelnemers = [...deelnemers].sort(
    (a, b) => b.partij.zetels - a.partij.zetels
  );

  // Pagination logic
  const totalPages = Math.ceil(sortedDeelnemers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedDeelnemers = sortedDeelnemers.slice(startIndex, endIndex);

  const toggleDeelnemer = (id: number) => {
    if (selectedDeelnemerIds.includes(id)) {
      setSelectedDeelnemerIds(selectedDeelnemerIds.filter((did) => did !== id));
    } else {
      setSelectedDeelnemerIds([...selectedDeelnemerIds, id]);
    }
  };

  const handleSubmit = async () => {
    if (!onderwerp.trim() || selectedDeelnemerIds.length < 2) {
      return;
    }

    setIsGenerating(true);
    setProgress({ percentage: 0, message: "Gesprek starten..." });

    try {
      const response = await fetch("/api/gesprekken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          onderwerp: onderwerp.trim(),
          deelnemerIds: selectedDeelnemerIds,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create conversation");
      }

      // Read SSE stream
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error("No response body");
      }

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = JSON.parse(line.slice(6));

            if (data.type === "progress") {
              setProgress({
                percentage: data.percentage,
                message: data.message,
              });
            } else if (data.type === "complete") {
              // Redirect to the conversation page
              router.push(`/gesprek/${data.gesprekId}`);
              return;
            } else if (data.type === "error") {
              throw new Error(data.message);
            }
          }
        }
      }
    } catch (error) {
      console.error("Error creating conversation:", error);
      alert("Er is iets misgegaan. Probeer het opnieuw.");
      setIsGenerating(false);
      setProgress({ percentage: 0, message: "" });
    }
  };

  const handleReset = () => {
    setStep(1);
    setOnderwerp("");
    setSelectedDeelnemerIds([]);
    setIsGenerating(false);
    setProgress({ percentage: 0, message: "" });
    setCurrentPage(1);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      handleReset();
    }
  };

  const canGoToStep2 = selectedDeelnemerIds.length >= 2;
  const canSubmit = onderwerp.trim() && selectedDeelnemerIds.length >= 2;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="lg" className="max-w-md w-full gap-3 h-14 text-xl">
          Maak een groepschat
          <MessageCirclePlusIcon />
        </Button>
      </DialogTrigger>

      <DialogContent className="w-full md:max-w-4xl max-h-[90vh] overflow-y-auto">
        {step === 1 ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-comic">
                Stel een coalitie samen
              </DialogTitle>
              <DialogDescription className="text-foreground text-lg">
                Kies minimaal 2 partijleiders die met elkaar in gesprek moeten
                gaan
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm justify-between w-full">
                  <span className="text-muted-foreground">
                    {totalZetels} van 150 zetels
                  </span>
                  {hasMajority && (
                    <Badge variant="default" className="bg-green-600">
                      <CheckIcon className="size-3 mr-1" />
                      Meerderheid
                    </Badge>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                {paginatedDeelnemers.map((deelnemer) => {
                  const isSelected = selectedDeelnemerIds.includes(
                    deelnemer.id
                  );
                  return (
                    <button
                      key={deelnemer.id}
                      type="button"
                      onClick={() => toggleDeelnemer(deelnemer.id)}
                      className={`p-2 rounded-lg border-2 transition-all flex flex-col items-center text-center ${
                        isSelected
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      } cursor-pointer`}
                    >
                      <div className="relative w-20 h-20 mb-3 rounded-full overflow-hidden">
                        <Image
                          src={`/images/partijleiders/${deelnemer.image}`}
                          alt={deelnemer.name}
                          fill
                          className="object-cover bg-radial from-message-background-start to-message-background-end"
                        />
                      </div>
                      <div className="font-semibold line-clamp-2">
                        {deelnemer.name.split(" ")[0]}
                      </div>
                      <div className="flex flex-col items-center justify-center w-full mt-1">
                        <span className="text-xs">
                          {deelnemer.partij.short}
                        </span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-md">
                          {deelnemer.partij.zetels}{" "}
                          {deelnemer.partij.zetels === 1 ? "zetel" : "zetels"}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {totalPages > 1 && (
                <div className="flex items-center justify-between pt-4 border-t">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    <ArrowLeftIcon className="size-4 mr-1" />
                    Vorige
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    Pagina {currentPage} van {totalPages}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                    disabled={currentPage === totalPages}
                  >
                    Volgende
                    <ArrowRightIcon className="size-4 ml-1" />
                  </Button>
                </div>
              )}
            </div>

            <DialogFooter>
              <Button
                onClick={() => setStep(2)}
                disabled={!canGoToStep2}
                className="w-full"
                size="lg"
              >
                Kies een thema
                <ArrowRightIcon className="size-4 ml-2" />
              </Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-comic">
                Kies een thema
              </DialogTitle>
              <DialogDescription className="text-foreground text-lg">
                Waar moeten de partijen het over hebben?
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Input
                  id="onderwerp"
                  value={onderwerp}
                  onChange={(e) => setOnderwerp(e.target.value)}
                  placeholder="Bijvoorbeeld: Klimaatbeleid"
                  disabled={isGenerating}
                  className="w-full"
                  autoFocus
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {QUICK_TOPIC_OPTIONS.map((topic) => (
                  <Badge
                    key={topic}
                    size="lg"
                    variant={onderwerp === topic ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary/20 transition-colors"
                    onClick={() => !isGenerating && setOnderwerp(topic)}
                  >
                    {topic}
                  </Badge>
                ))}
              </div>

              {isGenerating && (
                <div className="space-y-2 mt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {progress.message}
                    </span>
                    <span className="font-medium">{progress.percentage}%</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-primary h-full transition-all duration-300"
                      style={{ width: `${progress.percentage}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            <DialogFooter className="flex-col sm:flex-row gap-2">
              <Button
                variant="outline"
                onClick={() => setStep(1)}
                disabled={isGenerating}
                className="w-full sm:w-auto"
                size="lg"
              >
                <ArrowLeftIcon className="size-4 mr-2" />
                Terug
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={!canSubmit || isGenerating}
                size="lg"
                className="w-full sm:flex-1 "
              >
                {isGenerating ? (
                  <>
                    <LoaderIcon className="size-4 mr-2 animate-spin" />
                    Gesprek voorbereiden...
                  </>
                ) : (
                  "Start gesprek"
                )}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
