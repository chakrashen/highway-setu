import { createFileRoute } from "@tanstack/react-router";
import { RolePage } from "@/components/role-page";
import { roleBySlug } from "@/lib/roles";

export const Route = createFileRoute("/dhaba")({
  head: () => ({
    meta: [
      { title: "For Dhaba Owners — Highway Setu" },
      {
        name: "description",
        content:
          "Smart menus, online orders, reviews and revenue analytics. Highway Setu empowers highway dhabas to grow digitally.",
      },
      { property: "og:title", content: "Highway Setu for Dhaba Owners" },
      {
        property: "og:description",
        content: "Empowering highway businesses with digital tools.",
      },
    ],
  }),
  component: () => <RolePage role={roleBySlug("/dhaba")} />,
});
