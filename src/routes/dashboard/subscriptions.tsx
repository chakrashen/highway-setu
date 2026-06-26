import { createFileRoute } from "@tanstack/react-router";
import { PricingPlans } from "@/components/subscriptions/pricing-plans";

export const Route = createFileRoute("/dashboard/subscriptions")({
  component: SubscriptionsPage,
});

function SubscriptionsPage() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Subscription Plans</h1>
        <p className="text-muted-foreground mt-1">Upgrade your account to unlock premium features and priority support.</p>
      </div>
      <PricingPlans />
    </div>
  );
}
