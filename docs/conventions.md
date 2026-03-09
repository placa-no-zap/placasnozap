# Conventions

## Imports

- Always use the `@/` path alias (maps to `src/`), never relative paths
- Import UI primitives from `@/components/ui/`
- Import hooks from `@/hooks/`
- Import utilities from `@/lib/`

## Styling

- Use Tailwind CSS classes directly; use `cn()` from `@/lib/utils` for conditional classes
- Custom CSS variables (gradients, shadows) are defined in `src/index.css`
- Design tokens use HSL color system via CSS custom properties
- Responsive design is mobile-first with `md:` and `lg:` breakpoints

## Component Naming

- Page components: PascalCase in `src/pages/`
- Section components: PascalCase in `src/components/`
- UI primitives: kebab-case in `src/components/ui/`
- Hooks: `use-kebab-case` in `src/hooks/`

## Button Variants

Custom variants beyond shadcn defaults:
- `hero`: gradient background with scale-up hover effect
- Size `xl`: `h-14 px-10 text-lg` — used for CTA buttons

## WhatsApp Links

Use `WHATSAPP_NUMBER` from `@/lib/whatsapp.ts` to build CTA links:
```
https://wa.me/{WHATSAPP_NUMBER}?text={encodeURIComponent(message)}
```

## TypeScript

- Path alias: `@/*` → `./src/*` (configured in `tsconfig.json` and `vite.config.ts`)
- Relaxed strict mode: `noImplicitAny: false`, `strictNullChecks: false`
