import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/MobileShell";
import { CreditCard, Smartphone, Wallet, Banknote, Check, Apple } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/payment")({
  component: Payment,
});

const methods = [
  { id: "apple", label: "Apple Pay", icon: Apple },
  { id: "card", label: "•••• 4242", icon: CreditCard },
  { id: "upi", label: "UPI — name@okhdfc", icon: Smartphone },
  { id: "wallet", label: "DriveMate Wallet · ₹1,240", icon: Wallet },
  { id: "cash", label: "Cash", icon: Banknote },
];

function Payment() {
  const nav = useNavigate();
  const [m, setM] = useState("apple");

  return (
    <div className="mx-auto min-h-dvh w-full max-w-[440px] bg-background">
      <PageHeader title="Payment" />
      <div className="px-4 pt-6">
        <div className="rounded-3xl bg-card p-5 shadow-ios">
          <div className="text-[13px] uppercase tracking-wide text-muted-foreground">Trip total</div>
          <div className="mt-1 text-[40px] font-bold leading-none tracking-tight">₹349.00</div>
          <div className="mt-4 space-y-1.5 text-[14px]">
            <Row label="Base fare" value="₹279.00" />
            <Row label="Taxes & fees" value="₹52.00" />
            <Row label="Promo (NEW20)" value="−₹20.00" muted />
            <div className="my-2 h-px bg-border" />
            <Row label="Tip your driver" value="Add" link />
          </div>
        </div>

        <h3 className="mb-2 mt-6 px-1 text-[13px] font-semibold uppercase tracking-wide text-muted-foreground">
          Pay with
        </h3>
        <div className="overflow-hidden rounded-2xl bg-card shadow-ios-sm">
          {methods.map((opt, i) => {
            const Icon = opt.icon;
            const active = m === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setM(opt.id)}
                className={cn(
                  "flex w-full items-center gap-3 px-4 py-3.5 text-left active:bg-muted",
                  i !== methods.length - 1 && "border-b border-border"
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="flex-1 text-[15px] font-medium">{opt.label}</span>
                {active && <Check className="h-5 w-5 text-primary" />}
              </button>
            );
          })}
        </div>

        <div className="pb-8 pt-6 safe-bottom">
          <button
            onClick={() => nav({ to: "/rating" })}
            className="tap-highlight-none h-[54px] w-full rounded-2xl bg-primary text-[17px] font-semibold text-primary-foreground shadow-ios active:scale-[0.98]"
          >
            Pay ₹349.00
          </button>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, muted, link }: { label: string; value: string; muted?: boolean; link?: boolean }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className={cn("font-medium", muted && "text-success", link && "text-primary")}>{value}</span>
    </div>
  );
}
