import { createFileRoute } from "@tanstack/react-router";
import { RolePage } from "@/components/role-page";
import { roleBySlug } from "@/lib/roles";

export const Route = createFileRoute("/mechanics")({
  head: () => ({
    meta: [
      { title: "For Mechanics — Highway Setu" },
      {
        name: "description",
        content:
          "Receive jobs, diagnose vehicles, manage parts and grow earnings. Highway Setu turns every workshop into a smart service center.",
      },
      { property: "og:title", content: "Highway Setu for Mechanics" },
      {
        property: "og:description",
        content: "Transform every workshop into a smart service center.",
      },
    ],
  }),
  component: () => <RolePage role={roleBySlug("/mechanics")} />,
});
