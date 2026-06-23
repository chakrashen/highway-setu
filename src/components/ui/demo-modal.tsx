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
      <DialogContent className="glass-strong max-w-4xl border-white/10 light:border-black/10 p-2 sm:p-3">
        <DialogTitle className="sr-only">Highway Setu product demo</DialogTitle>
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
    <span className="group inline-flex cursor-pointer items-center gap-3 rounded-full border border-white/15 light:border-black/15 bg-white/5 light:bg-black/5 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/10 light:hover:bg-black/10">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10 light:bg-black/10 transition-transform group-hover:scale-110">
        <Play className="h-3.5 w-3.5 fill-current" />
      </span>
      {label}
    </span>
  );
}
