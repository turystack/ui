# Refactor Component: $ARGUMENTS

Migrate the `$ARGUMENTS` component from shadcn/CVA to **tailwind-variants** following the project's established architecture.

## Requirements

- The goal is **zero shadcn dependency** in the component.
- All styles must live **inline** inside `tv()` slots.
- The implementation must exist in: src/components/$ARGUMENTS/$ARGUMENTS.tsx
- The original shadcn file **must be deleted** at the end of the migration.

## Component Creation Rule

If the component does **not** yet exist, it must be created following:

- The project's architectural conventions
- Slot-based structure using `tailwind-variants`
- No shadcn or CVA dependency

## Types Rule

- The `types` file will **always exist**.
- It must **not be removed**.
- It should only be adjusted if strictly necessary to maintain compatibility with the new implementation.

---

## Step 0 — Read everything before writing anything

Read ALL of the following before making a single change:

1. `src/shadcn/$ARGUMENTS.tsx` — the source of truth for existing styles/variants
2. `src/components/$ARGUMENTS/$ARGUMENTS.tsx` — current wrapper (may be thin or nonexistent)
3. `src/components/$ARGUMENTS/$ARGUMENTS.types.ts` — current types
4. `src/components/$ARGUMENTS/index.ts` — current exports
5. `src/components/provider/provider.types.ts` — to understand where to add the config key
6. `src/components/alert/alert.tsx` — reference for a simple component with context (variant propagation)
7. `src/components/accordion/accordion.tsx` — reference for a complex compound component with Radix primitives

Do not skip this step. You will make mistakes if you write before reading.

---

## Step 1 — Extract ALL styles from shadcn into `tv()` slots

**This is mandatory**: every CSS class that exists in `src/shadcn/$ARGUMENTS.tsx`
must be moved into the `slots` of the `tv()` call in
`src/components/$ARGUMENTS/$ARGUMENTS.tsx`. Do not leave any CSS in the shadcn
file — it will be deleted.

### When the shadcn file wraps Radix primitives

Many shadcn files are thin wrappers around `@radix-ui/*` primitives that add base
CSS classes via `cn('base-classes', className)`. In this case you must:

1. Import the Radix primitive **directly** in `components/$ARGUMENTS/$ARGUMENTS.tsx`
2. Copy the base CSS classes from each shadcn wrapper into the matching `tv()` slot
3. Remove the shadcn wrapper import entirely — **never import from `@/shadcn/*`**

Example — shadcn wraps `AvatarPrimitive.Root` with base classes:
```tsx
// src/shadcn/avatar.tsx  ← DELETE THIS FILE
const Avatar = forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    className={cn('t:relative t:flex t:h-10 t:w-10 t:shrink-0 t:overflow-hidden t:rounded-full', className)}
    {...props}
  />
))
```

Becomes — base classes inline in `tv()`, Radix used directly:
```tsx
// src/components/avatar/avatar.tsx
const styles = tv({
  slots: {
    root: 't:relative t:flex t:shrink-0 t:overflow-hidden', // base classes from shadcn
  },
  variants: {
    size: { md: { root: 't:h-10 t:w-10' } }, // size was a custom variant
    variant: { circle: { root: 't:rounded-full' } },
  },
})

// Use Radix directly — no shadcn wrapper:
<AvatarPrimitive.Root className={cn(root(), config?.classNames?.root)}>
```

### Mapping rules

| shadcn pattern | tv() equivalent |
|---|---|
| `cva('base-classes', { variants })` | `tv({ slots: { root: 'base-classes' }, variants })` |
| `cva` with multiple sub-elements | `tv({ slots: { root, title, icon, ... } })` |
| Radix wrapper base classes | move to the matching `tv()` slot |
| `className` prop spread | `cn(slotFn(), config?.classNames?.root)` |
| `VariantProps<typeof cvaFn>` | explicit typed union in `.types.ts` |
| `cn(cvaFn({ variant }), className)` | `cn(slotFn({ variant }), config?.classNames?.root)` |

### CSS class prefix

All classes in this project use the `t:` prefix. Classes in the shadcn file
already have it. Preserve them exactly — do NOT strip or change the prefix.

Example:

```ts
// shadcn (CVA):
const badgeVariants = cva('t:inline-flex t:rounded-full', {
  variants: { variant: { default: 't:bg-primary' } }
})

// target (tv):
const styles = tv({
  slots: { root: 't:inline-flex t:rounded-full' },
  variants: { variant: { default: { root: 't:bg-primary' } } },
  defaultVariants: { variant: 'default' },
})
```

