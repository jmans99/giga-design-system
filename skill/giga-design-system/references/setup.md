# Setup — tokens (copy-paste)

Apply these once per project so vanilla shadcn renders as Giga.

## 1. Fonts + CSS variables → `app/globals.css`

```css
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%; --foreground: 0 0% 9%;
    --card: 0 0% 100%; --card-foreground: 0 0% 9%;
    --popover: 0 0% 100%; --popover-foreground: 0 0% 9%;
    --primary: 214 100% 58%; --primary-foreground: 0 0% 100%;
    --secondary: 0 0% 96%; --secondary-foreground: 0 0% 9%;
    --muted: 0 0% 91%; --muted-foreground: 0 0% 44%;
    --accent: 214 100% 95%; --accent-foreground: 0 0% 9%;
    --destructive: 357 88% 52%; --destructive-foreground: 0 0% 100%;
    --border: 0 0% 91%; --input: 0 0% 91%; --ring: 214 100% 58%;
    --radius: 6px;
    --chart-1: 214 100% 58%; --chart-2: 146 100% 42%; --chart-3: 43 100% 62%;
    --chart-4: 280 65% 60%; --chart-5: 16 90% 55%;
  }
  .dark {
    --background: 0 0% 9%; --foreground: 0 0% 98%;
    --card: 0 0% 9%; --card-foreground: 0 0% 98%;
    --popover: 0 0% 9%; --popover-foreground: 0 0% 98%;
    --primary: 214 100% 58%; --primary-foreground: 0 0% 100%;
    --secondary: 0 0% 9%; --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 22%; --muted-foreground: 0 0% 79%;
    --accent: 0 0% 22%; --accent-foreground: 0 0% 98%;
    --destructive: 357 88% 52%; --destructive-foreground: 0 0% 100%;
    --border: 0 0% 22%; --input: 0 0% 22%; --ring: 214 100% 58%;
    --chart-1: 214 100% 58%; --chart-2: 146 100% 50%; --chart-3: 43 100% 62%;
    --chart-4: 280 70% 68%; --chart-5: 16 90% 62%;
  }
}

@layer base {
  * { @apply border-border; }
  body { @apply bg-background text-foreground; font-family: "Open Sans", ui-sans-serif, system-ui, sans-serif; }
  h1,h2,h3,h4,h5,h6 { font-family: "Manrope", ui-sans-serif, system-ui, sans-serif; font-weight: 500; }
}
```

## 2. Tailwind extensions → `tailwind.config.ts`

Add `darkMode: ["class"]`, the shadcn token colours, and the Giga palette:

```ts
fontFamily: {
  sans: ["Open Sans", "ui-sans-serif", "system-ui", "sans-serif"],
  heading: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
},
colors: {
  // ...standard shadcn token mappings (border, input, ring, background,
  // foreground, primary, secondary, destructive, muted, accent, popover, card)
  primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))",
    50:"#eaf2ff",100:"#d4e5ff",200:"#bfd7ff",300:"#a9caff",400:"#7eb0ff",
    500:"#5495ff",600:"#277aff",700:"#0050e6",800:"#002d9c",900:"#002d76" },
  grey: { 50:"#fafafa",100:"#f4f4f4",200:"#e9e9e9",300:"#dfdfdf",400:"#cacaca",
    500:"#989898",600:"#6f6f6f",700:"#525252",800:"#393939",900:"#161616",950:"#161616" },
  connectivity: { good:"#00d661", moderate:"#ffc93d", bad:"#ed1c24", unmapped:"#989898" },
  chart: { "1":"hsl(var(--chart-1))","2":"hsl(var(--chart-2))","3":"hsl(var(--chart-3))",
    "4":"hsl(var(--chart-4))","5":"hsl(var(--chart-5))" },
},
borderRadius: { lg:"var(--radius)", md:"calc(var(--radius) - 2px)", sm:"calc(var(--radius) - 4px)" },
```

(The full config is in the design-system repo's `tailwind.config.ts`.)

## 3. components.json

Use `"cssVariables": true`, `"baseColor": "neutral"`, `"iconLibrary": "lucide"`. Then `npx shadcn@latest add ...` picks up the Giga theme automatically.
