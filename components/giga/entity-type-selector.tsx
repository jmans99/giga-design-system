"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface EntityType {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export const DEFAULT_ENTITY_TYPES: EntityType[] = [
  { value: "all", label: "All entities" },
  { value: "schools", label: "Schools" },
  { value: "health", label: "Health centers" },
];

type SingleProps = {
  multiple?: false;
  value: string;
  onValueChange?: (value: string) => void;
};

type MultiProps = {
  multiple: true;
  value: string[];
  onValueChange?: (value: string[]) => void;
};

export type EntityTypeSelectorProps = {
  types?: EntityType[];
  className?: string;
} & (SingleProps | MultiProps);

/**
 * Entity-type selector — the pill segmented control that filters the map by
 * entity type (All / Schools / Health centers). Supports single-select
 * (`radiogroup`) and multi-select (`group` of checkboxes).
 */
export function EntityTypeSelector(props: EntityTypeSelectorProps) {
  const { types = DEFAULT_ENTITY_TYPES, className } = props;

  const isActive = (value: string) =>
    props.multiple ? props.value.includes(value) : props.value === value;

  const toggle = (value: string) => {
    if (props.multiple) {
      const next = new Set(props.value);
      if (next.has(value)) {
        next.delete(value);
      } else {
        next.add(value);
      }
      props.onValueChange?.(Array.from(next));
    } else {
      props.onValueChange?.(value);
    }
  };

  return (
    <div
      role={props.multiple ? "group" : "radiogroup"}
      className={cn(
        "inline-flex items-center gap-1 rounded-full border bg-card p-1 shadow-sm",
        className,
      )}
    >
      {types.map((type) => {
        const active = isActive(type.value);
        return (
          <button
            key={type.value}
            type="button"
            role={props.multiple ? "checkbox" : "radio"}
            aria-checked={active}
            onClick={() => toggle(type.value)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              active
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            {type.icon}
            {type.label}
          </button>
        );
      })}
    </div>
  );
}
