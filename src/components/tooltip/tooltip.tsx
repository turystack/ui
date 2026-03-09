import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import type { PropsWithChildren } from 'react'
import { tv } from 'tailwind-variants'

import type { TooltipProps } from './tooltip.types'

const styles = tv({
	slots: {
		content:
			't:z-50 t:overflow-hidden t:rounded-md t:border t:bg-popover t:px-3 t:py-1.5 t:text-popover-foreground t:text-sm t:shadow-md t:animate-in t:fade-in-0 t:zoom-in-95 data-[state=closed]:t:animate-out data-[state=closed]:t:fade-out-0 data-[state=closed]:t:zoom-out-95 data-[side=bottom]:t:slide-in-from-top-2 data-[side=left]:t:slide-in-from-right-2 data-[side=right]:t:slide-in-from-left-2 data-[side=top]:t:slide-in-from-bottom-2',
		root: '',
	},
})

export function Tooltip({
	content,
	side = 'top',
	sideOffset = 4,
	delayDuration = 0,
	children,
}: PropsWithChildren<TooltipProps>) {
	const { content: contentClass } = styles()

	return (
		<TooltipPrimitive.Provider delayDuration={delayDuration}>
			<TooltipPrimitive.Root>
				<TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
				<TooltipPrimitive.Portal>
					<TooltipPrimitive.Content
						className={contentClass()}
						side={side}
						sideOffset={sideOffset}
					>
						{content}
					</TooltipPrimitive.Content>
				</TooltipPrimitive.Portal>
			</TooltipPrimitive.Root>
		</TooltipPrimitive.Provider>
	)
}
