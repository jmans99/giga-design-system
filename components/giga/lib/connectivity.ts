/**
 * Giga connectivity status taxonomy.
 *
 * Single source of truth for the connectivity states used across Giga Maps:
 * status values, human labels, descriptions and the brand colours (from the
 * Giga style guide). Components read colours from here as inline styles so the
 * kit renders correctly even before a consumer extends their Tailwind config.
 */

export type ConnectivityStatus = "good" | "moderate" | "bad" | "unmapped";

export interface ConnectivityMeta {
  value: ConnectivityStatus;
  /** Short label for legends and chips. */
  label: string;
  /** Longer description for tooltips / legends. */
  description: string;
  /** Brand hex from the Giga style guide. */
  hex: string;
}

export const CONNECTIVITY: Record<ConnectivityStatus, ConnectivityMeta> = {
  good: {
    value: "good",
    label: "Good",
    description: "Connected with good download speed",
    hex: "#00d661",
  },
  moderate: {
    value: "moderate",
    label: "Moderate",
    description: "Connected with slow download speed",
    hex: "#ffc93d",
  },
  bad: {
    value: "bad",
    label: "No connectivity",
    description: "Mapped, but no connectivity",
    hex: "#ed1c24",
  },
  unmapped: {
    value: "unmapped",
    label: "Unmapped",
    description: "No location or connectivity data",
    hex: "#989898",
  },
};

/** Canonical display order: best → worst → unknown. */
export const CONNECTIVITY_ORDER: ConnectivityStatus[] = [
  "good",
  "moderate",
  "bad",
  "unmapped",
];

export function connectivityHex(status: ConnectivityStatus): string {
  return CONNECTIVITY[status].hex;
}
