# Giga product patterns

## Giga Maps — map view layout (dark mode)

The canonical Giga Maps screen. Wrap everything in `.dark`.

```tsx
<div className="dark min-h-screen bg-grey-950 text-foreground">
  <header>
    GigaMaps logo · <EntityTypeSelector multiple .../> · account / share
  </header>
  <div className="relative h-[calc(100vh-53px)]">
    {/* map canvas (MapLibre/Leaflet) */}
    {markers.map(m => <StatusMarker key={m.id} status={m.status} count={m.count}
       className="absolute -translate-x-1/2 -translate-y-1/2" style={{ top, left }} />)}

    <MapDetailPanel className="absolute left-4 top-4 bottom-4" .../>   {/* left */}
    <MapEntityPopup className="absolute ..." .../>                     {/* on select */}
    <ConnectivityLegend className="absolute bottom-4 right-4" .../>    {/* bottom-right */}
  </div>
</div>
```

Anatomy: header (logo + entity filter + account) · left collapsible detail panel · map canvas with status markers + clusters · entity popup on selection · legend bottom-right.

## Entity filtering

- Single zoom level / view → `EntityTypeSelector` single-select.
- "Show schools and health together" → `multiple` with a `string[]`.
- Drive marker visibility + counts off the selected set.

## Connectivity status

- One taxonomy everywhere: markers, legend, popup, chips. Import from `lib/connectivity`.
- Marker rendering scales with zoom: individual dots when zoomed in, clusters (`count`) when zoomed out.
- Two taxonomies: **quality** (good/moderate/bad/unknown) and binary **state** (connected/not-connected/unknown), sharing `unknown` (grey). `ConnectivityLegend` defaults to quality; pass `statuses={STATE_ORDER}` for the binary legend.

## Detail flow

Select entity → `MapEntityPopup` (quick stats) → "View details" → expand `MapDetailPanel` with full `StatTile`s and charts. Panel collapses to a rail (`collapsed`) to give the map room.

## Light vs dark

Giga Maps = dark. Dashboards / forms / Giga Meter web = light by default. Same tokens; just toggle the `.dark` class on a wrapper.
