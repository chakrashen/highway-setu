import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

const DEMO_VIDEO_SRC = "/my-demo.mp4";

export function DemoModal({ trigger }: { trigger: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="glass-strong max-w-4xl dark:border-foreground/10 border-foreground light:border-black/10 p-2 sm:p-3">
        <DialogTitle className="sr-only">Highways24 product demo</DialogTitle>
        <div className="relative overflow-hidden rounded-2xl bg-black">
          <video
            className="aspect-video w-full"
            controls
            playsInline
            poster=""
            src={DEMO_VIDEO_SRC}
          >
            <track kind="captions" />
          </video>
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 light:ring-black/10" />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function DemoTriggerButton({
  label = "Watch Demo",
}: {
  label?: string;
}) {
  return (
    <span className="group inline-flex cursor-pointer items-center gap-2 rounded-full border dark:border-foreground/10 border-foreground bg-black/50 px-2 py-1 text-[11px] font-semibold text-white backdrop-blur transition-colors hover:bg-black/70">
      <span className="grid h-5 w-5 place-items-center rounded-full bg-foreground/10 transition-transform group-hover:scale-110">
        <Play className="h-2.5 w-2.5 fill-current text-foreground" />
      </span>
      {label}
    </span>
  );
}
