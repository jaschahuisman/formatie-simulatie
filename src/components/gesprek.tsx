"use client";

import {
  HistoryIcon,
  FastForwardIcon,
  UsersIcon,
  CheckCircle2Icon,
  HandshakeIcon,
  ArrowUpIcon,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import type { Bericht as BerichtType, Gesprek } from "@/lib/db/schema";
import type { Deelnemer } from "@/data/deelnemers";
import { Bericht } from "@/components/bericht";
import { TypingIndicator } from "@/components/typing-indicator";
import { Countdown } from "@/components/countdown";
import { MAJORITY_ZETELS } from "@/config";
import { cn } from "@/lib/utils";

type Props = {
  gesprek: Gesprek;
  berichten: Array<BerichtType & { deelnemer: Deelnemer }>;
  deelnemers?: Deelnemer[];
  showCompromis?: boolean;
};

// Generate a deterministic typing delay (4-10 seconds) for each message based on its ID
function getTypingDelay(messageId: number): number {
  // Use message ID to seed a pseudo-random delay between 4000-10000ms
  const seed = messageId * 9301 + 49297; // Simple LCG constants
  const random = (seed % 233280) / 233280; // Normalize to 0-1
  return 4000 + Math.floor(random * 6000); // 4-10 seconds
}

export function Gesprek({
  gesprek,
  berichten,
  deelnemers = [],
  showCompromis = false,
}: Props) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isFastForwarded, setIsFastForwarded] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
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

  // Create a list of items to render (messages and typing indicators)
  type RenderItem =
    | { type: "message"; data: BerichtType & { deelnemer: Deelnemer } }
    | { type: "typing"; data: BerichtType & { deelnemer: Deelnemer } };

  const renderItems: RenderItem[] = [];

  if (isFastForwarded) {
    // When fast-forwarded, just show all messages
    berichten.forEach((msg) => {
      renderItems.push({ type: "message", data: msg });
    });
  } else {
    // When live or replaying, show messages and typing indicators based on time
    berichten.forEach((msg) => {
      const messageTime = new Date(msg.timestamp);
      const typingDelay = getTypingDelay(msg.id);
      const typingStartTime = new Date(messageTime.getTime() - typingDelay);

      // Show typing indicator if we're in the typing window
      if (currentTime >= typingStartTime && currentTime < messageTime) {
        renderItems.push({ type: "typing", data: msg });
      }
      // Show actual message if it's time
      else if (currentTime >= messageTime) {
        renderItems.push({ type: "message", data: msg });
      }
    });
  }

  // Check if conversation is over
  const isConversationOver =
    isFastForwarded || currentTime > new Date(lastMessageTimestamp);

  const handleFastForward = () => {
    setIsFastForwarded(true);
  };

  const handleScrollToTop = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (messagesContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        messagesContainerRef.current;
      // Show button when at the bottom (within 50px of bottom)
      const isAtBottom = scrollHeight - scrollTop - clientHeight < 50;
      setShowScrollToTop(isAtBottom);
    }
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
      prevMessagesLength.current = renderItems.length;
    }
    // Only run on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-scroll to bottom when new messages are revealed, but not on mount
  useEffect(() => {
    if (
      messagesContainerRef.current &&
      prevMessagesLength.current !== undefined &&
      renderItems.length > prevMessagesLength.current
    ) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
    prevMessagesLength.current = renderItems.length;
  }, [renderItems.length]);

  // Calculate total seats of participating parties
  const totalZetels = deelnemers.reduce(
    (sum, d) => sum + (d.partij?.zetels ?? 0),
    0
  );
  const hasMajority = totalZetels >= MAJORITY_ZETELS;

  return (
    <div className="w-full relative">
      <div
        className="w-full h-full max-h-[600px] border p-0 flex flex-col gap-4 overflow-y-auto relative bg-background rounded-4xl"
        ref={messagesContainerRef}
        onScroll={handleScroll}
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
                Bekijk compromis
              </Button>
            )}
          </div>
        </div>

        {/* Participants list */}
        {deelnemers.length > 0 && (
          <div className="px-5 pt-5">
            <p className="text-sm text-muted-foreground text-center">
              {deelnemers
                .map((d) => d.name.split(" ")[0])
                .map((firstName, idx, arr) => {
                  if (idx === arr.length - 1 && arr.length > 1) {
                    return `& ${firstName}`;
                  }
                  return firstName;
                })
                .join(", ")
                .replace(", &", " &")}{" "}
              doen mee aan dit gesprek
            </p>
          </div>
        )}

        <div
          className={cn(
            "flex flex-col gap-5 w-full px-5 pb-10",
            showCompromis && isConversationOver && gesprek.compromis && "pb-0"
          )}
        >
          {renderItems.map((item, index) => {
            const previousItem = index > 0 ? renderItems[index - 1] : null;
            const isConsecutive =
              item.type === "message" &&
              previousItem?.type === "message" &&
              previousItem.data.deelnemerId === item.data.deelnemerId;

            if (item.type === "typing") {
              return (
                <TypingIndicator
                  key={`typing-${item.data.id}`}
                  name={item.data.deelnemer?.name || "Unknown"}
                  image={item.data.deelnemer?.image}
                  zetels={item.data.deelnemer?.partij?.zetels || 0}
                />
              );
            }

            const isUserMessage = item.data.deelnemerId === 0;
            const displayName = isUserMessage 
              ? "U" 
              : (item.data.deelnemer?.name || "Unknown");
            
            return (
              <Bericht
                key={item.data.id}
                name={displayName}
                content={item.data.content}
                time={new Date(item.data.timestamp)}
                zetels={item.data.deelnemer?.partij?.zetels || 0}
                image={item.data.deelnemer?.image}
                showHeader={!isConsecutive}
                isConsecutive={isConsecutive}
                isUserMessage={isUserMessage}
              />
            );
          })}

          {renderItems.length === 0 && (
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
                  {isAgreement ? "Akkoord bereikt!" : "Compromis"}
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

      {/* Scroll to Top Button */}
      {showScrollToTop && isConversationOver && (
        <Button
          onClick={handleScrollToTop}
          variant="outline"
          className="absolute bottom-6 right-8 shadow-lg z-100"
          size="sm"
        >
          <ArrowUpIcon className="size-4 mr-2" />
          Lees het gesprek
        </Button>
      )}
    </div>
  );
}
