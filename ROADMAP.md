# Roadmap

## Done — foundation slice (verified)

- [x] Project scaffold: Next.js 14 + Tailwind v3 + shadcn (CSS-variable theming)
- [x] **Token layer in code** — Giga palette, Manrope/Open Sans, radii, shadows, dark mode (`app/globals.css`, `tailwind.config.ts`), matching the `giga-design-system` skill
- [x] Themed shadcn primitives (button, card, badge, tabs, input, tooltip, switch, checkbox, separator, scroll-area)
- [x] **Giga Maps map-core composites** (6): status marker, connectivity legend, entity-type selector, stat tile, map detail panel, map entity popup + connectivity taxonomy lib
- [x] Registry manifest + build → `public/r/*.json`
- [x] Preview gallery, typecheck clean, rendered on-brand (dark mode)

## Next

- [ ] **Theme as an installable registry item** — `giga-theme` (currently documented via skill; `registry:theme` cssVars-only items don't emit on Tailwind v3 `shadcn build`). Cleanest once we move to Tailwind v4 (tokens become CSS vars via `@theme`).
- [ ] Remaining Giga Maps composites: map layer switcher, map controls (zoom/locate), collapsible search, country/benchmark stats view
- [ ] **Charts** — Recharts theming + chart color tokens (detail panels are chart-heavy)
- [ ] **Real map integration example** — MapLibre/Leaflet wiring for status markers + clustering (kit is currently map-engine agnostic)
- [ ] **Icon-set decision** — Carbon → lucide (shadcn default) or `@carbon/icons-react`, with a mapping table
- [ ] Mobile patterns (mobile mockups exist in Figma)
- [ ] Confirm connectivity status taxonomy + marker colour encoding with the team
- [ ] Audit **Giga Meter** (Angular) and reconcile against Giga Maps "production state" page
- [ ] Docs/preview site (or Storybook) for the registry
- [ ] Publish: push to GitHub, finalize registry install URLs, package the skill as a plugin

## Open decisions

- Icon set (lucide vs Carbon)
- Tailwind v3 (skill fidelity now) vs v4 (cleaner token distribution)
- Registry hosting: raw GitHub vs deployed site
