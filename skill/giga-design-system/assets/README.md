# Skill assets

Official Giga brand assets used by the design system. Source: the **Giga Brand Asset Generator** (https://gigabrand.vercel.app/logos).

## Logos

- `giga-complete-horizontal.svg` — primary Giga horizontal lockup (wordmark `#222222`, accent `#277AFF`). Use on light backgrounds.
- `giga-complete-horizontal-white.svg` — dark-mode variant (wordmark white, accent blue). Use on dark backgrounds, e.g. the Giga Maps header.

Both also live in the repo at `public/logos/` so the app and prototypes can serve them, e.g. `/logos/giga-complete-horizontal-white.svg`.

## Usage

```tsx
<img src="/logos/giga-complete-horizontal-white.svg" alt="Giga" className="h-7 w-auto" />
```

## Not included (yet)

- **Giga · UNICEF · ITU co-brand lockup** — the brand site generates this client-side; it is not served as a distinct static file (the `giga-unicef-itu-horizontal.svg` path returns the base lockup). Export it from the generator UI and drop it here if a prototype needs the co-brand version.
- **App icons / favicon** — add if needed.

## Fonts

Type loads from Google Fonts via the `@import` in [`../references/setup.md`](../references/setup.md) (Manrope + Open Sans) — no font files required. To self-host (offline / privacy), add woff2 files here and swap the `@import` for `@font-face`.
