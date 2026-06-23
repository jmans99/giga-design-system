# Skill assets — Giga brand logos

Official Giga brand assets. Source: the **Giga Brand Asset Generator** (https://gigabrand.vercel.app/logos), original path pattern `/logos/<name>.svg`.

This folder holds the curated set used when building Giga products. The **full catalog** (vertical lockups, UNICEF division/inclusion marks, event logos) lives in the repo at `public/logos/` and is raw-accessible, e.g.
`https://raw.githubusercontent.com/jmans99/giga-design-system/main/public/logos/products/gigameter.svg`.

## Giga master logos

- `giga-main-horizontal.svg` · `giga-main-horizontal-white.svg` — the Giga logo (mark + wordmark). Default for product headers. White variant for dark backgrounds.
- `giga-complete-horizontal.svg` · `giga-complete-horizontal-white.svg` — the Giga · UNICEF · ITU co-brand lockup (this is the same file the site serves as `giga-unicef-itu-horizontal`).
- Vertical lockups (`giga-main-vertical`, `giga-unicef-itu-vertical`, + `-white`) are in `public/logos/`.

## Product logos (`products/`)

`gigamaps`, `gigameter`, `gigablocks`, `gigamapsapi`, `gigascore`, `gigasync`, `gigavalidate` — black wordmark lockups. For dark backgrounds, export a recolored version from the generator (naive black→white inversion risks knockout artifacts) or apply a CSS `filter: invert(1)`.

## UNICEF

- `unicef.svg` — UNICEF logo. Division/inclusion marks (Digital Impact, Digital Inclusion in black/blue/white) are in `public/logos/unicef/`.

## Usage

```tsx
<img src="/logos/giga-main-horizontal-white.svg" alt="Giga" className="h-7 w-auto" />
```

## Colour mechanism

Giga master lockups are two-tone — dark (`#222222` / `#393939`) + Giga blue (`#277AFF`) + grey stroke (`#CACACA`). The `-white` variants swap the dark to `#FFFFFF` and keep the blue/grey, so they read on dark backgrounds.

## Fonts

Type loads from Google Fonts via the `@import` in [`../references/setup.md`](../references/setup.md) (Manrope + Open Sans). To self-host, add woff2 files here and swap to `@font-face`.
