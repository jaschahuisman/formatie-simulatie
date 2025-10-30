import { cn } from "@/lib/utils";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function Page({ children, className, ...props }: DivProps) {
  return (
    <div
      data-slot="page"
      className={cn("flex-1 flex flex-col gap-8 py-10 px-1 md:px-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function Container({ children, className, ...props }: DivProps) {
  return (
    <div
      data-slot="container"
      className={cn(
        "max-w-4xl w-full mx-auto px-1 md:px-4 flex flex-col gap-10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
