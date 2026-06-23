/**
 * Giga connectivity taxonomies.
 *
 * Two related dimensions used across Giga Maps, sharing the `unknown` state:
 *  - Quality: good | moderate | bad | unknown   (download-speed banding)
 *  - State:   connected | not-connected | unknown   (binary connectivity)
 *
 * Colours come from the Giga style guide. Components read them as inline styles
 * so the kit renders correctly before a consumer extends their Tailwind config.
 */

export type ConnectivityQuality = "good" | "moderate" | "bad" | "unknown";
export type ConnectivityState = "connected" | "not-connected" | "unknown";
export type ConnectivityStatus = ConnectivityQuality | ConnectivityState;

export interface ConnectivityMeta {
  value: ConnectivityStatus;
  label: string;
  description: string;
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
    description: "Connected with moderate download speed",
    hex: "#ffc93d",
  },
  bad: {
    value: "bad",
    label: "Bad",
    description: "Connected with poor download speed",
    hex: "#ed1c24",
  },
  connected: {
    value: "connected",
    label: "Connected",
    description: "Has internet connectivity",
    hex: "#00d661",
  },
  "not-connected": {
    value: "not-connected",
    label: "Not connected",
    description: "No internet connectivity",
    hex: "#ed1c24",
  },
  unknown: {
    value: "unknown",
    label: "Unknown",
    description: "No connectivity data",
    hex: "#6f6f6f",
  },
};

/** Quality banding: best → worst → unknown. */
export const QUALITY_ORDER: ConnectivityQuality[] = [
  "good",
  "moderate",
  "bad",
  "unknown",
];

/** Binary state: connected → not connected → unknown. */
export const STATE_ORDER: ConnectivityState[] = [
  "connected",
  "not-connected",
  "unknown",
];

/** @deprecated alias for QUALITY_ORDER, kept for back-compat. */
export const CONNECTIVITY_ORDER = QUALITY_ORDER;

export function connectivityHex(status: ConnectivityStatus): string {
  return CONNECTIVITY[status].hex;
}
