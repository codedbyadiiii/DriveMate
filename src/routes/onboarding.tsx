import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Shield, Clock, Sparkles } from "lucide-react";

export const Route = createFileRoute("/onboarding")({
  component: Onboarding,
});

const slides = [
  {
    icon: MapPin,
    title: "Your car, driven by pros",
    body: "Book verified, professional drivers to drive your personal vehicle—anywhere, anytime.",
  },
  {
    icon: Clock,
    title: "On‑demand or scheduled",
    body: "One‑way, round‑trip, hourly, outstation, or a designated driver after an evening out.",
  },
  {
    icon: Shield,
    title: "Safe, tracked, transparent",
    body: "Live tracking, in‑app chat, SOS, and upfront pricing on every ride.",
  },
];

function Onboarding() {
  const [i, setI] = useState(0);
  const S = slides[i];
  const Icon = S.icon;
  const isLast = i === slides.length - 1;

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[440px] flex-col bg-background px-6 safe-top safe-bottom">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <div
          key={i}
          className="animate-spring-in flex h-28 w-28 items-center justify-center rounded-[32px] shadow-ios-lg"
          style={{ background: "var(--gradient-primary)" }}
        >
          <Icon className="h-14 w-14 text-white" strokeWidth={2} />
        </div>
        <h2 key={`t-${i}`} className="animate-spring-in mt-10 text-[28px] font-bold leading-tight tracking-tight">
          {S.title}
        </h2>
        <p key={`b-${i}`} className="animate-spring-in mt-3 max-w-xs text-[16px] leading-relaxed text-muted-foreground">
          {S.body}
        </p>
      </div>

      <div className="mb-6 flex items-center justify-center gap-2">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-6 bg-primary" : "w-1.5 bg-border"}`}
          />
        ))}
      </div>

      <div className="mb-8 space-y-3">
        {isLast ? (
          <Link
            to="/login"
            className="tap-highlight-none flex h-[52px] w-full items-center justify-center rounded-2xl bg-primary text-[17px] font-semibold text-primary-foreground shadow-ios active:scale-[0.98]"
          >
            <Sparkles className="mr-2 h-5 w-5" /> Get started
          </Link>
        ) : (
          <button
            onClick={() => setI(i + 1)}
            className="tap-highlight-none h-[52px] w-full rounded-2xl bg-primary text-[17px] font-semibold text-primary-foreground shadow-ios active:scale-[0.98]"
          >
            Continue
          </button>
        )}
        <Link
          to="/login"
          className="block text-center text-[15px] font-medium text-muted-foreground active:opacity-60"
        >
          Skip
        </Link>
      </div>
    </div>
  );
}
