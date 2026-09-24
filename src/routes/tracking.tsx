import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MapCanvas } from "@/components/MapCanvas";
import { Phone, MessageCircle, Shield, Share2, Star } from "lucide-react";

export const Route = createFileRoute("/tracking")({
  component: Tracking,
});

const stages = [
  { key: "search", label: "Finding your driver" },
  { key: "arriving", label: "Driver arriving" },
  { key: "trip", label: "Trip in progress" },
];

function Tracking() {
  const nav = useNavigate();
  const [stage, setStage] = useState(0);
  const [eta, setEta] = useState(5);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 1500);
    const t2 = setTimeout(() => setStage(2), 5000);
    const t3 = setTimeout(() => nav({ to: "/payment" }), 9000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [nav]);

  useEffect(() => {
    const i = setInterval(() => setEta((e) => Math.max(1, e - 1)), 1500);
    return () => clearInterval(i);
  }, []);

  const s = stages[stage];

  return (
    <div className="mx-auto min-h-dvh w-full max-w-[440px] bg-background">
      <div className="relative h-[55dvh]">
        <MapCanvas className="h-full w-full" showRoute showDriver={stage >= 1} />
        <div className="absolute inset-x-0 top-0 safe-top">
          <div className="mx-4 mt-3 glass rounded-2xl px-4 py-3 shadow-ios">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[12px] font-medium uppercase tracking-wide text-muted-foreground">
                  {s.label}
                </div>
                <div className="text-[20px] font-bold tracking-tight">
                  {stage === 2 ? "Arriving in 12 min" : `${eta} min away`}
                </div>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Shield className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="-mt-6 rounded-t-[28px] bg-background pt-3 shadow-ios-lg">
        <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-border" />

        <div className="px-4">
          <div className="flex items-center gap-3 rounded-2xl bg-card p-3 shadow-ios-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/60 text-[18px] font-bold text-primary-foreground">
              RK
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[16px] font-semibold">Rajesh K.</span>
                <span className="inline-flex items-center gap-0.5 rounded-full bg-muted px-1.5 py-0.5 text-[11px] font-semibold">
                  <Star className="h-3 w-3 fill-current text-yellow-500" />
                  4.96
                </span>
              </div>
              <div className="truncate text-[13px] text-muted-foreground">
                Verified · 1,284 trips · Hindi, English
              </div>
            </div>
            <div className="text-right">
              <div className="text-[11px] text-muted-foreground">Vehicle</div>
              <div className="text-[14px] font-semibold">DL 3C AB 4521</div>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            <ActionBtn icon={Phone} label="Call" />
            <ActionBtn icon={MessageCircle} label="Chat" />
            <ActionBtn icon={Share2} label="Share trip" />
          </div>

          <div className="mt-4 rounded-2xl bg-card p-4 shadow-ios-sm">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex flex-col items-center">
                <span className="h-2.5 w-2.5 rounded-full bg-success" />
                <span className="my-1 h-8 w-px bg-border" />
                <span className="h-2.5 w-2.5 rounded-sm bg-destructive" />
              </div>
              <div className="flex-1 space-y-3 text-[14px]">
                <div>
                  <div className="text-muted-foreground text-[12px]">Pickup</div>
                  <div className="font-medium">Connaught Place, Block A</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-[12px]">Destination</div>
                  <div className="font-medium">IGI Airport Terminal 3</div>
                </div>
              </div>
            </div>
          </div>

          <button className="mt-3 mb-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-destructive/10 py-3 text-[15px] font-semibold text-destructive active:opacity-70">
            <Shield className="h-4 w-4" /> Emergency SOS
          </button>
        </div>
      </div>
    </div>
  );
}

function ActionBtn({ icon: Icon, label }: { icon: typeof Phone; label: string }) {
  return (
    <button className="flex flex-col items-center gap-1 rounded-2xl bg-card py-3 shadow-ios-sm active:scale-95">
      <Icon className="h-5 w-5 text-primary" />
      <span className="text-[12px] font-medium">{label}</span>
    </button>
  );
}
