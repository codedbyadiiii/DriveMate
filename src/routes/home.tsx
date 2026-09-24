import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MobileShell } from "@/components/MobileShell";
import { MapCanvas } from "@/components/MapCanvas";
import {
  Search,
  Home as HomeIcon,
  Briefcase,
  Star,
  AlarmClock,
  Map as MapIcon,
  Wine,
  RotateCw,
  Clock3,
  Bell,
  ShieldAlert,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/home")({
  head: () => ({ meta: [{ title: "DriveMate" }] }),
  component: Home,
});

const tripTypes = [
  { id: "one-way", label: "One‑way", icon: MapIcon },
  { id: "round", label: "Round‑trip", icon: RotateCw },
  { id: "hourly", label: "Hourly", icon: Clock3 },
  { id: "outstation", label: "Outstation", icon: AlarmClock },
  { id: "designated", label: "Designated", icon: Wine },
];

function Home() {
  const [trip, setTrip] = useState("one-way");

  return (
    <MobileShell>
      {/* Map */}
      <div className="relative h-[58dvh]">
        <MapCanvas className="h-full w-full" />

        {/* Top bar */}
        <div className="absolute inset-x-0 top-0 safe-top">
          <div className="flex items-center justify-between px-4 pt-3">
            <Link
              to="/profile"
              className="glass tap-highlight-none flex h-11 w-11 items-center justify-center rounded-full shadow-ios"
              aria-label="Profile"
            >
              <span className="text-[15px] font-semibold">AS</span>
            </Link>
            <div className="glass flex items-center gap-1.5 rounded-full px-3 py-2 shadow-ios">
              <span className="h-2 w-2 rounded-full bg-success" />
              <span className="text-[13px] font-medium">Drivers nearby</span>
            </div>
            <button
              aria-label="Notifications"
              className="glass tap-highlight-none flex h-11 w-11 items-center justify-center rounded-full shadow-ios"
            >
              <Bell className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* SOS */}
        <button
          aria-label="Emergency SOS"
          className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-destructive text-destructive-foreground shadow-ios-lg active:scale-95"
        >
          <ShieldAlert className="h-5 w-5" />
        </button>
      </div>

      {/* Bottom sheet */}
      <div className="-mt-8 rounded-t-[28px] bg-background pt-3 shadow-ios-lg">
        <div className="mx-auto mb-2 h-1.5 w-10 rounded-full bg-border" />
        <div className="px-4 pb-2">
          <h2 className="text-[22px] font-bold tracking-tight">Where to?</h2>
        </div>

        {/* Trip type pills */}
        <div className="no-scrollbar flex gap-2 overflow-x-auto px-4 pb-3">
          {tripTypes.map((t) => {
            const Icon = t.icon;
            const active = trip === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTrip(t.id)}
                className={cn(
                  "tap-highlight-none flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-2 text-[13px] font-medium transition",
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Search */}
        <Link
          to="/search"
          className="mx-4 flex items-center gap-3 rounded-2xl bg-card px-4 py-3.5 shadow-ios-sm active:scale-[0.99]"
        >
          <Search className="h-5 w-5 text-muted-foreground" />
          <span className="flex-1 text-[16px] text-muted-foreground">Pickup & destination</span>
          <span className="rounded-full bg-primary/10 px-2 py-1 text-[11px] font-semibold text-primary">
            Now
          </span>
        </Link>

        {/* Favorites */}
        <div className="mt-4 grid grid-cols-3 gap-2 px-4">
          {[
            { icon: HomeIcon, label: "Home" },
            { icon: Briefcase, label: "Work" },
            { icon: Star, label: "Favorites" },
          ].map((f) => {
            const Icon = f.icon;
            return (
              <Link
                key={f.label}
                to="/search"
                className="flex flex-col items-center gap-1.5 rounded-2xl bg-card px-2 py-3 shadow-ios-sm active:scale-95"
              >
                <Icon className="h-5 w-5 text-primary" />
                <span className="text-[12px] font-medium">{f.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </MobileShell>
  );
}
