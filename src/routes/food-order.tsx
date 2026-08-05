import { createFileRoute } from "@tanstack/react-router";
import { FoodOrderPage } from "@/components/food-order/food-order-page";

export const Route = createFileRoute("/food-order")({
  head: () => ({
    meta: [
      { title: "Food Order — Highways24 Highway Dhaba Delivery" },
      {
        name: "description",
        content:
          "Order hot & fresh authentic dhaba food online across Indian highways. Pre-order thalis, tandoori rotis, and snacks for pickup or truck delivery.",
      },
      { property: "og:title", content: "Highways24 Food Order" },
      {
        property: "og:description",
        content: "Hot, fresh authentic Dhaba food delivered right to your highway stop.",
      },
    ],
  }),
  component: () => <FoodOrderPage />,
});
