"use client";

import {
  HistoryIcon,
  FastForwardIcon,
  UsersIcon,
  CheckCircle2Icon,
  HandshakeIcon,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import type { Bericht as BerichtType, Gesprek } from "@/lib/db/schema";
import type { Deelnemer } from "@/data/deelnemers";
import { Bericht } from "@/components/bericht";
import { Countdown } from "@/components/countdown";
import { MAJORITY_ZETELS } from "@/config";
import { cn } from "@/lib/utils";

type Props = {
  gesprek: Gesprek;
  berichten: Array<BerichtType & { deelnemer: Deelnemer }>;
  deelnemers?: Deelnemer[];
  showCompromis?: boolean;
};

export function Gesprek({
  gesprek,
  berichten,
  deelnemers = [],
  showCompromis = false,
}: Props) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isFastForwarded, setIsFastForwarded] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const prevMessagesLength = useRef<number>(0);
  const didInitialScroll = useRef<boolean>(false);

  const lastMessageTimestamp = berichten[berichten.length - 1]?.timestamp;

  const compromisData = JSON.parse(gesprek.compromis);
  const isAgreement = compromisData.type === "agreement";

  const isLive =
    !isFastForwarded &&
    currentTime > new Date(gesprek.startAt) &&
    currentTime < new Date(lastMessageTimestamp);

  // Filter messages that should be visible (timestamp <= currentTime or fast-forwarded)
  const visibleMessages = isFastForwarded
    ? berichten
    : berichten.filter((msg) => new Date(msg.timestamp) <= currentTime);

  // Check if conversation is over
  const isConversationOver =
    isFastForwarded || currentTime > new Date(lastMessageTimestamp);

  const handleFastForward = () => {
    setIsFastForwarded(true);
  };

  // Update current time every second to reveal new messages when conversation is live
  useEffect(() => {
    if (!isLive) return;

    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(timeInterval);
  }, [isLive]);

  // Scroll to bottom only on initial mount (just once)
  useEffect(() => {
    if (messagesContainerRef.current && !didInitialScroll.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: "auto",
      });
      didInitialScroll.current = true;
      prevMessagesLength.current = visibleMessages.length;
    }
    // Only run on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-scroll to bottom when new messages are revealed, but not on mount
  useEffect(() => {
    if (
      messagesContainerRef.current &&
      prevMessagesLength.current !== undefined &&
      visibleMessages.length > prevMessagesLength.current
    ) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
    prevMessagesLength.current = visibleMessages.length;
  }, [visibleMessages.length]);

  // Calculate total seats of participating parties
  const totalZetels = deelnemers.reduce(
    (sum, d) => sum + (d.partij?.zetels ?? 0),
    0
  );
  const hasMajority = totalZetels >= MAJORITY_ZETELS;

  return (
    <div className="w-full space-y-4 relative">
      <div
        className="w-full h-full max-h-[600px] border p-0 flex flex-col gap-4 overflow-y-auto relative bg-background rounded-4xl"
        ref={messagesContainerRef}
      >
        <div className="sticky top-0 flex items-center justify-between gap-4 p-5 bg-background border-b">
          <h2 className="text-xl font-bold truncate">{gesprek.onderwerp}</h2>

          <div className="flex gap-2 items-center">
            <Badge variant={"secondary"} className="flex items-center gap-2">
              {isLive ? (
                <div className="size-2 rounded-full bg-red-500 animate-pulse"></div>
              ) : (
                <HistoryIcon className="size-4" />
              )}
              {isLive ? "Live" : "Afgelopen"}
            </Badge>

            {deelnemers.length > 0 && (
              <Badge variant={"secondary"} className="flex items-center gap-2">
                <UsersIcon className="text-muted-foreground size-4" />
                {totalZetels} {totalZetels === 1 ? "zetel" : "zetels"}
                {hasMajority && " (meerderheid)"}
              </Badge>
            )}

            {isLive && (
              <Button onClick={handleFastForward} variant="outline" size="sm">
                <FastForwardIcon className="size-4 mr-1" />
                Doorspoelen
              </Button>
            )}
          </div>
        </div>
        <div
          className={cn(
            "flex flex-col gap-5 w-full px-5 pb-10",
            showCompromis && isConversationOver && gesprek.compromis && "pb-0"
          )}
        >
          {visibleMessages.map((msg) => (
            <Bericht
              key={msg.id}
              name={msg.deelnemer?.name || "Unknown"}
              content={msg.content}
              time={new Date(msg.timestamp)}
              zetels={msg.deelnemer?.partij?.zetels || 0}
              image={msg.deelnemer?.image}
            />
          ))}

          {visibleMessages.length === 0 && (
            <div className="flex items-center justify-center">
              <div className="text-muted-foreground flex items-center gap-2">
                Dit gesprek begint binnenkort...
                {berichten[0]?.timestamp && (
                  <Countdown targetDate={new Date(berichten[0].timestamp)} />
                )}
              </div>
            </div>
          )}

          {/* Compromis Section */}
          {showCompromis && isConversationOver && gesprek.compromis && (
            <div className="p-4 pt-5 mt-5 border-t">
              <div className="flex items-center gap-2 mb-2">
                <div
                  className={`size-10 rounded-full flex items-center justify-center ${
                    isAgreement ? "bg-green-500/20" : "bg-primary/20"
                  }`}
                >
                  {isAgreement ? (
                    <CheckCircle2Icon
                      className={`size-5 ${
                        isAgreement ? "text-green-500" : "text-primary"
                      }`}
                    />
                  ) : (
                    <HandshakeIcon className="size-5 text-primary" />
                  )}
                </div>
                <h3 className="text-xl font-bold">
                  {isAgreement ? "Akkoord Bereikt!" : "Compromis"}
                </h3>
              </div>

              <div className="mb-6">
                <p className="text-xl font-semibold text-foreground leading-relaxed">
                  {compromisData.samenvatting}
                </p>
              </div>

              {compromisData.stappen && compromisData.stappen.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wide">
                    Vervolgstappen
                  </h4>
                  <ol className="space-y-2">
                    {compromisData.stappen.map((stap: string, idx: number) => (
                      <li key={idx} className="flex gap-3">
                        <span className="shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/10 text-primary text-xs font-bold">
                          {idx + 1}
                        </span>
                        <span className="text-foreground/90 leading-relaxed pt-0.5">
                          {stap}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          )}
          {showCompromis &&
            isConversationOver &&
            gesprek.compromis &&
            deelnemers.length > 0 && (
              <div className="flex justify-center items-end -space-x-[5%]">
                {deelnemers.map((deelnemer, index) => (
                  <div
                    key={deelnemer.id}
                    className="relative w-24 h-24 overflow-hidden"
                    style={{ zIndex: deelnemers.length - index }}
                  >
                    <Image
                      src={`/images/partijleiders/${deelnemer.image}`}
                      alt={deelnemer.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
