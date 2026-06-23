"use client";

import * as React from "react";
import { EntityTypeSelector } from "@/components/giga/entity-type-selector";
import { ConnectivityLegend } from "@/components/giga/connectivity-legend";
import { StatusMarker } from "@/components/giga/status-marker";
import { MapDetailPanel } from "@/components/giga/map-detail-panel";
import { MapEntityPopup } from "@/components/giga/map-entity-popup";
import { StatTile } from "@/components/giga/stat-tile";
import { Button } from "@/components/ui/button";
import type { ConnectivityStatus } from "@/components/giga/lib/connectivity";

const MARKERS: Array<{
  top: string;
  left: string;
  status: ConnectivityStatus;
  count?: number;
}> = [
  { top: "32%", left: "22%", status: "good" },
  { top: "44%", left: "30%", status: "good", count: 8 },
  { top: "58%", left: "26%", status: "moderate" },
  { top: "38%", left: "52%", status: "bad" },
  { top: "52%", left: "60%", status: "moderate", count: 23 },
  { top: "64%", left: "54%", status: "good" },
  { top: "30%", left: "72%", status: "unknown" },
  { top: "48%", left: "80%", status: "good", count: 5 },
  { top: "68%", left: "76%", status: "bad" },
];

export default function Home() {
  const [entities, setEntities] = React.useState<string[]>([
    "schools",
    "health",
  ]);
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div className="dark min-h-screen bg-grey-950 text-foreground">
      {/* Header */}
      <header className="flex items-center gap-4 border-b border-border px-4 py-2.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logos/giga-main-horizontal-white.svg"
          alt="Giga"
          className="h-7 w-auto"
        />
        <EntityTypeSelector
          multiple
          value={entities}
          onValueChange={setEntities}
        />
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="sm">
            Share
          </Button>
          <div className="size-8 rounded-full bg-primary" />
        </div>
      </header>

      {/* Map area */}
      <div className="relative h-[calc(100vh-53px)] overflow-hidden bg-grey-900">
        {/* faux map backdrop */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 40%, #1f2937 0, transparent 45%), radial-gradient(circle at 70% 60%, #1b2430 0, transparent 40%)",
          }}
        />

        {/* markers */}
        {MARKERS.map((m, i) => (
          <StatusMarker
            key={i}
            status={m.status}
            count={m.count}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ top: m.top, left: m.left }}
          />
        ))}

        {/* left detail panel */}
        <div className="absolute left-4 top-4 bottom-4">
          <MapDetailPanel
            title="Global connectivity"
            subtitle="Schools & health centers"
            collapsed={collapsed}
            onCollapsedChange={setCollapsed}
            footer={<Button className="w-full">View report</Button>}
          >
            <StatTile
              label="Schools mapped"
              value="2.1M"
              delta={{ value: "+12% this year", direction: "up" }}
            />
            <StatTile
              label="With connectivity"
              value="38%"
              delta={{ value: "+3 pts", direction: "up" }}
            />
            <StatTile label="Health centers" value="146K" />
          </MapDetailPanel>
        </div>

        {/* selected entity popup */}
        <div className="absolute left-1/2 top-1/3">
          <MapEntityPopup
            name="Esperanza Primary School"
            entityType="School"
            status="good"
            location="Nairobi, KE"
            stats={[
              { label: "Download", value: "24 Mbps" },
              { label: "Students", value: "612" },
            ]}
            onViewDetails={() => {}}
          />
        </div>

        {/* legend */}
        <ConnectivityLegend
          className="absolute bottom-4 right-4 w-56"
          title="School connectivity"
          counts={{ good: 812_004, moderate: 410_233, bad: 233_910, unknown: 644_120 }}
        />
      </div>
    </div>
  );
}
