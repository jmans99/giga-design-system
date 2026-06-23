---
name: giga-design-system
description: Build product UI in the Giga Product Design System — Manrope/Open Sans type, the Giga colour palette, shadcn/ui + Tailwind tokens, plus Giga product composites (map status markers, connectivity legend, entity filters, detail panels). Use when building or styling a Next.js/React Giga product (Giga Maps, Giga Meter, dashboards) so it is on brand by construction.
---

# Giga Product Design System

Build on-brand Giga UI. Stack: **Next.js + React + Tailwind CSS + shadcn/ui**. shadcn primitives are vanilla, themed only via CSS variables + Tailwind config. Compose product UI from the Giga components below — don't reinvent or restyle.

## Setup (once per project)

1. Apply tokens (fonts, CSS variables, Tailwind extensions) — copy from [`references/setup.md`](references/setup.md).
2. Install Giga components from the registry:

   ```bash
   # whole Giga Maps map-core kit in one command
   npx shadcn@latest add https://raw.githubusercontent.com/jmans99/giga-design-system/main/public/r/giga-map-core.json
   # or individual items, e.g. giga-status-marker.json, giga-connectivity-legend.json
   ```

## Rules (must follow)

- **Fonts:** Manrope → headings (`font-heading`, weight 500; titles 600). Open Sans → everything else (`font-sans`, 400/500/600). No other fonts.
- **Colour:** Giga palette only. Primary base `#277aff`. Use semantic tokens (`bg-background`, `text-foreground`, `bg-card`, `text-muted-foreground`, `border-border`, `bg-primary`) so light + dark both work.
- **Connectivity status:** always from the taxonomy (`good #00d661`, `moderate #ffc93d`, `no-connectivity #ed1c24`, `unmapped #989898`). Never hardcode status colours.
- **Giga Maps is dark mode** — wrap map UI in `.dark`.
- **Radius:** `--radius` 6px (`rounded-lg/md/sm`); pills `rounded-full`.
- **Shadows:** controls `shadow`, cards `shadow-sm/md`, dropdowns/tooltips `shadow-lg`, modals `shadow-xl`. Interactive elements move **up one shadow step on hover**.
- **Motion:** spring — medium/large ~400ms (mass 1, stiffness 180, damping 30); small ~200ms (stiffness 720, damping 60).

## Components

Giga composites (in `components/giga/`) — full props + examples in [`references/components.md`](references/components.md):

- `StatusMarker` / `ConnectivityLegend` — map markers (with clustering) + the map key
- `EntityTypeSelector` — all / schools / health filter (single or multi-select)
- `StatTile` — KPI card for the detail panel
- `MapDetailPanel` — collapsible side panel
- `MapEntityPopup` — selected-entity card

Primitives: standard shadcn in `components/ui/`. Add more with `npx shadcn@latest add <name>`.

## Patterns

Common Giga product layouts (map view, entity filtering, detail flows) are in [`references/patterns.md`](references/patterns.md).

## Assets

- Logos & fonts: [`assets/README.md`](assets/README.md)
- Illustrations (124 Giga pictograms + Giga Meter scenes): [`references/illustrations.md`](references/illustrations.md)
