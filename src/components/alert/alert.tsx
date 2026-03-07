import type { PropsWithChildren } from 'react'
import { createContext, useContext, useState } from 'react'
import { tv } from 'tailwind-variants'
import { X } from 'lucide-react'

import type {
  AlertActionProps,
  AlertDescriptionProps,
  AlertIconProps,
  AlertProps,
  AlertTitleProps,
} from './alert.types'

import { useInternalState } from '@/components/provider/provider.context'
import { cn } from '@/support/utils'

type AlertContextValue = {
  variant: 'default' | 'destructive'
}

const AlertContext = createContext<AlertContextValue>({
  variant: 'default',
})

const styles = tv({
  defaultVariants: {
    variant: 'default',
  },
  slots: {
    root: `
      t:relative
      t:w-full
      t:rounded-lg
      t:border
      t:p-4
      t:transition-all
      t:duration-200
      t:ease-in-out
      t:flex
      t:gap-3
      t:items-stretch
    `,
    icon: `
      t:flex
      t:items-start
      t:justify-center
      t:h-full
      t:pt-0.5
    `,
    content: `
      t:flex
      t:flex-col
      t:gap-1
      t:flex-1
    `,
    title: `
      t:font-medium
      t:leading-none
      t:tracking-tight
    `,
    description: `
      t:text-sm
      t:leading-relaxed
    `,
    action: `
      t:mt-2
    `,
    close: `
      t:absolute
      t:top-3
      t:right-3
      t:inline-flex
      t:h-6
      t:w-6
      t:cursor-pointer
      t:items-center
      t:justify-center
      t:rounded-md
      t:border-none
      t:bg-transparent
      t:opacity-70
      t:transition-all
      t:duration-200
      hover:t:opacity-100
      hover:t:bg-muted/50
    `,
  },
  variants: {
    variant: {
      default: {
        root: 't:bg-background t:text-foreground',
        icon: 't:text-foreground',
        close: 't:text-foreground',
      },
      destructive: {
        root:
          't:border-destructive/50 t:text-destructive dark:t:border-destructive',
        icon: 't:text-destructive',
        close: 't:text-destructive',
      },
    },
  },
})

function Root({
  variant,
  closable,
  onClose,
  children,
}: PropsWithChildren<AlertProps>) {
  const state = useInternalState()
  const config = state?.components?.alert?.default

  const resolvedVariant =
    variant ?? config?.defaultProps?.variant ?? 'default'

  const [visible, setVisible] = useState(true)
  const [hiding, setHiding] = useState(false)

  const { root, close } = styles({
    variant: resolvedVariant,
  })

  function handleClose() {
    setHiding(true)

    setTimeout(() => {
      setVisible(false)
      onClose?.()
    }, 200)
  }

  if (!visible) return null

  return (
    <AlertContext.Provider value={{ variant: resolvedVariant }}>
      <div
        role="alert"
        className={cn(root(), config?.classNames?.root)}
        style={{
          opacity: hiding ? 0 : 1,
          transform: hiding ? 'translateY(-4px)' : 'translateY(0)',
        }}
      >
        {children}

        {closable && (
          <button
            type="button"
            aria-label="Close"
            onClick={handleClose}
            className={cn(close(), config?.classNames?.close)}
          >
            <X className="t:h-4 t:w-4" />
          </button>
        )}
      </div>
    </AlertContext.Provider>
  )
}

function Icon({ children }: PropsWithChildren<AlertIconProps>) {
  const { variant } = useContext(AlertContext)
  const state = useInternalState()
  const config = state?.components?.alert?.icon

  const { icon } = styles({ variant })

  return (
    <span className={cn(icon(), config?.classNames?.root)}>
      {children}
    </span>
  )
}

function Content({ children }: PropsWithChildren) {
  const { content } = styles()
  const state = useInternalState()
  const config = state?.components?.alert?.default

  return (
    <div className={cn(content(), config?.classNames?.root)}>
      {children}
    </div>
  )
}

function Title({ children }: PropsWithChildren<AlertTitleProps>) {
  const { title } = styles()
  const state = useInternalState()
  const config = state?.components?.alert?.title

  return (
    <h5 className={cn(title(), config?.classNames?.root)}>
      {children}
    </h5>
  )
}

function Description({ children }: PropsWithChildren<AlertDescriptionProps>) {
  const { description } = styles()
  const state = useInternalState()
  const config = state?.components?.alert?.description

  return (
    <div className={cn(description(), config?.classNames?.root)}>
      {children}
    </div>
  )
}

function Action({ children }: PropsWithChildren<AlertActionProps>) {
  const { action } = styles()
  const state = useInternalState()
  const config = state?.components?.alert?.action

  return (
    <div className={cn(action(), config?.classNames?.root)}>
      {children}
    </div>
  )
}

export const Alert = Object.assign(Root, {
  Icon,
  Content,
  Title,
  Description,
  Action,
})