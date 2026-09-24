import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/rating")({
  component: Rating,
});

const tags = ["Safe driving", "Polite", "Clean car", "Punctual", "Great route", "Smooth ride"];

function Rating() {
  const nav = useNavigate();
  const [stars, setStars] = useState(5);
  const [picked, setPicked] = useState<string[]>(["Safe driving", "Polite"]);
  const [note, setNote] = useState("");

  const toggle = (t: string) =>
    setPicked((p) => (p.includes(t) ? p.filter((x) => x !== t) : [...p, t]));

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[440px] flex-col bg-background px-6 safe-top safe-bottom">
      <div className="flex flex-1 flex-col items-center pt-12 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/60 text-[22px] font-bold text-primary-foreground shadow-ios">
          RK
        </div>
        <h1 className="mt-5 text-[26px] font-bold tracking-tight">How was your trip with Rajesh?</h1>
        <p className="mt-1 text-[14px] text-muted-foreground">Your feedback stays anonymous.</p>

        <div className="mt-6 flex gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <button key={n} onClick={() => setStars(n)} className="p-1 active:scale-90">
              <Star
                className={cn("h-9 w-9", n <= stars ? "fill-yellow-500 text-yellow-500" : "text-border")}
              />
            </button>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {tags.map((t) => {
            const on = picked.includes(t);
            return (
              <button
                key={t}
                onClick={() => toggle(t)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition",
                  on ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"
                )}
              >
                {t}
              </button>
            );
          })}
        </div>

        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Add a note (optional)"
          rows={3}
          className="mt-6 w-full resize-none rounded-2xl bg-card p-4 text-[15px] outline-none shadow-ios-sm placeholder:text-muted-foreground"
        />
      </div>

      <div className="space-y-2 pb-6 pt-4">
        <button
          onClick={() => nav({ to: "/home" })}
          className="tap-highlight-none h-[54px] w-full rounded-2xl bg-primary text-[17px] font-semibold text-primary-foreground shadow-ios active:scale-[0.98]"
        >
          Submit
        </button>
        <button
          onClick={() => nav({ to: "/home" })}
          className="block w-full py-2 text-center text-[15px] font-medium text-muted-foreground"
        >
          Skip
        </button>
      </div>
    </div>
  );
}
