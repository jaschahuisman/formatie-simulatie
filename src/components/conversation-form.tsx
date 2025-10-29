"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { QUICK_TOPIC_OPTIONS, MAJORITY_ZETELS } from "@/config";
import { Deelnemer } from "@/data/deelnemers";
import { useRouter } from "next/navigation";
import { CheckIcon, LoaderIcon } from "lucide-react";

type Props = {
  deelnemers: Deelnemer[];
};

export function ConversationForm({ deelnemers }: Props) {
  const router = useRouter();
  const [onderwerp, setOnderwerp] = useState("");
  const [selectedDeelnemerIds, setSelectedDeelnemerIds] = useState<number[]>(
    []
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState({ percentage: 0, message: "" });

  const totalZetels = selectedDeelnemerIds.reduce((sum, id) => {
    const deelnemer = deelnemers.find((d) => d.id === id);
    return sum + (deelnemer?.partij.zetels ?? 0);
  }, 0);

  const hasMajority = totalZetels >= MAJORITY_ZETELS;

  const toggleDeelnemer = (id: number) => {
    if (selectedDeelnemerIds.includes(id)) {
      setSelectedDeelnemerIds(selectedDeelnemerIds.filter((did) => did !== id));
    } else {
      setSelectedDeelnemerIds([...selectedDeelnemerIds, id]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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

  const isValid = onderwerp.trim() && selectedDeelnemerIds.length >= 2;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Topic Input */}
      <div className="space-y-2">
        <label htmlFor="onderwerp" className="text-sm font-medium">
          Kies een onderwerp
        </label>
        <Input
          id="onderwerp"
          value={onderwerp}
          onChange={(e) => setOnderwerp(e.target.value)}
          placeholder="Bijvoorbeeld: Klimaatbeleid"
          disabled={isGenerating}
          className="w-full"
        />
      </div>

      {/* Quick Topic Buttons */}
      <div className="flex flex-wrap gap-2">
        {QUICK_TOPIC_OPTIONS.map((topic) => (
          <Badge
            key={topic}
            variant={onderwerp === topic ? "default" : "outline"}
            className="cursor-pointer hover:bg-primary/20 transition-colors"
            onClick={() => !isGenerating && setOnderwerp(topic)}
          >
            {topic}
          </Badge>
        ))}
      </div>

      {/* Party Selection */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">
            Selecteer partijen (minimaal 2)
          </label>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">
              {totalZetels} van 150 {totalZetels === 1 ? "zetel" : "zetels"}
            </span>
            {hasMajority && (
              <Badge variant="default" className="bg-green-600">
                <CheckIcon className="size-3 mr-1" />
                Meerderheid
              </Badge>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {deelnemers.map((deelnemer) => {
            const isSelected = selectedDeelnemerIds.includes(deelnemer.id);
            return (
              <button
                key={deelnemer.id}
                type="button"
                onClick={() => toggleDeelnemer(deelnemer.id)}
                disabled={isGenerating}
                className={`p-3 rounded-lg border-2 transition-all text-left ${
                  isSelected
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50"
                } ${
                  isGenerating
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
              >
                <div className="text-sm font-medium truncate">
                  {deelnemer.partij.short}
                </div>
                <div className="text-xs text-muted-foreground">
                  {deelnemer.partij.zetels} zetels
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex flex-col gap-2">
        {isGenerating && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{progress.message}</span>
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
        <Button
          type="submit"
          disabled={!isValid || isGenerating}
          className="w-full"
          size="lg"
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
      </div>
    </form>
  );
}
