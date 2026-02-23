import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import type { PropsWithChildren } from 'react'
import { tv } from 'tailwind-variants'

import type {
	AccordionContent,
	AccordionItem,
	AccordionProps,
	AccordionTrigger,
} from './accordion.types'

import { useInternalState } from '@/components/provider/provider.context'
import { cn } from '@/support/utils'

const styles = tv({
	slots: {
		content:
			't:overflow-hidden t:text-sm t:transition-all data-[state=closed]:t:animate-accordion-up data-[state=open]:t:animate-accordion-down',
		contentInner: 't:pt-0 t:pb-4',
		header: 't:flex',
		icon: 't:h-4 t:w-4 t:shrink-0 t:transition-transform t:duration-200',
		item: 't:border-b',
		root: '',
		trigger:
			't:flex t:flex-1 t:items-center t:justify-between t:py-4 t:font-medium t:transition-all hover:t:underline [&[data-state=open]>svg]:t:rotate-180',
	},
})

function Root({
	children,
	onChange,
	...props
}: PropsWithChildren<AccordionProps>) {
	const state = useInternalState()
	const config = state?.components?.accordion?.default

	const resolvedProps = {
		...config?.defaultProps,
		...props,
		onValueChange: onChange,
	} as
		| AccordionPrimitive.AccordionSingleProps
		| AccordionPrimitive.AccordionMultipleProps

	const { root } = styles()

	return (
		<AccordionPrimitive.Root
			{...resolvedProps}
			className={cn(root(), config?.classNames?.root)}
		>
			{children}
		</AccordionPrimitive.Root>
	)
}

function Item({ value, disabled, children }: PropsWithChildren<AccordionItem>) {
	const state = useInternalState()
	const config = state?.components?.accordion?.item

	const resolvedProps = {
		...config?.defaultProps,
		disabled,
		value,
	}

	const { item } = styles()

	return (
		<AccordionPrimitive.Item
			{...resolvedProps}
			className={cn(item(), config?.classNames?.root)}
		>
			{children}
		</AccordionPrimitive.Item>
	)
}

function Trigger({ children }: PropsWithChildren<AccordionTrigger>) {
	const state = useInternalState()
	const config = state?.components?.accordion?.trigger

	const { header, trigger, icon } = styles()

	return (
		<AccordionPrimitive.Header
			className={cn(header(), config?.classNames?.header)}
		>
			<AccordionPrimitive.Trigger
				className={cn(trigger(), config?.classNames?.root)}
			>
				{children}
				<ChevronDown className={cn(icon(), config?.classNames?.icon)} />
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	)
}

function Content({ children }: PropsWithChildren<AccordionContent>) {
	const state = useInternalState()
	const config = state?.components?.accordion?.content

	const { content, contentInner } = styles()

	return (
		<AccordionPrimitive.Content
			className={cn(content(), config?.classNames?.root)}
		>
			<div className={cn(contentInner(), config?.classNames?.inner)}>
				{children}
			</div>
		</AccordionPrimitive.Content>
	)
}

export const Accordion = Object.assign(Root, {
	Content,
	Item,
	Trigger,
})
