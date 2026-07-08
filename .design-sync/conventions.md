# PowerTech Digital — build conventions (Lumina Refined)

React components styled with a **compiled Tailwind utility sheet**. No provider or theme wrapper is needed — import components and make sure the bundle's `styles.css` is loaded (it pulls in the tokens, utilities, and the Inter / Instrument Serif / IBM Plex Mono webfonts via a Google Fonts `@import`).

## Components

`Button` (variants: `default` = emerald gradient with chunky offset shadow that presses in on hover, `secondary`/`outline` = white with 1.5px ink border + offset shadow, `ghost`, `link` = indigo, `destructive`; sizes: `sm`, `default`, `lg`, `icon`), `Card` + `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` (every Card ships a 2px emerald→indigo top keyline and lifts on hover — suppress the keyline on colored/dark cards with `before:hidden`), `Header` (sticky, blurred white), `Footer` (dark ink, gradient hairline top). `buttonVariants(...)` styles a plain `<a>` like a Button.

## Styling idiom — Tailwind classes from THIS sheet only

The stylesheet is **statically compiled**: only classes in `styles.css`'s import closure exist. Verified vocabulary:

| Family | Classes |
|---|---|
| Brand emerald (deep `#047857`) | `bg-primary`, `text-primary`, `border-primary`, `bg-primary-50` … `bg-primary-900`, `text-primary-foreground` (white), `hover:bg-primary-600` |
| Ink (`#0F172A`) | `bg-ink`, `text-ink`, `border-ink` — dark panels, secondary-button borders |
| Indigo accent (`#4F46E5`) | `bg-accent`, `text-accent`, `border-accent`, plus `bg-accent-purple`/`-cyan`/`-teal` |
| Semantic tokens | `bg-background` (green-tinted `#F7FAF9`), `text-foreground`, `bg-card`, `bg-muted`, `text-muted-foreground` (`#5B6B7B`-range), `bg-destructive`, `border-border`, `bg-popover` |
| Radius | `rounded-lg` = `var(--radius)` (0.875rem / 14px), `rounded-md` (buttons), `rounded-sm`, `rounded-[11px]` (icon chips) |
| Grays | `text-gray-600`, `text-gray-900`, `bg-gray-50`, `text-slate-300`, `text-slate-400` (copy on dark) |

**Lumina signature utilities** (in the sheet — use these to speak the style):
- `mono-label` — IBM Plex Mono 12px uppercase 0.12em kicker: section labels (`// Services`), card indices, meta rows
- `serif-accent` — Instrument Serif italic; ONE word/phrase per headline, sized ~`text-[1.1em]`
- `text-gradient-brand` — emerald→indigo gradient text (pairs with `serif-accent`)
- `hairline-gradient` / `hairline-gradient-center` — 1px emerald→indigo keyline separators
- `dot-grid` (light canvases) / `dot-grid-dark` (ink panels) — faint texture
- `font-serif-accent` / `font-mono-label` — the raw font-family utilities

Note: `bg-secondary` is **white** with ink foreground (`text-secondary-foreground`) — the secondary/outline button look. For a color accent use `bg-accent` (indigo) or the emerald scale.

For anything not in the sheet, inline styles with the CSS custom properties (HSL triples, wrap in `hsl()`): `--primary`, `--accent`, `--background`, `--foreground`, `--muted`, `--destructive`, `--border`, `--radius`. Dark mode: `.dark` class on a container flips the semantic tokens.

## Where the truth lives

Read `styles.css` → `_ds_bundle.css` (tokens at top, utilities below) before inventing styling; per-component API in `components/<group>/<Name>/<Name>.d.ts`, usage in `<Name>.prompt.md`.

## Idiomatic example (from the site's own pages)

```tsx
<section className="relative bg-background dot-grid py-20">
  <p className="mono-label text-primary mb-4">{"// Services"}</p>
  <h1 className="text-4xl font-extrabold tracking-[-0.03em]">
    Automate what <span className="serif-accent text-gradient-brand text-[1.12em]">slows you down</span>
  </h1>
  <Card className="h-full cursor-pointer">
    <CardHeader>
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-[11px] bg-primary-50 flex items-center justify-center">{/* icon, text-primary */}</div>
        <span className="font-mono-label text-xs text-[#C2CCD4]">01</span>
      </div>
      <CardTitle>Power Platform Solutions</CardTitle>
      <CardDescription>Automate workflows, build custom apps, visualize data</CardDescription>
    </CardHeader>
    <CardContent>
      <Button className="gap-2">Book a consultation →</Button>
      <Button variant="outline">See our work</Button>
    </CardContent>
  </Card>
</section>
```

Page frames: `Header` top, sections in `mx-auto max-w-7xl px-6`, `Footer` bottom. Dark CTA/stat panels: `bg-ink dot-grid-dark` with `mono-label text-primary-400` kickers and `text-slate-400` copy.
