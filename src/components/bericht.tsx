import { ArmchairIcon, UserIcon } from "lucide-react";
import Image from "next/image";

type Props = {
  name: string;
  content: string;
  time: Date;
  zetels: number;
  image?: string;
  showHeader?: boolean;
  isConsecutive?: boolean;
  isUserMessage?: boolean; // New prop for user intro messages
};

export function Bericht({ name, content, time, zetels, image, showHeader = true, isConsecutive = false, isUserMessage = false }: Props) {
  // User intro message has different styling
  if (isUserMessage) {
    return (
      <div className="flex gap-4 w-full">
        <div className="size-16 aspect-square rounded-full bg-primary/10 overflow-hidden shrink-0 flex items-center justify-center">
          <UserIcon className="size-8 text-primary" />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold">{name}</span>
          </div>
          <div className="max-w-prose p-3 pl-4 bg-primary/5 text-foreground rounded-3xl rounded-tl-none border border-primary/20">
            <div>{content}</div>
            <div className="mt-2 flex justify-end">
              <span className="text-xs text-muted-foreground">
                {new Date(time).toLocaleTimeString("nl-NL", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Regular politician message
  return (
    <div className={`flex gap-4 w-full ${isConsecutive ? '-mt-3' : ''}`}>
      {showHeader ? (
        <div className="size-16 aspect-square rounded-full bg-accent overflow-hidden shrink-0">
          {image && (
            <Image
              width={120}
              height={120}
              src={`/images/partijleiders/${image}`}
              alt={name}
              className="w-full h-full object-cover aspect-square"
            />
          )}
        </div>
      ) : (
        <div className="size-16 shrink-0" />
      )}
      <div className="flex flex-col gap-3">
        {showHeader && (
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold">{name.split(" ")[0]}</span>
            {zetels > 0 && (
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <ArmchairIcon className="size-4" /> {zetels}
              </span>
            )}
          </div>
        )}
        <div className="max-w-prose p-3 pl-4 bg-radial from-message-background-start to-message-background-end text-message-foreground rounded-3xl rounded-tl-none">
          <div>{content}</div>
          <div className="mt-2 flex justify-end">
            <span className="text-xs text-muted-foreground">
              {new Date(time).toLocaleTimeString("nl-NL", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
