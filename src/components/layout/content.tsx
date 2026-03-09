import type { PropsWithChildren } from 'react'
import { tv } from 'tailwind-variants'

import { useInternalState } from '@/components/provider/provider.context'
import { cn } from '@/support/utils'

import type { LayoutContentProps } from './layout.types'

const contentStyles = tv({
	slots: {
		root: 't:flex-1 t:overflow-auto',
		inner: '',
	},
	variants: {
		padding: {
			sm: { inner: 't:p-2' },
			md: { inner: 't:p-4' },
			lg: { inner: 't:p-8' },
		},
		paddingHorizontal: {
			sm: { inner: 't:px-2' },
			md: { inner: 't:px-4' },
			lg: { inner: 't:px-8' },
		},
		paddingVertical: {
			sm: { inner: 't:py-2' },
			md: { inner: 't:py-4' },
			lg: { inner: 't:py-8' },
		},
		maxWidth: {
			sm: { inner: 't:max-w-2xl t:mx-auto t:w-full' },
			md: { inner: 't:max-w-4xl t:mx-auto t:w-full' },
			lg: { inner: 't:max-w-6xl t:mx-auto t:w-full' },
		},
	},
})

export function LayoutContent({
	children,
	padding,
	paddingHorizontal,
	paddingVertical,
	maxWidth,
}: PropsWithChildren<LayoutContentProps>) {
	const state = useInternalState()
	const config = state?.components?.layout?.content
	const { root, inner } = contentStyles({ padding, paddingHorizontal, paddingVertical, maxWidth })
	return (
		<main className={cn(root(), config?.classNames?.root)}>
			<div className={cn(inner(), config?.classNames?.inner)}>{children}</div>
		</main>
	)
}
