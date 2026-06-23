"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  CONNECTIVITY,
  CONNECTIVITY_ORDER,
  type ConnectivityStatus,
} from "@/components/giga/lib/connectivity";

export interface ConnectivityLegendProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  /** Optional counts shown next to each status. */
  counts?: Partial<Record<ConnectivityStatus, number>>;
  /** Which statuses to show, in order. Defaults to all. */
  statuses?: ConnectivityStatus[];
  orientation?: "vertical" | "horizontal";
}

/**
 * Connectivity legend — the map key that explains the status colours. Floats
 * over the map (typically bottom-right). Pair with `StatusMarker`.
 */
export function ConnectivityLegend({
  title = "Connectivity",
  counts,
  statuses = CONNECTIVITY_ORDER,
  orientation = "vertical",
  className,
  ...props
}: ConnectivityLegendProps) {
  return (
    <div
      className={cn(
        "rounded-md border bg-card/95 p-3 text-card-foreground shadow-lg backdrop-blur",
        className,
      )}
      {...props}
    >
      {title && (
        <p className="mb-2 text-xs font-semibold text-muted-foreground">
          {title}
        </p>
      )}
      <ul
        className={cn(
          "flex gap-x-4 gap-y-2",
          orientation === "vertical"
            ? "flex-col"
            : "flex-row flex-wrap items-center",
        )}
      >
        {statuses.map((s) => {
          const meta = CONNECTIVITY[s];
          const count = counts?.[s];
          return (
            <li key={s} className="flex items-center gap-2 text-sm">
              <span
                aria-hidden
                className="size-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: meta.hex }}
              />
              <span className="text-foreground">{meta.label}</span>
              {count != null && (
                <span className="ml-auto pl-3 tabular-nums text-muted-foreground">
                  {count.toLocaleString()}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
