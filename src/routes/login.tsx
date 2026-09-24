import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Apple, Phone } from "lucide-react";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[440px] flex-col bg-background px-6 safe-top safe-bottom">
      <div className="pt-12">
        <h1 className="text-[32px] font-bold leading-tight tracking-tight">Welcome</h1>
        <p className="mt-2 text-[16px] text-muted-foreground">
          Sign in to book a professional driver.
        </p>
      </div>

      <div className="mt-10 space-y-3">
        <label className="block">
          <span className="px-1 text-[13px] font-medium text-muted-foreground">Phone number</span>
          <div className="mt-1.5 flex h-[52px] items-center gap-2 rounded-2xl bg-card px-4 shadow-ios-sm">
            <span className="text-[17px] text-muted-foreground">+91</span>
            <input
              inputMode="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
              placeholder="98765 43210"
              className="flex-1 bg-transparent text-[17px] outline-none placeholder:text-muted-foreground"
            />
          </div>
        </label>

        <button
          onClick={() => navigate({ to: "/home" })}
          disabled={phone.length < 10}
          className="tap-highlight-none flex h-[52px] w-full items-center justify-center rounded-2xl bg-primary text-[17px] font-semibold text-primary-foreground shadow-ios transition active:scale-[0.98] disabled:opacity-40"
        >
          <Phone className="mr-2 h-4 w-4" /> Continue with phone
        </button>
      </div>

      <div className="my-7 flex items-center gap-3 text-[13px] text-muted-foreground">
        <div className="h-px flex-1 bg-border" /> or <div className="h-px flex-1 bg-border" />
      </div>

      <div className="space-y-3">
        <button
          onClick={() => navigate({ to: "/home" })}
          className="tap-highlight-none flex h-[52px] w-full items-center justify-center gap-2 rounded-2xl bg-foreground text-[17px] font-semibold text-background active:scale-[0.98]"
        >
          <Apple className="h-5 w-5" /> Continue with Apple
        </button>
        <button
          onClick={() => navigate({ to: "/home" })}
          className="tap-highlight-none flex h-[52px] w-full items-center justify-center gap-2 rounded-2xl bg-card text-[17px] font-semibold text-foreground shadow-ios-sm active:scale-[0.98]"
        >
          <GoogleG /> Continue with Google
        </button>
      </div>

      <p className="mt-auto pt-8 text-center text-[12px] leading-relaxed text-muted-foreground">
        By continuing you agree to our{" "}
        <Link to="/login" className="text-primary">Terms</Link> and{" "}
        <Link to="/login" className="text-primary">Privacy Policy</Link>.
      </p>
    </div>
  );
}

function GoogleG() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.1A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.44.34-2.1V7.06H2.18A11 11 0 0 0 1 12c0 1.77.42 3.45 1.18 4.94l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"/>
    </svg>
  );
}
