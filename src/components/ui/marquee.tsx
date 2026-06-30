import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
}) {
  return (
    <div className={cn("group flex overflow-hidden", className)}>
      <div
        className={cn("flex shrink-0 animate-marquee items-center gap-6 pr-6", pauseOnHover && "group-hover:[animation-play-state:paused]")}
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        {children}
      </div>
      <div
        aria-hidden
        className={cn("flex shrink-0 animate-marquee items-center gap-6 pr-6", pauseOnHover && "group-hover:[animation-play-state:paused]")}
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        {children}
      </div>
    </div>
  );
}
