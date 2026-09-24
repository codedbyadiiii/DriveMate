import { createFileRoute } from "@tanstack/react-router";
import { MobileShell, PageHeader, Section } from "@/components/MobileShell";
import { ChevronRight, MapPin } from "lucide-react";

export const Route = createFileRoute("/history")({
  component: History,
});

const trips = [
  { date: "Today · 9:24 AM", from: "Home", to: "IGI Airport T3", price: 349, status: "Completed" },
  { date: "Yesterday · 11:40 PM", from: "Hauz Khas Social", to: "Home", price: 220, status: "Designated" },
  { date: "Mon · 7:10 PM", from: "Office", to: "Saket", price: 180, status: "Completed" },
  { date: "Sun · 6:00 AM", from: "Home", to: "Jaipur", price: 4499, status: "Outstation" },
];

function History() {
  return (
    <MobileShell>
      <PageHeader title="Your trips" />
      <Section>
        <div className="space-y-2">
          {trips.map((t, i) => (
            <button
              key={i}
              className="flex w-full items-center gap-3 rounded-2xl bg-card p-4 text-left shadow-ios-sm active:scale-[0.99]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-xl">🚗</div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="truncate text-[15px] font-semibold">{t.to}</span>
                  <span className="text-[15px] font-semibold">₹{t.price}</span>
                </div>
                <div className="mt-0.5 flex items-center gap-1 text-[13px] text-muted-foreground">
                  <MapPin className="h-3 w-3" /> from {t.from}
                </div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-[12px] text-muted-foreground">{t.date}</span>
                  <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium">
                    {t.status}
                  </span>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          ))}
        </div>
      </Section>
    </MobileShell>
  );
}
