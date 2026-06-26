import { createFileRoute } from "@tanstack/react-router";
import { LiveMap } from "@/components/map/live-map";

export const Route = createFileRoute("/map")({
  component: MapPage,
});

function MapPage() {
  return (
    <div className="w-full h-screen pt-16 flex flex-col">
      <LiveMap />
    </div>
  );
}
