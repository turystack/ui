import type { PropsWithChildren, ReactNode } from 'react'
import React from 'react'
import { tv } from 'tailwind-variants'

import { useInternalState } from '@/components/provider/provider.context'
import { cn } from '@/support/utils'

import type { LayoutHeaderProps } from './header.types'

function flattenChildren(children: ReactNode): ReactNode[] {
	const result: ReactNode[] = []
	React.Children.forEach(children, (child) => {
		if (React.isValidElement(child) && child.type === React.Fragment) {
			result.push(...flattenChildren((child.props as { children?: ReactNode }).children))
		} else {
			result.push(child)
		}
	})
	return result
}

const headerStyles = tv({
	slots: {
		root: 't:flex t:shrink-0 t:items-center t:px-4',
		left: 't:min-w-0 t:flex-1 t:flex t:justify-start',
		center: 't:shrink-0 t:flex t:justify-center t:px-4',
		right: 't:min-w-0 t:flex-1 t:flex t:justify-end',
	},
	variants: {
		bordered: { true: { root: 't:border-b t:border-border' } },
		sticky: { true: { root: 't:sticky t:top-0 t:z-10 t:bg-background' } },
		size: {
			sm: { root: 't:h-10' },
			md: { root: 't:h-14' },
			lg: { root: 't:h-16' },
		},
	},
	defaultVariants: { size: 'md' },
})

export function HeaderLeft({ children }: PropsWithChildren) {
	return <>{children}</>
}
HeaderLeft.displayName = 'Header.Left'

export function HeaderCenter({ children }: PropsWithChildren) {
	return <>{children}</>
}
HeaderCenter.displayName = 'Header.Center'

export function HeaderRight({ children }: PropsWithChildren) {
	return <>{children}</>
}
HeaderRight.displayName = 'Header.Right'

function HeaderRoot({
	children,
	bordered,
	sticky,
	size,
}: PropsWithChildren<LayoutHeaderProps>) {
	const state = useInternalState()
	const config = state?.components?.layout?.header
	const { root, left, center, right } = headerStyles({ bordered, sticky, size })

	let leftSlot: React.ReactNode = null
	let centerSlot: React.ReactNode = null
	let rightSlot: React.ReactNode = null
	const rest: React.ReactNode[] = []

	flattenChildren(children).forEach((child) => {
		if (!React.isValidElement(child)) {
			rest.push(child)
			return
		}
		const displayName = (child.type as { displayName?: string }).displayName
		const props = child.props as { children?: React.ReactNode }
		if (displayName === 'Header.Left') leftSlot = props.children
		else if (displayName === 'Header.Center') centerSlot = props.children
		else if (displayName === 'Header.Right') rightSlot = props.children
		else rest.push(child)
	})

	const hasSlots = leftSlot !== null || centerSlot !== null || rightSlot !== null

	return (
		<header className={cn(root(), config?.classNames?.root)}>
			{hasSlots ? (
				<>
					<div className={cn(left(), config?.classNames?.left)}>{leftSlot}</div>
					<div className={cn(center(), config?.classNames?.center)}>{centerSlot}</div>
					<div className={cn(right(), config?.classNames?.right)}>{rightSlot}</div>
				</>
			) : (
				rest
			)}
		</header>
	)
}

export const LayoutHeader = Object.assign(HeaderRoot, {
	Left: HeaderLeft,
	Center: HeaderCenter,
	Right: HeaderRight,
})
