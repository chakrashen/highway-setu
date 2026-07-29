import { createFileRoute } from "@tanstack/react-router";
import React, { Suspense } from "react";

// Lazily load the map component so it only runs on the client-side (fixes window is not defined error)
const LiveMap = React.lazy(() => 
  import("@/components/map/live-map").then((mod) => ({ default: mod.LiveMap }))
);

export const Route = createFileRoute("/map")({
  component: MapPage,
});

function MapPage() {
  return (
    <div className="w-full h-screen pt-16 flex flex-col">
      <Suspense fallback={<div className="flex-1 grid place-items-center">Loading Map...</div>}>
        <LiveMap />
      </Suspense>
    </div>
  );
}
