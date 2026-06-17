import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className,
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
}) {
  return (
    <div className={cn("group flex overflow-hidden", className)}>
      <div
        className="flex shrink-0 animate-marquee items-center gap-6 pr-6"
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        {children}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 animate-marquee items-center gap-6 pr-6"
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        {children}
      </div>
    </div>
  );
}
