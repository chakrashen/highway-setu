import { createFileRoute } from "@tanstack/react-router";
import { MechanicsPage } from "@/components/role/mechanics-page";

export const Route = createFileRoute("/mechanics")({
  head: () => ({
    meta: [
      { title: "For Mechanics — Highways24" },
      {
        name: "description",
        content:
          "Receive jobs, diagnose vehicles, manage parts and grow earnings. Highways24 turns every workshop into a smart service center.",
      },
      { property: "og:title", content: "Highways24 for Mechanics" },
      {
        property: "og:description",
        content: "Transform every workshop into a smart service center.",
      },
    ],
  }),
  component: () => <MechanicsPage />,
});
