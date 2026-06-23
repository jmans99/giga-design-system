# Giga Design System

The Giga Product Design System as **code** — a [shadcn](https://ui.shadcn.com) registry of themed components, tokens and product patterns, so anyone (designers, PMs, engineers) can build on-brand Giga prototypes in one command.

Built on: Next.js + React + Tailwind CSS + shadcn/ui. Tokens come from the Giga style guide (Manrope / Open Sans, the Giga palette, connectivity colours).

## Quickstart (work on the system)

```bash
npm install
npm run dev            # preview gallery at http://localhost:3000
npm run registry:build # compile registry.json -> public/r/*.json
```

## Use it in a prototype

Two ways for a consumer project (a PM's prototype):

1. **Tokens** — apply the Giga theme by following [`skill/giga-design-system/SKILL.md`](skill/giga-design-system/SKILL.md) (fonts, CSS variables, Tailwind config). This is what makes vanilla shadcn components look like Giga.
2. **Components** — install the Giga components from the registry. Once this repo is pushed to GitHub, the map-core kit installs with:

   ```bash
   npx shadcn@latest add https://raw.githubusercontent.com/jmans99/giga-design-system/main/public/r/giga-map-core.json
   ```

   (Individual items — `giga-status-marker`, `giga-connectivity-legend`, etc. — install the same way.)

The fastest path for PMs: install the **packaged Claude skill** (see below) and let Claude Code wire tokens + components for them.

## What's in here

```
app/                     preview gallery (a Giga Maps-style mock)
components/ui/            themed shadcn primitives
components/giga/          Giga composites (the value-add)
  lib/connectivity.ts     connectivity status taxonomy + colours
  status-marker.tsx       map markers / clusters
  connectivity-legend.tsx map key
  entity-type-selector.tsx  all / schools / health filter
  stat-tile.tsx           KPI card
  map-detail-panel.tsx    collapsible side panel
  map-entity-popup.tsx    selected-entity card
registry.json            registry manifest
public/r/                built registry JSON (committed for raw installs)
public/logos/            official Giga brand logos (master, products, UNICEF, events)
skill/giga-design-system/ the packaged Claude skill (md + assets)
CLAUDE.md                rules Claude Code follows in this repo
ROADMAP.md               status + what's next
```

## Status

This is the **foundation slice** — tokens + themed primitives + the Giga Maps map-core kit, verified rendering on-brand. See [ROADMAP.md](ROADMAP.md) for what's next (more composites, charts, mobile, Giga Meter patterns, hosting, plugin packaging).

## License

The component code here is yours to use (shadcn components are MIT). **Note:** the purchased Figma UI kit may restrict redistribution of its *designs* — verify that license before making this repo public. The code in this repo does not include the Figma kit's proprietary files.
