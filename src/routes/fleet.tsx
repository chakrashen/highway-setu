import { createFileRoute } from "@tanstack/react-router";
import { RolePage } from "@/components/role-page";
import { roleBySlug } from "@/lib/roles";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "For Fleet Managers — Highway Setu" },
      {
        name: "description",
        content:
          "Track vehicles, manage drivers, schedule maintenance and unlock operational insights with the complete fleet command center.",
      },
      { property: "og:title", content: "Highway Setu for Fleet Managers" },
      {
        property: "og:description",
        content: "The complete fleet command center for highway operations.",
      },
    ],
  }),
  component: () => <RolePage role={roleBySlug("/fleet")} />,
});
