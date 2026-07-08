# PowerTech Digital — build conventions

React components styled with a **compiled Tailwind utility sheet**. No provider or theme wrapper is needed — import components and make sure the bundle's `styles.css` is loaded (it pulls in the tokens, utilities, and the Inter webfont via a Google Fonts `@import`).

## Components

`Button` (variants: `default`, `secondary`, `destructive`, `outline`, `ghost`, `link`; sizes: `sm`, `default`, `lg`, `icon`), `Card` + `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`, `Header` (full site nav, sticky, white), `Footer` (dark full-width). `buttonVariants(...)` is also exported for styling a plain `<a>` like a Button.

## Styling idiom — Tailwind classes from THIS sheet only

The stylesheet is **statically compiled**: only classes present in `styles.css`'s import closure exist. Stick to this vocabulary (all verified present):

| Family | Classes |
|---|---|
| Brand (emerald `#10b981`) | `bg-primary`, `text-primary`, `border-primary`, `bg-primary-50` … `bg-primary-900`, `text-primary-foreground` (white), `hover:bg-primary-600` |
| Indigo accent (`#6577F3`) | `bg-accent`, `text-accent`, `border-accent`, `text-accent-foreground` |
| Extra accents | `bg-accent-purple` (#9333ea), `bg-accent-cyan` (#0FADCF), `bg-accent-teal` (#06b6d4) |
| Semantic tokens | `bg-background`, `text-foreground`, `bg-card`, `bg-muted`, `text-muted-foreground`, `bg-destructive`, `border-border`, `bg-popover` |
| Radius | `rounded-lg` = `var(--radius)` (0.5rem), `rounded-md`, `rounded-sm` |
| Grays (site copy) | `text-gray-600`, `text-gray-900`, `bg-gray-50`, `bg-gray-900` |

Note: `bg-secondary` / `variant="secondary"` resolves to the **same emerald** as primary in this theme — for a contrasting accent use `bg-accent` or the extra accents.

For anything not in the sheet, use inline styles with the CSS custom properties (HSL triples, wrap in `hsl()`): `--primary`, `--accent`, `--background`, `--foreground`, `--muted`, `--destructive`, `--border`, `--radius`. Dark mode: add the `.dark` class on a container — the semantic token classes flip automatically.

Typeface is **Inter** everywhere (loaded by `styles.css`; body fallback `ui-sans-serif, system-ui`).

## Where the truth lives

Read `styles.css` → `_ds_bundle.css` (tokens at the top, utilities below) before inventing styling; per-component API is in `components/<group>/<Name>/<Name>.d.ts` with usage in `<Name>.prompt.md`.

## Idiomatic example (from the site's own pages)

```tsx
<Card className="h-full border-2 hover:border-primary hover:shadow-lg transition-all">
  <CardHeader>
    <div className="mb-4 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
      {/* icon, text-primary */}
    </div>
    <CardTitle>Power Platform Solutions</CardTitle>
    <CardDescription>Automate workflows, build custom apps, visualize data</CardDescription>
  </CardHeader>
  <CardContent>
    <Button className="gap-2">Get Started</Button>
    <Button variant="outline">Learn More</Button>
  </CardContent>
</Card>
```

Page frames: `Header` on top, content in `mx-auto max-w-7xl px-6` sections, `Footer` at the bottom — hero CTAs use `Button size="lg"`; branded showcase blocks use `Card` with `bg-gradient-to-br text-white border-0 shadow-2xl`.
