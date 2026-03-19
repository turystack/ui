import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import type { PropsWithChildren } from 'react'
import { tv } from 'tailwind-variants'

import type { TooltipProps } from './tooltip.types'

import { useInternalState } from '@/components/provider/provider.context'
import { cn } from '@/support/utils'

const styles = tv({
	slots: {
		content:
			't:fade-in-0 t:zoom-in-95 data-[state=closed]:t:fade-out-0 data-[state=closed]:t:zoom-out-95 data-[side=bottom]:t:slide-in-from-top-2 data-[side=left]:t:slide-in-from-right-2 data-[side=right]:t:slide-in-from-left-2 data-[side=top]:t:slide-in-from-bottom-2 t:z-50 t:animate-in t:overflow-hidden t:rounded-md t:border t:bg-popover t:px-3 t:py-1.5 t:text-popover-foreground t:text-sm t:shadow-md data-[state=closed]:t:animate-out',
		root: '',
	},
})

export function Tooltip({
	content,
	side = 'top',
	sideOffset = 4,
	delayDuration,
	children,
}: PropsWithChildren<TooltipProps>) {
	const state = useInternalState()
	const config = state?.components?.tooltip
	const { content: contentClass } = styles()

	return (
		<TooltipPrimitive.Root delayDuration={delayDuration}>
			<TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
			<TooltipPrimitive.Portal>
				<TooltipPrimitive.Content
					className={cn(contentClass(), config?.classNames?.content)}
					side={side}
					sideOffset={sideOffset}
				>
					{content}
				</TooltipPrimitive.Content>
			</TooltipPrimitive.Portal>
		</TooltipPrimitive.Root>
	)
}
