import * as React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusMarker } from "@/components/giga/status-marker";
import {
  CONNECTIVITY,
  type ConnectivityStatus,
} from "@/components/giga/lib/connectivity";

export interface EntityStat {
  label: string;
  value: React.ReactNode;
}

export interface MapEntityPopupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  /** e.g. "School" | "Health center". */
  entityType?: string;
  status: ConnectivityStatus;
  location?: string;
  stats?: EntityStat[];
  onViewDetails?: () => void;
}

/**
 * Map entity popup — the card shown when an entity (school / health center) is
 * selected on the map. Leads with the connectivity status, then key stats and
 * a "View details" action that opens the full detail panel.
 */
export function MapEntityPopup({
  name,
  entityType = "School",
  status,
  location,
  stats = [],
  onViewDetails,
  className,
  ...props
}: MapEntityPopupProps) {
  const meta = CONNECTIVITY[status];

  return (
    <Card className={cn("w-72 overflow-hidden p-0 shadow-lg", className)} {...props}>
      <div className="flex items-start gap-3 p-3">
        <StatusMarker status={status} size="lg" className="mt-0.5" />
        <div className="min-w-0 flex-1">
          <p className="truncate font-heading text-base font-medium leading-tight">
            {name}
          </p>
          <p className="truncate text-xs text-muted-foreground">
            {entityType}
            {location ? ` · ${location}` : ""}
          </p>
          <p className="mt-1 text-xs font-medium" style={{ color: meta.hex }}>
            {meta.label}
          </p>
        </div>
      </div>

      {stats.length > 0 && (
        <div className="grid grid-cols-2 gap-px bg-border">
          {stats.map((stat, i) => (
            <div key={i} className="bg-card p-3">
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <p className="font-heading text-sm text-foreground">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      )}

      {onViewDetails && (
        <div className="p-3 pt-2">
          <Button className="w-full" onClick={onViewDetails}>
            View details
          </Button>
        </div>
      )}
    </Card>
  );
}