### Multi-slot components

If the shadcn file has multiple sub-components (Title, Description, Content,
Item, Trigger, etc.), each gets its own slot in `tv()`. Infer the slot name from
the sub-component name.

```ts
const styles = tv({
  slots: {
    root: '...',
    title: '...',
    description: '...',
    action: '...',
  },
  variants: {
    variant: {
      default: { root: '...', title: '...' },
      destructive: { root: '...', title: '...' },
    }
  }
})
```

---

## Step 2 — Update `$ARGUMENTS.types.ts`

Each sub-component needs its own Slots and Props types:

```ts
export type FooSlots = 'root'
export type FooProps = { variant?: FooVariant }

export type FooTitleSlots = 'root'
export type FooTitleProps = {}

// If a slot has more than 'root', list them all:
export type FooTriggerSlots = 'root' | 'icon' | 'header'
```

Rules:
- `Slots` type lists the keys that appear in `tv()` slots for that sub-component
- `Props` type lists the public API (no `className`, no `children` — those come from `PropsWithChildren`)
- Variant unions go in a separate `export type FooVariant = 'a' | 'b'`

---

## Step 3 — Rewrite `$ARGUMENTS.tsx`

Template:

```tsx
import type { PropsWithChildren } from 'react'
import * as FooPrimitive from '@radix-ui/react-foo' // import Radix directly, never shadcn
import { tv } from 'tailwind-variants'

import type { FooProps, FooTitleProps } from './foo.types'

import { useInternalState } from '@/components/provider/provider.context'
import { cn } from '@/support/utils'

// Only add createContext/useContext when variant must flow from Root to a
// child sub-component (e.g. Root → Icon). See alert.tsx for reference.

const styles = tv({
  defaultVariants: { variant: 'default' },
  slots: {
    root: '...', // ALL base classes from the shadcn wrapper go here
    title: '...',
  },
  variants: {
    variant: {
      default: { root: '...' },
    },
  },
})

function Root({ variant, children }: PropsWithChildren<FooProps>) {
  const state = useInternalState()
  const config = state?.components?.foo?.default
  const resolvedVariant = variant ?? config?.defaultProps?.variant ?? 'default'
  const { root } = styles({ variant: resolvedVariant })

  return (
    <FooPrimitive.Root className={cn(root(), config?.classNames?.root)}>
      {children}
    </FooPrimitive.Root>
  )
}

function Title({ children }: PropsWithChildren<FooTitleProps>) {
  const state = useInternalState()
  const config = state?.components?.foo?.title
  const { title } = styles()

  return <h5 className={cn(title(), config?.classNames?.root)}>{children}</h5>
}

export const Foo = Object.assign(Root, { Title })
```

Rules:
- **Never import from `@/shadcn/*`** — use Radix primitives directly
- All base CSS from each shadcn wrapper must be in the matching `tv()` slot
- Always wrap className with `cn(slotFn(), config?.classNames?.root)`
- Sub-components without variants call `styles()` with no arguments
- Only pass `variant` to `styles()` when that slot actually has variant styles

---

## Step 4 — Update `provider.types.ts`

Add to the import block (keep alphabetical order within the group):

```ts
import type {
  FooProps,
  FooSlots,
  FooTitleProps,
  FooTitleSlots,
} from '@/components/foo'
```

Add a new key inside `components?:`:

```ts
foo?: {
  default?: ComponentConfig<FooProps, FooSlots>
  title?: ComponentConfig<FooTitleProps, FooTitleSlots>
}
```

---

## Step 5 — Delete the shadcn file

Confirm nothing else imports it:

```bash
grep -r "shadcn/$ARGUMENTS" src/
```

If zero results → delete `src/shadcn/$ARGUMENTS.tsx`.
If results exist → fix those imports first, then delete.

---

## Step 6 — Verify

```bash
npx tsc --noEmit
```

Zero errors = done. If errors exist, fix them before stopping.

---

## Quick reference

| Need | File to read |
|---|---|
| Simple component with variant context | `src/components/alert/alert.tsx` |
| Complex compound with Radix primitives | `src/components/accordion/accordion.tsx` |
| Types shape | `src/components/alert/alert.types.ts` |
| Provider config shape | `src/components/provider/provider.types.ts` |
