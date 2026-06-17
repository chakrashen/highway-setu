import { createFileRoute } from "@tanstack/react-router";
import { RolePage } from "@/components/role-page";
import { roleBySlug } from "@/lib/roles";

export const Route = createFileRoute("/drivers")({
  head: () => ({
    meta: [
      { title: "For Truck Drivers — Highway Setu" },
      {
        name: "description",
        content:
          "Smart navigation, emergency SOS, live alerts and digital documents — Highway Setu is the intelligent companion for India's truck drivers.",
      },
      { property: "og:title", content: "Highway Setu for Truck Drivers" },
      {
        property: "og:description",
        content:
          "Your intelligent highway companion for safer, smarter journeys.",
      },
    ],
  }),
  component: () => <RolePage role={roleBySlug("/drivers")} />,
});
