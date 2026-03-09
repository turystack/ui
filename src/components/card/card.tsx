import type { PropsWithChildren } from 'react'
import { tv } from 'tailwind-variants'

import type {
	CardContentProps,
	CardDescriptionProps,
	CardFooterProps,
	CardHeaderProps,
	CardProps,
	CardSeparatorProps,
	CardTitleProps,
} from './card.types'

import { useInternalState } from '@/components/provider/provider.context'
import { cn } from '@/support/utils'

const styles = tv({
	slots: {
		content: 't:p-6',
		description: 't:text-muted-foreground t:text-sm',
		footer: 't:flex t:items-center t:p-6',
		header: 't:flex t:flex-col t:space-y-1.5 t:p-6',
		root: 't:rounded-lg t:border t:bg-card t:text-card-foreground t:shadow-sm',
		separator: 't:border-t',
		title: 't:font-semibold t:text-2xl t:leading-none t:tracking-tight',
	},
	variants: {
		bordered: {
			true: {
				footer: 't:border-t',
				header: 't:border-b',
			},
		},
	},
})

function Root({ onClick, children }: PropsWithChildren<CardProps>) {
	const state = useInternalState()
	const config = state?.components?.card?.default

	const { root } = styles()

	return (
		<div
			className={cn(root(), config?.classNames?.root, onClick && 't:cursor-pointer')}
			onClick={onClick}
		>
			{children}
		</div>
	)
}

function Header({ bordered, children }: PropsWithChildren<CardHeaderProps>) {
	const state = useInternalState()
	const config = state?.components?.card?.header

	const { header } = styles({
		bordered,
	})

	return (
		<div className={cn(header(), config?.classNames?.root)}>{children}</div>
	)
}

function Title({ children }: PropsWithChildren<CardTitleProps>) {
	const state = useInternalState()
	const config = state?.components?.card?.title

	const { title } = styles()

	return <div className={cn(title(), config?.classNames?.root)}>{children}</div>
}

function Description({ children }: PropsWithChildren<CardDescriptionProps>) {
	const state = useInternalState()
	const config = state?.components?.card?.description

	const { description } = styles()

	return (
		<div className={cn(description(), config?.classNames?.root)}>
			{children}
		</div>
	)
}

function Content({ children }: PropsWithChildren<CardContentProps>) {
	const state = useInternalState()
	const config = state?.components?.card?.content

	const { content } = styles()

	return (
		<div className={cn(content(), config?.classNames?.root)}>{children}</div>
	)
}

function Footer({ bordered, children }: PropsWithChildren<CardFooterProps>) {
	const state = useInternalState()
	const config = state?.components?.card?.footer

	const { footer } = styles({
		bordered,
	})

	return (
		<div className={cn(footer(), config?.classNames?.root)}>{children}</div>
	)
}

function Separator({ children }: PropsWithChildren<CardSeparatorProps>) {
	const state = useInternalState()
	const config = state?.components?.card?.separator

	const { separator } = styles()

	return (
		<div className={cn(separator(), config?.classNames?.root)}>{children}</div>
	)
}

export const Card = Object.assign(Root, {
	Content,
	Description,
	Footer,
	Header,
	Separator,
	Title,
})
