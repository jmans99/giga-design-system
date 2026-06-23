import * as React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { CONNECTIVITY } from "@/components/giga/lib/connectivity";

export interface StatTileProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: React.ReactNode;
  unit?: string;
  /** Trend indicator. */
  delta?: { value: string; direction: "up" | "down" | "flat" };
  icon?: React.ReactNode;
  /** Slot for a sparkline / mini chart (e.g. Recharts). */
  chart?: React.ReactNode;
}

/**
 * Stat tile — a compact KPI card used throughout the Giga Maps detail panel
 * (schools mapped, % with connectivity, etc.). Optional trend and chart slot.
 */
export function StatTile({
  label,
  value,
  unit,
  delta,
  icon,
  chart,
  className,
  ...props
}: StatTileProps) {
  return (
    <Card className={cn("p-4", className)} {...props}>
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm text-muted-foreground">{label}</p>
        {icon && <span className="text-muted-foreground">{icon}</span>}
      </div>
      <div className="mt-1 flex items-baseline gap-1">
        <span className="font-heading text-2xl text-foreground">{value}</span>
        {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
      </div>
      {delta && (
        <p
          className={cn(
            "mt-1 text-xs",
            delta.direction === "down" && "text-destructive",
            delta.direction === "flat" && "text-muted-foreground",
          )}
          style={
            delta.direction === "up"
              ? { color: CONNECTIVITY.good.hex }
              : undefined
          }
        >
          {delta.value}
        </p>
      )}
      {chart && <div className="mt-3">{chart}</div>}
    </Card>
  );
}
