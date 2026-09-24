import { createFileRoute, Link } from "@tanstack/react-router";
import { MobileShell, PageHeader, Section } from "@/components/MobileShell";
import {
  ChevronRight,
  Wallet,
  Bell,
  Globe,
  Shield,
  HelpCircle,
  Tag,
  Star,
  LogOut,
  Car,
  LayoutDashboard,
} from "lucide-react";

export const Route = createFileRoute("/profile")({
  component: Profile,
});

function Profile() {
  return (
    <MobileShell>
      <PageHeader title="Profile" />
      <Section>
        <div className="flex items-center gap-4 rounded-3xl bg-card p-5 shadow-ios">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/60 text-[22px] font-bold text-primary-foreground">
            AS
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[18px] font-semibold">Aarav Sharma</div>
            <div className="text-[13px] text-muted-foreground">+91 98765 43210</div>
            <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-[11px] font-semibold">
              <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" /> 4.92 rider rating
            </div>
          </div>
        </div>
      </Section>

      <Section title="Account">
        <Group>
          <Row icon={Wallet} label="Wallet" right="₹1,240" />
          <Row icon={Tag} label="Promos & referrals" />
          <Row icon={Bell} label="Notifications" />
        </Group>
      </Section>

      <Section title="Switch role">
        <Group>
          <Row icon={Car} label="Driver mode" right="Open" to="/driver" />
          <Row icon={LayoutDashboard} label="Admin dashboard" to="/admin" />
        </Group>
      </Section>

      <Section title="Preferences">
        <Group>
          <Row icon={Globe} label="Language" right="English" />
          <Row icon={Shield} label="Privacy & safety" />
          <Row icon={HelpCircle} label="Help & support" />
        </Group>
      </Section>

      <Section>
        <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-card py-3.5 text-[15px] font-semibold text-destructive shadow-ios-sm active:opacity-70">
          <LogOut className="h-4 w-4" /> Sign out
        </button>
        <p className="mt-4 text-center text-[11px] text-muted-foreground">DriveMate · v1.0</p>
      </Section>
    </MobileShell>
  );
}

function Group({ children }: { children: React.ReactNode }) {
  return <div className="overflow-hidden rounded-2xl bg-card shadow-ios-sm">{children}</div>;
}

function Row({
  icon: Icon,
  label,
  right,
  to,
}: {
  icon: typeof Bell;
  label: string;
  right?: string;
  to?: string;
}) {
  const inner = (
    <>
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted">
        <Icon className="h-4 w-4 text-foreground" />
      </div>
      <span className="flex-1 text-[15px] font-medium">{label}</span>
      {right && <span className="text-[14px] text-muted-foreground">{right}</span>}
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
    </>
  );
  const cls = "flex w-full items-center gap-3 border-b border-border px-4 py-3 last:border-b-0 active:bg-muted text-left";
  return to ? <Link to={to} className={cls}>{inner}</Link> : <button className={cls}>{inner}</button>;
}
