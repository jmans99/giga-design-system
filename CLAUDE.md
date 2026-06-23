# Giga Design System — rules for Claude Code

This repo is the Giga Product Design System (code). When building or styling UI here — or in any prototype that uses this system — follow these rules exactly. They override default styling choices.

## Stack

Next.js + React + Tailwind CSS + shadcn/ui. shadcn primitives are **vanilla**, themed only through CSS variables + Tailwind config. Do not fork or hand-restyle primitives.

## Fonts (only two)

- **Manrope** → headings (`font-heading`), weight 500. Section titles 600.
- **Open Sans** → everything else (`font-sans`), weights 400 / 500 / 600.

## Colour (Giga palette only)

- Primary base `#277aff` (`--primary`). Never introduce off-palette colours.
- Connectivity status comes from `components/giga/lib/connectivity.ts` — good `#00d661`, moderate `#ffc93d`, no-connectivity `#ed1c24`, unmapped `#989898`. Always use this taxonomy; never hardcode status colours.
- Use semantic tokens (`bg-background`, `text-foreground`, `bg-card`, `text-muted-foreground`, `border-border`, `bg-primary`) so light/dark both work.
- **Giga Maps is dark mode.** Wrap map UI in `.dark`.

## Shape & motion

- Radius via `--radius` (6px): `rounded-lg/md/sm`. Pills use `rounded-full`.
- Shadows: form controls `shadow`, cards `shadow-sm/md`, dropdowns/tooltips `shadow-lg`, modals `shadow-xl`. Interactive elements go **up one shadow step on hover**.
- Motion: spring — medium/large `~400ms` (mass 1, stiffness 180, damping 30); small `~200ms` (stiffness 720, damping 60).

## Components

- Primitives live in `components/ui/*` (shadcn). Add more with `npx shadcn@latest add <name>`.
- Giga composites live in `components/giga/*`. Prefer these for product UI:
  - `StatusMarker`, `ConnectivityLegend` — map markers + key
  - `EntityTypeSelector` — all / schools / health filter (single or multi)
  - `StatTile` — KPI card (detail panel)
  - `MapDetailPanel` — collapsible side panel
  - `MapEntityPopup` — selected-entity card
- Build new product UI by composing these. When you add a reusable composite, add it to `registry.json` and run `npm run registry:build`.

## Don'ts

- No fonts other than Manrope + Open Sans. No colours outside the Giga palette.
- Don't hardcode connectivity colours — import from the taxonomy.
- Don't restyle shadcn primitives inline to "fix" the look — fix the token instead.
