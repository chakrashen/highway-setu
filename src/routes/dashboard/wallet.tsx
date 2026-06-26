import { createFileRoute } from "@tanstack/react-router";
import { Wallet } from "@/components/payments/wallet";

export const Route = createFileRoute("/dashboard/wallet")({
  component: WalletPage,
});

function WalletPage() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Wallet & Payments</h1>
        <p className="text-muted-foreground mt-1">Manage your funds, pay for services, and download invoices.</p>
      </div>
      <Wallet />
    </div>
  );
}
