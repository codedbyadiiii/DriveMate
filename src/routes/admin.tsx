import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/MobileShell";
import { TrendingUp, Users, Car, DollarSign, Activity, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/admin")({
  component: Admin,
});

function Admin() {
  return (
    <div className="mx-auto min-h-dvh w-full max-w-[440px] bg-background pb-12">
      <PageHeader title="Admin" back="/profile" />
      <div className="px-4 pt-4">
        <div className="grid grid-cols-2 gap-2">
          <Kpi icon={Users} label="Active riders" value="12,408" delta="+4.2%" />
          <Kpi icon={Car} label="Online drivers" value="1,237" delta="+1.8%" />
          <Kpi icon={DollarSign} label="Today revenue" value="₹4.2L" delta="+12%" />
          <Kpi icon={Activity} label="Live trips" value="289" delta="real‑time" muted />
        </div>

        <Section title="Live trips">
          <div className="overflow-hidden rounded-2xl bg-card shadow-ios-sm">
            {[
              { id: "T‑8841", route: "CP → Airport", status: "In progress" },
              { id: "T‑8842", route: "Saket → Noida", status: "Driver arriving" },
              { id: "T‑8843", route: "Gurgaon → MG Rd", status: "Completed" },
            ].map((r, i, arr) => (
              <div key={r.id} className={`flex items-center gap-3 px-4 py-3 ${i !== arr.length - 1 ? "border-b border-border" : ""}`}>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted text-[12px] font-bold">
                  {r.id.split("‑")[1].slice(-2)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[14px] font-semibold">{r.route}</div>
                  <div className="text-[12px] text-muted-foreground">{r.id}</div>
                </div>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">
                  {r.status}
                </span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Driver verification queue">
          <div className="rounded-2xl bg-card p-4 shadow-ios-sm">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-destructive" />
              <div className="flex-1">
                <div className="text-[15px] font-semibold">17 pending approvals</div>
                <div className="text-[12px] text-muted-foreground">Avg. wait 4h 12m</div>
              </div>
              <button className="rounded-full bg-primary px-3 py-1.5 text-[13px] font-semibold text-primary-foreground">
                Review
              </button>
            </div>
          </div>
        </Section>

        <Section title="Quick actions">
          <div className="grid grid-cols-2 gap-2">
            <Quick label="Promo codes" />
            <Quick label="Pricing" />
            <Quick label="Support tickets" />
            <Quick label="Notifications" />
          </div>
        </Section>
      </div>
    </div>
  );
}

function Kpi({ icon: Icon, label, value, delta, muted }: any) {
  return (
    <div className="rounded-2xl bg-card p-4 shadow-ios-sm">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Icon className="h-4 w-4" />
        <span className="text-[12px]">{label}</span>
      </div>
      <div className="mt-1 text-[22px] font-bold tracking-tight">{value}</div>
      <div className={`mt-0.5 inline-flex items-center gap-1 text-[11px] ${muted ? "text-muted-foreground" : "text-success"}`}>
        {!muted && <TrendingUp className="h-3 w-3" />} {delta}
      </div>
    </div>
  );
}
function Section({ title, children }: any) {
  return (
    <section className="pt-5">
      <h2 className="mb-2 px-1 text-[13px] font-semibold uppercase tracking-wide text-muted-foreground">{title}</h2>
      {children}
    </section>
  );
}
function Quick({ label }: { label: string }) {
  return (
    <button className="rounded-2xl bg-card px-3 py-4 text-left text-[14px] font-semibold shadow-ios-sm active:scale-[0.98]">
      {label} <span className="float-right text-muted-foreground">›</span>
    </button>
  );
}
