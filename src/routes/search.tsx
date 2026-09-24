import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/MobileShell";
import { MapPin, Clock, X, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/search")({
  component: SearchScreen,
});

const recents = [
  { title: "Indira Gandhi Airport — T3", sub: "New Delhi" },
  { title: "Connaught Place", sub: "Block A, New Delhi" },
  { title: "Cyber Hub", sub: "DLF Phase 2, Gurgaon" },
  { title: "Khan Market", sub: "New Delhi" },
];

function SearchScreen() {
  const nav = useNavigate();
  const [pickup, setPickup] = useState("Current location");
  const [dest, setDest] = useState("");

  return (
    <div className="mx-auto min-h-dvh w-full max-w-[440px] bg-background">
      <PageHeader title="Set route" back="/home" />

      <div className="px-4 pt-4">
        <div className="rounded-2xl bg-card p-2 shadow-ios-sm">
          <div className="flex items-center gap-3 px-3 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-success" />
            <input
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="flex-1 bg-transparent text-[16px] outline-none"
            />
            {pickup && (
              <button onClick={() => setPickup("")} aria-label="Clear pickup">
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            )}
          </div>
          <div className="ml-[14px] h-4 w-px bg-border" />
          <div className="flex items-center gap-3 px-3 py-2.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-destructive" />
            <input
              autoFocus
              value={dest}
              onChange={(e) => setDest(e.target.value)}
              placeholder="Where to?"
              className="flex-1 bg-transparent text-[16px] outline-none placeholder:text-muted-foreground"
            />
            {dest && (
              <button onClick={() => setDest("")} aria-label="Clear destination">
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="px-4 pt-6">
        <h3 className="mb-2 px-1 text-[13px] font-semibold uppercase tracking-wide text-muted-foreground">
          Recent
        </h3>
        <div className="overflow-hidden rounded-2xl bg-card shadow-ios-sm">
          {recents.map((r, i) => (
            <button
              key={i}
              onClick={() => {
                setDest(r.title);
                nav({ to: "/booking" });
              }}
              className="flex w-full items-center gap-3 px-4 py-3 text-left active:bg-muted"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <Clock className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-[16px] font-medium">{r.title}</div>
                <div className="truncate text-[13px] text-muted-foreground">{r.sub}</div>
              </div>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </button>
          ))}
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 mx-auto max-w-[440px] safe-bottom">
        <div className="p-4">
          <button
            onClick={() => nav({ to: "/booking" })}
            disabled={!dest}
            className="tap-highlight-none flex h-[52px] w-full items-center justify-center rounded-2xl bg-primary text-[17px] font-semibold text-primary-foreground shadow-ios active:scale-[0.98] disabled:opacity-40"
          >
            Find drivers <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
