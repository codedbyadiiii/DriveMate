import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Car } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DriveMate — Book a Professional Driver" },
      { name: "description", content: "Book a professional driver to drive your own car. On-demand, scheduled, outstation and designated drivers." },
      { property: "og:title", content: "DriveMate" },
      { property: "og:description", content: "Premium on-demand driver booking for your own vehicle." },
    ],
  }),
  component: Splash,
});

function Splash() {
  const navigate = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => navigate({ to: "/onboarding" }), 1400);
    return () => clearTimeout(t);
  }, [navigate]);
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[440px] flex-col items-center justify-center bg-background">
      <div className="animate-spring-in flex flex-col items-center gap-5">
        <div
          className="flex h-24 w-24 items-center justify-center rounded-[28px] shadow-ios-lg"
          style={{ background: "var(--gradient-primary)" }}
        >
          <Car className="h-12 w-12 text-white" strokeWidth={2.2} />
        </div>
        <div className="text-center">
          <h1 className="text-[34px] font-bold tracking-tight">DriveMate</h1>
          <p className="mt-1 text-[15px] text-muted-foreground">Your driver. Your car.</p>
        </div>
      </div>
    </div>
  );
}
