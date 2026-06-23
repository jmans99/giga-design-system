"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface MapDetailPanelProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  onClose?: () => void;
  side?: "left" | "right";
  footer?: React.ReactNode;
}

/**
 * Map detail panel — the collapsible side panel that holds entity stats,
 * filters and details over the map. Header carries a collapse toggle and an
 * optional close. Content scrolls; an optional sticky footer holds CTAs.
 */
export function MapDetailPanel({
  title,
  subtitle,
  collapsed = false,
  onCollapsedChange,
  onClose,
  side = "left",
  footer,
  className,
  children,
  ...props
}: MapDetailPanelProps) {
  const Chevron =
    side === "left"
      ? collapsed
        ? ChevronRight
        : ChevronLeft
      : collapsed
        ? ChevronLeft
        : ChevronRight;

  return (
    <div
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-md transition-[width] duration-300",
        collapsed ? "w-14" : "w-80",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2 border-b p-3">
        {onCollapsedChange && (
          <Button
            variant="ghost"
            size="icon"
            className="size-7 shrink-0"
            aria-label={collapsed ? "Expand panel" : "Collapse panel"}
            onClick={() => onCollapsedChange(!collapsed)}
          >
            <Chevron className="size-4" />
          </Button>
        )}
        {!collapsed && (
          <div className="min-w-0 flex-1">
            <p className="truncate font-heading text-base font-medium leading-tight">
              {title}
            </p>
            {subtitle && (
              <p className="truncate text-xs text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {!collapsed && onClose && (
          <Button
            variant="ghost"
            size="icon"
            className="size-7 shrink-0"
            aria-label="Close"
            onClick={onClose}
          >
            <X className="size-4" />
          </Button>
        )}
      </div>

      {!collapsed && (
        <>
          <ScrollArea className="flex-1">
            <div className="space-y-4 p-3">{children}</div>
          </ScrollArea>
          {footer && <div className="border-t p-3">{footer}</div>}
        </>
      )}
    </div>
  );
}
