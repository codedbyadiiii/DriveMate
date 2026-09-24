import { type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Clock, User, Car, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  hideTabBar?: boolean;
}

const tabs = [
  { to: "/home", label: "Home", icon: Home },
  { to: "/history", label: "Trips", icon: Clock },
  { to: "/driver", label: "Drive", icon: Car },
  { to: "/profile", label: "Profile", icon: User },
];

export function MobileShell({ children, hideTabBar }: Props) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="relative mx-auto flex min-h-dvh w-full max-w-[440px] flex-col bg-background">
      <main className={cn("flex-1", !hideTabBar && "pb-24")}>{children}</main>
      {!hideTabBar && (
        <nav className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-[440px] safe-bottom">
          <div className="glass mx-3 mb-3 flex items-center justify-around rounded-3xl px-2 py-2 shadow-ios-lg">
            {tabs.map((t) => {
              const active = pathname.startsWith(t.to);
              const Icon = t.icon;
              return (
                <Link
                  key={t.to}
                  to={t.to}
                  className={cn(
                    "tap-highlight-none flex flex-1 flex-col items-center gap-0.5 rounded-2xl px-2 py-2 transition-all active:scale-95",
                    active ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  <Icon className="h-[22px] w-[22px]" strokeWidth={active ? 2.4 : 2} />
                  <span className="text-[10px] font-medium tracking-tight">{t.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
}

export function PageHeader({
  title,
  back,
  right,
}: {
  title: string;
  back?: string;
  right?: ReactNode;
}) {
  return (
    <header className="safe-top sticky top-0 z-30 glass">
      <div className="grid h-14 grid-cols-[60px_1fr_60px] items-center px-2">
        <div>
          {back && (
            <Link
              to={back}
              className="tap-highlight-none inline-flex items-center gap-0.5 rounded-full px-2 py-1 text-primary active:opacity-60"
            >
              <ChevronLeft />
              <span className="text-[17px]">Back</span>
            </Link>
          )}
        </div>
        <h1 className="truncate text-center text-[17px] font-semibold tracking-tight">{title}</h1>
        <div className="flex justify-end pr-2">{right}</div>
      </div>
    </header>
  );
}

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Section({ title, children, className }: { title?: string; children: ReactNode; className?: string }) {
  return (
    <section className={cn("px-4 pt-6", className)}>
      {title && (
        <h2 className="mb-2 px-1 text-[13px] font-semibold uppercase tracking-wide text-muted-foreground">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
