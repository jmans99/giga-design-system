# Giga components — catalog

Import from `@/components/giga/*`. All are typed and accessible. Status colours come from `@/components/giga/lib/connectivity`.

## StatusMarker

Coloured dot / counted cluster for plotting entities on a map. Map-engine agnostic — you position it.

```tsx
<StatusMarker status="good" />
<StatusMarker status="moderate" count={23} />   // cluster
<StatusMarker status="bad" selected pulse />
```

Props: `status` (`good|moderate|bad|unmapped`), `size` (`sm|md|lg`), `count?`, `pulse?`, `selected?`.

## ConnectivityLegend

The map key. Floats over the map (usually bottom-right).

```tsx
<ConnectivityLegend
  title="School connectivity"
  counts={{ good: 812004, moderate: 410233, bad: 233910, unmapped: 644120 }}
/>
```

Props: `title?`, `counts?`, `statuses?`, `orientation?` (`vertical|horizontal`).

## EntityTypeSelector

Pill filter for entity type. Single or multi-select.

```tsx
// single
<EntityTypeSelector value={type} onValueChange={setType} />
// multi
<EntityTypeSelector multiple value={types} onValueChange={setTypes} />
```

Props: `types?` (defaults to all / schools / health), and either `{ value: string }` or `{ multiple: true, value: string[] }`.

## StatTile

KPI card for the detail panel. Optional trend + chart slot.

```tsx
<StatTile label="Schools mapped" value="2.1M" delta={{ value: "+12% this year", direction: "up" }} />
<StatTile label="Speed" value="24" unit="Mbps" chart={<Sparkline .../>} />
```

Props: `label`, `value`, `unit?`, `delta?` (`{ value, direction: up|down|flat }`), `icon?`, `chart?`.

## MapDetailPanel

Collapsible side panel over the map.

```tsx
<MapDetailPanel title="Global connectivity" subtitle="Schools & health centers"
  collapsed={collapsed} onCollapsedChange={setCollapsed}
  footer={<Button className="w-full">View report</Button>}>
  <StatTile ... />
</MapDetailPanel>
```

Props: `title`, `subtitle?`, `collapsed?`, `onCollapsedChange?`, `onClose?`, `side?` (`left|right`), `footer?`.

## MapEntityPopup

Card shown when an entity is selected on the map.

```tsx
<MapEntityPopup name="Esperanza Primary School" entityType="School" status="good"
  location="Nairobi, KE"
  stats={[{ label: "Download", value: "24 Mbps" }, { label: "Students", value: "612" }]}
  onViewDetails={() => openPanel()} />
```

Props: `name`, `entityType?`, `status`, `location?`, `stats?` (`{ label, value }[]`), `onViewDetails?`.
