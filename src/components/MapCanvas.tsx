import { cn } from "@/lib/utils";
import { Car } from "lucide-react";

interface Props {
  className?: string;
  showDriver?: boolean;
  showRoute?: boolean;
}

/** Stylized faux map — premium Apple Maps feel, no external deps. */
export function MapCanvas({ className, showDriver, showRoute }: Props) {
  return (
    <div className={cn("relative overflow-hidden bg-[#E6E8EC] dark:bg-[#1c1c1e]", className)}>
      <svg viewBox="0 0 400 700" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
          </pattern>
          <linearGradient id="water" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#A8C8E8" />
            <stop offset="100%" stopColor="#7FB0DC" />
          </linearGradient>
        </defs>
        <rect width="400" height="700" fill="url(#grid)" />
        {/* parks */}
        <path d="M-20 480 Q 120 420 260 500 T 460 470 L 460 720 L -20 720 Z" fill="#C8E6C9" opacity="0.55" />
        {/* water */}
        <path d="M260 -20 Q 320 120 380 220 L 460 200 L 460 -20 Z" fill="url(#water)" opacity="0.8" />
        {/* roads */}
        <path d="M0 380 L 400 320" stroke="#fff" strokeWidth="14" />
        <path d="M0 380 L 400 320" stroke="#E2E5EA" strokeWidth="10" />
        <path d="M120 0 L 180 700" stroke="#fff" strokeWidth="18" />
        <path d="M120 0 L 180 700" stroke="#E2E5EA" strokeWidth="14" />
        <path d="M-20 200 Q 200 240 420 180" stroke="#fff" strokeWidth="10" fill="none" />
        <path d="M-20 200 Q 200 240 420 180" stroke="#E2E5EA" strokeWidth="6" fill="none" />
        <path d="M40 600 L 380 540" stroke="#fff" strokeWidth="8" />
        <path d="M40 600 L 380 540" stroke="#E2E5EA" strokeWidth="4" />
        {showRoute && (
          <path
            d="M 90 560 Q 160 480 170 380 T 240 200"
            stroke="#007AFF"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="0"
          />
        )}
      </svg>

      {/* Pickup pin */}
      <div className="absolute left-[22%] top-[80%] -translate-x-1/2 -translate-y-full">
        <div className="relative">
          <div className="absolute -inset-3 rounded-full bg-primary/30 animate-pulse-ring" />
          <div className="relative h-4 w-4 rounded-full border-[3px] border-white bg-primary shadow-ios" />
        </div>
      </div>

      {showRoute && (
        <div className="absolute left-[60%] top-[28%] -translate-x-1/2 -translate-y-full">
          <div className="rounded-md bg-foreground px-2 py-1 text-[11px] font-medium text-background shadow-ios">
            Destination
          </div>
          <div className="mx-auto h-3 w-3 -translate-y-1 rotate-45 bg-foreground" />
        </div>
      )}

      {showDriver && (
        <div className="absolute left-[42%] top-[50%] -translate-x-1/2 -translate-y-1/2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background shadow-ios-lg">
            <Car className="h-5 w-5" />
          </div>
        </div>
      )}

      {/* subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40" />
    </div>
  );
}
