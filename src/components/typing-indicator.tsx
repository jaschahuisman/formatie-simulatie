import Image from "next/image";

type Props = {
  name: string;
  image?: string;
  zetels: number;
};

export function TypingIndicator({ name, image }: Props) {
  return (
    <div className="flex gap-4 w-full">
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
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-muted-foreground italic">
            {name.split(" ")[0]} is aan het typen...
          </span>
        </div>
        <div className="max-w-prose p-3 pl-4 bg-radial from-message-background-start/50 to-message-background-end/50 text-message-foreground/70 rounded-3xl rounded-tl-none">
          <div className="flex gap-1 items-center">
            <span className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

