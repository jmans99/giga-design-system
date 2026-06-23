# Giga illustrations

124 official Giga illustration SVGs. Source: the **Giga Brand Asset Generator** (https://gigabrand.vercel.app/illustrations).

## Families

### Pillar pictograms — `fill/`, `outlines/`
The 5 Giga pillars: **Mapping, Model, Finance, Contract, Capacity Development**.
- `fill/<id>.svg` — full-colour
- `outlines/<id>-white.svg`, `outlines/<id>-blue.svg` — line art

Note: Capacity Development's fill is `fill/development.svg`, its outlines are `outlines/capacity-development-{white,blue}.svg`.

### General pictograms — `general/fill/`, `general/outlines/`
35 utility pictograms, each as fill + outline-white + outline-blue:

`adjustment, alert, antena, buildings, check-data-01, check-data-02, cloud, code, compass, computer, congratulations, connection, cycle-data, devices, globe-01, globe-02, hierarchy, key, kid, lens, location-01, location-02, measure-cycle, network, not-mapped, notification, people, person-location, satellite, school-location, schools, search, sharing-data, team, update`

(`antena` is spelled as in the source.)

### Giga Meter scenes — `giga-meter/`
4 composite scenes (single colour file each): `computers, connection, contract, people`.

## Variants

- **fill** — full-colour illustration
- **outline-blue** — line art in Giga blue; use on light backgrounds
- **outline-white** — line art in white; use on dark backgrounds (e.g. Giga Maps)

## Usage

```tsx
// dark background (Giga Maps empty state)
<img src="/illustrations/general/outlines/not-mapped-white.svg" alt="" className="h-24" />
// light background
<img src="/illustrations/fill/mapping.svg" alt="Mapping" className="h-32" />
```

Raw URL pattern:
`https://raw.githubusercontent.com/jmans99/giga-design-system/main/public/illustrations/<path>`
