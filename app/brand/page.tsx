import { cn } from "@/lib/utils";

const groups: { title: string; base: string; items: string[] }[] = [
  {
    title: "Giga master",
    base: "/logos",
    items: [
      "giga-main-horizontal",
      "giga-main-horizontal-white",
      "giga-main-vertical",
      "giga-main-vertical-white",
      "giga-complete-horizontal",
      "giga-complete-horizontal-white",
      "giga-unicef-itu-vertical",
      "giga-unicef-itu-vertical-white",
    ],
  },
  {
    title: "Products",
    base: "/logos/products",
    items: [
      "gigamaps",
      "gigamaps-white",
      "gigameter",
      "gigameter-white",
      "gigablocks",
      "gigablocks-white",
      "gigamapsapi",
      "gigamapsapi-white",
      "gigascore",
      "gigascore-white",
      "gigasync",
      "gigasync-white",
      "gigavalidate",
      "gigavalidate-white",
    ],
  },
  {
    title: "UNICEF",
    base: "/logos/unicef",
    items: [
      "unicef",
      "digital-impact-division-black",
      "digital-impact-division-white",
      "digital-impact-unboxed",
      "digital-inclusion-black",
      "digital-inclusion-blue",
      "digital-inclusion-white",
    ],
  },
  {
    title: "Events",
    base: "/logos/events",
    items: ["connectivity-forum", "gep"],
  },
];

export default function BrandPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="font-heading text-3xl">Brand assets — logos</h1>
      <p className="mt-2 text-muted-foreground">
        Every Giga logo in the design system. White variants are shown on dark;
        each caption is the file under <code>/logos</code>.
      </p>

      {groups.map((group) => (
        <section key={group.title} className="mt-10">
          <h2 className="mb-4 font-heading text-xl">{group.title}</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {group.items.map((name) => {
              const dark = name.includes("white");
              return (
                <figure
                  key={name}
                  className="overflow-hidden rounded-lg border bg-card"
                >
                  <div
                    className={cn(
                      "flex h-28 items-center justify-center p-5",
                      dark ? "bg-grey-950" : "bg-white",
                    )}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`${group.base}/${name}.svg`}
                      alt={name}
                      className="max-h-14 w-auto max-w-full"
                    />
                  </div>
                  <figcaption className="truncate border-t px-3 py-2 text-xs text-muted-foreground">
                    {name}.svg
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
