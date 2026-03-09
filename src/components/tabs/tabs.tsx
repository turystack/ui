import * as TabsPrimitive from '@radix-ui/react-tabs'
import type { PropsWithChildren } from 'react'
import { tv } from 'tailwind-variants'

import type {
	TabsContentProps,
	TabsListProps,
	TabsProps,
	TabsTriggerProps,
} from './tabs.types'

import { useInternalState } from '@/components/provider/provider.context'
import { cn } from '@/support/utils'

const styles = tv({
	slots: {
		content:
			't:mt-2 t:ring-offset-background t:focus-visible:outline-none t:focus-visible:ring-2 t:focus-visible:ring-ring t:focus-visible:ring-offset-2',
		list: 't:inline-flex t:h-10 t:items-center t:justify-center t:rounded-md t:bg-muted t:p-1 t:text-muted-foreground',
		root: '',
		trigger:
			't:inline-flex t:items-center t:justify-center t:whitespace-nowrap t:rounded-sm t:px-3 t:py-1.5 t:font-medium t:text-sm t:ring-offset-background t:transition-all t:focus-visible:outline-none t:focus-visible:ring-2 t:focus-visible:ring-ring t:focus-visible:ring-offset-2 t:cursor-pointer t:disabled:pointer-events-none t:disabled:opacity-50 t:data-[state=active]:bg-background t:data-[state=active]:text-foreground t:data-[state=active]:shadow-sm',
	},
})

function Root({
	children,
	onChange,
	value,
	defaultValue,
	orientation,
}: PropsWithChildren<TabsProps>) {
	const state = useInternalState()
	const config = state?.components?.tabs?.default

	const { root } = styles()

	return (
		<TabsPrimitive.Root
			className={cn(root(), config?.classNames?.root)}
			defaultValue={defaultValue ?? config?.defaultProps?.defaultValue}
			onValueChange={onChange}
			orientation={orientation ?? config?.defaultProps?.orientation}
			value={value}
		>
			{children}
		</TabsPrimitive.Root>
	)
}

function List({ children, justified }: PropsWithChildren<TabsListProps>) {
	const state = useInternalState()
	const config = state?.components?.tabs?.list

	const { list } = styles()

	return (
		<TabsPrimitive.List
			className={cn(
				list(),
				justified && 't:flex t:w-full t:[&>[role=tab]]:flex-1',
				config?.classNames?.root,
			)}
		>
			{children}
		</TabsPrimitive.List>
	)
}

function Trigger({ value, children }: PropsWithChildren<TabsTriggerProps>) {
	const state = useInternalState()
	const config = state?.components?.tabs?.trigger

	const { trigger } = styles()

	return (
		<TabsPrimitive.Trigger
			className={cn(trigger(), config?.classNames?.root)}
			value={value}
		>
			{children}
		</TabsPrimitive.Trigger>
	)
}

function Content({ value, children }: PropsWithChildren<TabsContentProps>) {
	const state = useInternalState()
	const config = state?.components?.tabs?.content

	const { content } = styles()

	return (
		<TabsPrimitive.Content
			className={cn(content(), config?.classNames?.root)}
			value={value}
		>
			{children}
		</TabsPrimitive.Content>
	)
}

export const Tabs = Object.assign(Root, {
	Content,
	List,
	Trigger,
})
