"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  CONNECTIVITY,
  type ConnectivityStatus,
} from "@/components/giga/lib/connectivity";

const sizeMap = { sm: 10, md: 14, lg: 18 } as const;

export interface StatusMarkerProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  status: ConnectivityStatus;
  size?: keyof typeof sizeMap;
  /** When > 1, renders a counted cluster bubble instead of a single dot. */
  count?: number;
  /** Animated ping to draw attention (single markers only). */
  pulse?: boolean;
  /** Selected state — emphasised ring. */
  selected?: boolean;
}

/**
 * Connectivity status marker — a coloured dot (or counted cluster) for plotting
 * Giga entities on a map. Presentational and map-engine agnostic: the consumer
 * positions it (absolute / overlay) on whatever map library they use.
 */
export function StatusMarker({
  status,
  size = "md",
  count,
  pulse,
  selected,
  className,
  style,
  ...props
}: StatusMarkerProps) {
  const meta = CONNECTIVITY[status];
  const px = sizeMap[size];
  const isCluster = typeof count === "number" && count > 1;
  const dimension = isCluster ? px + 12 : px;

  return (
    <span
      role="img"
      aria-label={
        isCluster ? `${count} entities — ${meta.label}` : meta.label
      }
      className={cn(
        "relative inline-flex items-center justify-center rounded-full ring-2 ring-background transition-transform",
        selected && "z-10 scale-110 ring-foreground",
        className,
      )}
      style={{
        backgroundColor: meta.hex,
        width: dimension,
        height: dimension,
        ...style,
      }}
      {...props}
    >
      {isCluster && (
        <span className="px-1 text-[10px] font-semibold leading-none text-black/80">
          {count > 99 ? "99+" : count}
        </span>
      )}
      {pulse && !isCluster && (
        <span
          aria-hidden
          className="absolute inset-0 animate-ping rounded-full"
          style={{ backgroundColor: meta.hex, opacity: 0.5 }}
        />
      )}
    </span>
  );
}
