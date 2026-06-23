# Skill assets

Drop the official Giga brand assets here so prototypes use real artwork, not placeholders. Nothing here is fabricated — add the real files:

## Needed

- `giga-logo.svg` — primary GigaMaps / Giga wordmark (and a mono/white variant for dark mode, e.g. `giga-logo-white.svg`).
- `favicon` / app icons if prototypes need them.

## Fonts

Type is currently loaded from Google Fonts via the `@import` in `setup.md` (Manrope + Open Sans) — no font files required. If a project must self-host (offline, privacy), add woff2 files here and swap the `@import` for `@font-face`:

- `Manrope-{Medium,SemiBold}.woff2`
- `OpenSans-{Regular,Medium,SemiBold}.woff2`

## Usage

Reference assets from the skill, e.g. an `<img src="/giga-logo-white.svg" />` in the header, or import the SVG as a React component.

> TODO: add the official logo files. Ask the Giga brand owner for the current wordmark package.
