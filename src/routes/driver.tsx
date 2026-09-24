import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MobileShell, PageHeader, Section } from "@/components/MobileShell";
import { TrendingUp, Star, Clock, CheckCircle2, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/driver")({
  component: Driver,
});

function Driver() {
  const [online, setOnline] = useState(true);

  return (
    <MobileShell>
      <PageHeader title="Driver" />
      <Section>
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-[#5856D6] p-5 text-primary-foreground shadow-ios-lg">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[13px] opacity-80">Today's earnings</div>
              <div className="text-[36px] font-bold tracking-tight">₹2,340</div>
              <div className="mt-1 inline-flex items-center gap-1 text-[12px] opacity-90">
                <TrendingUp className="h-3.5 w-3.5" /> +18% vs. yesterday
              </div>
            </div>
            <button
              onClick={() => setOnline(!online)}
              className={cn(
                "flex h-14 w-14 flex-col items-center justify-center rounded-full text-[10px] font-bold uppercase transition",
                online ? "bg-success text-success-foreground" : "bg-white/20"
              )}
            >
              <span className={cn("mb-0.5 h-2.5 w-2.5 rounded-full", online ? "bg-white" : "bg-white/60")} />
              {online ? "On" : "Off"}
            </button>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2 text-center">
            <Stat label="Trips" value="9" />
            <Stat label="Hours" value="6.2" />
            <Stat label="Rating" value="4.96" icon />
          </div>
        </div>
      </Section>

      <Section title="Incoming request">
        <div className="rounded-2xl bg-card p-4 shadow-ios animate-spring-in">
          <div className="flex items-center justify-between">
            <div className="text-[13px] font-semibold uppercase tracking-wide text-success">
              New ride · 0.8 km
            </div>
            <div className="text-[13px] text-muted-foreground">⏱ 14s</div>
          </div>
          <div className="mt-2 text-[20px] font-bold">₹349 · 12 km trip</div>
          <div className="mt-3 space-y-2 text-[14px]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-success" />
              <span className="text-muted-foreground">Pickup</span>
              <span className="ml-auto font-medium">Connaught Place</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-sm bg-destructive" />
              <span className="text-muted-foreground">Drop</span>
              <span className="ml-auto font-medium">IGI Airport T3</span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <button className="h-12 rounded-2xl bg-muted text-[15px] font-semibold active:opacity-70">
              Decline
            </button>
            <button className="h-12 rounded-2xl bg-primary text-[15px] font-semibold text-primary-foreground shadow-ios active:scale-[0.98]">
              Accept
            </button>
          </div>
        </div>
      </Section>

      <Section title="Today">
        <div className="overflow-hidden rounded-2xl bg-card shadow-ios-sm">
          {[
            { i: CheckCircle2, t: "Karol Bagh → CP", v: "+₹220" },
            { i: Clock, t: "Saket → Gurgaon", v: "+₹540" },
            { i: MapPin, t: "Noida → Airport", v: "+₹680" },
          ].map((r, idx, arr) => {
            const Icon = r.i;
            return (
              <div
                key={idx}
                className={cn(
                  "flex items-center gap-3 px-4 py-3",
                  idx !== arr.length - 1 && "border-b border-border"
                )}
              >
                <Icon className="h-5 w-5 text-primary" />
                <span className="flex-1 text-[15px] font-medium">{r.t}</span>
                <span className="text-[15px] font-semibold text-success">{r.v}</span>
              </div>
            );
          })}
        </div>
      </Section>
    </MobileShell>
  );
}

function Stat({ label, value, icon }: { label: string; value: string; icon?: boolean }) {
  return (
    <div className="rounded-2xl bg-white/15 px-2 py-3 backdrop-blur">
      <div className="flex items-center justify-center gap-1 text-[18px] font-bold">
        {icon && <Star className="h-4 w-4 fill-yellow-300 text-yellow-300" />}
        {value}
      </div>
      <div className="text-[11px] opacity-80">{label}</div>
    </div>
  );
}
