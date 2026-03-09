import type { PropsWithChildren } from 'react'
import { tv } from 'tailwind-variants'

import { useInternalState } from '@/components/provider/provider.context'
import { cn } from '@/support/utils'

import type { LayoutFooterProps } from './layout.types'

const footerStyles = tv({
	slots: { root: 't:flex t:shrink-0 t:items-center t:px-4' },
	variants: {
		bordered: { true: { root: 't:border-t t:border-border' } },
		sticky: { true: { root: 't:sticky t:bottom-0 t:z-10 t:bg-background' } },
		size: {
			sm: { root: 't:h-10' },
			md: { root: 't:h-14' },
			lg: { root: 't:h-16' },
		},
	},
	defaultVariants: { size: 'md' },
})

export function LayoutFooter({
	children,
	bordered,
	sticky,
	size,
}: PropsWithChildren<LayoutFooterProps>) {
	const state = useInternalState()
	const config = state?.components?.layout?.footer
	const { root } = footerStyles({ bordered, sticky, size })
	return <footer className={cn(root(), config?.classNames?.root)}>{children}</footer>
}
