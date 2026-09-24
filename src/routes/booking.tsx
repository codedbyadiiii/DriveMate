import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { MapCanvas } from "@/components/MapCanvas";
import { PageHeader } from "@/components/MobileShell";
import { CreditCard, Tag, ChevronRight, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/booking")({
  component: Booking,
});

const drivers = [
  { id: "std", name: "Standard", desc: "Verified driver, 4+ yrs", eta: "4 min", price: 349 },
  { id: "prm", name: "Premium", desc: "Top‑rated, luxury cars", eta: "6 min", price: 549 },
  { id: "out", name: "Outstation", desc: "Long‑distance certified", eta: "12 min", price: 1299 },
];

function Booking() {
  const nav = useNavigate();
  const [sel, setSel] = useState("std");

  return (
    <div className="mx-auto min-h-dvh w-full max-w-[440px] bg-background">
      <div className="relative h-[36dvh]">
        <MapCanvas className="h-full w-full" showRoute />
        <PageHeader title="Confirm ride" back="/search" />
      </div>

      <div className="-mt-6 rounded-t-[28px] bg-background pt-3">
        <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-border" />

        <div className="space-y-2 px-4">
          {drivers.map((d) => {
            const active = sel === d.id;
            return (
              <button
                key={d.id}
                onClick={() => setSel(d.id)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-2xl border bg-card p-3 text-left shadow-ios-sm transition active:scale-[0.99]",
                  active ? "border-primary ring-2 ring-primary/20" : "border-transparent"
                )}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted text-2xl">
                  🚗
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[16px] font-semibold">{d.name}</span>
                    <span className="text-[12px] text-muted-foreground">· {d.eta} away</span>
                  </div>
                  <div className="truncate text-[13px] text-muted-foreground">{d.desc}</div>
                </div>
                <div className="text-right">
                  <div className="text-[16px] font-semibold">₹{d.price}</div>
                  <div className="text-[11px] text-muted-foreground">incl. taxes</div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-3 space-y-1 px-4">
          <button className="flex w-full items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-ios-sm active:scale-[0.99]">
            <CreditCard className="h-5 w-5 text-primary" />
            <div className="flex-1 text-left text-[15px] font-medium">Apple Pay</div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </button>
          <button className="flex w-full items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-ios-sm active:scale-[0.99]">
            <Tag className="h-5 w-5 text-primary" />
            <div className="flex-1 text-left text-[15px] font-medium">Add promo code</div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-1.5 px-4 pt-4 text-[12px] text-muted-foreground">
          <Shield className="h-3.5 w-3.5" /> Fares locked. Cancel free within 2 min.
        </div>

        <div className="p-4 safe-bottom">
          <button
            onClick={() => nav({ to: "/tracking" })}
            className="tap-highlight-none h-[54px] w-full rounded-2xl bg-primary text-[17px] font-semibold text-primary-foreground shadow-ios active:scale-[0.98]"
          >
            Book {drivers.find((d) => d.id === sel)?.name} · ₹{drivers.find((d) => d.id === sel)?.price}
          </button>
        </div>
      </div>
    </div>
  );
}
