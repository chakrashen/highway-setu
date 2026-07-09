import { createFileRoute } from "@tanstack/react-router";
import { FleetPage } from "@/components/role/fleet-page";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "For Fleet Managers — Highways24" },
      {
        name: "description",
        content:
          "Track vehicles, manage drivers, schedule maintenance and unlock operational insights with the complete fleet command center.",
      },
      { property: "og:title", content: "Highways24 for Fleet Managers" },
      {
        property: "og:description",
        content: "The complete fleet command center for highway operations.",
      },
    ],
  }),
  component: () => <FleetPage />,
});
