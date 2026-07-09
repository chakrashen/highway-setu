import { createFileRoute } from "@tanstack/react-router";
import { DhabaPage } from "@/components/role/dhaba-page";

export const Route = createFileRoute("/dhaba")({
  head: () => ({
    meta: [
      { title: "For Dhaba Owners — Highways24" },
      {
        name: "description",
        content:
          "Smart menus, online orders, reviews and revenue analytics. Highways24 empowers highway dhabas to grow digitally.",
      },
      { property: "og:title", content: "Highways24 for Dhaba Owners" },
      {
        property: "og:description",
        content: "Empowering highway businesses with digital tools.",
      },
    ],
  }),
  component: () => <DhabaPage />,
});
