import { createFileRoute } from "@tanstack/react-router";
import { DriversPage } from "@/components/role/drivers-page";

export const Route = createFileRoute("/drivers")({
  head: () => ({
    meta: [
      { title: "For Truck Drivers — Highways24" },
      {
        name: "description",
        content:
          "Smart navigation, emergency SOS, live alerts and digital documents — Highways24 is the intelligent companion for India's truck drivers.",
      },
      { property: "og:title", content: "Highways24 for Truck Drivers" },
      {
        property: "og:description",
        content:
          "Your intelligent highway companion for safer, smarter journeys.",
      },
    ],
  }),
  component: () => <DriversPage />,
});
