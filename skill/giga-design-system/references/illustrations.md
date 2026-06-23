# Giga illustrations

124 official Giga illustration SVGs live in the repo at `public/illustrations/` (raw-accessible). They are not duplicated into the skill — reference them by path or raw URL.

## What's available

- **Pillar pictograms** (`fill/`, `outlines/`): Mapping, Model, Finance, Contract, Capacity Development.
- **General pictograms** (`general/fill/`, `general/outlines/`): 35 utility icons — incl. `schools`, `not-mapped`, `school-location`, `location-01/02`, `connection`, `satellite`, `devices`, `network`, `search`, `team`, `kid`, `globe-01/02`.
- **Giga Meter scenes** (`giga-meter/`): computers, connection, contract, people.

Each pillar/general pictogram has three variants: `fill` (full-colour), `outline-blue` (line art for light bg), `outline-white` (line art for dark bg).

## Pick by background

- Giga Maps (dark) → `*-white.svg` outlines.
- Light dashboards / Giga Meter → `fill` or `*-blue.svg`.

## Usage

```tsx
<img src="/illustrations/general/outlines/not-mapped-white.svg" alt="" className="h-24" />
```

For prototypes built outside this repo, reference the raw URL:
`https://raw.githubusercontent.com/jmans99/giga-design-system/main/public/illustrations/<path>`

Full index + naming notes: `public/illustrations/README.md` in the design-system repo.
