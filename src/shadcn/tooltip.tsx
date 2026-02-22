import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import * as React from 'react'

import { cn } from '@/support/utils'

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
	React.ElementRef<typeof TooltipPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
	<TooltipPrimitive.Content
		className={cn(
			't:fade-in-0 t:zoom-in-95 t:data-[state=closed]:fade-out-0 t:data-[state=closed]:zoom-out-95 t:data-[side=bottom]:slide-in-from-top-2 t:data-[side=left]:slide-in-from-right-2 t:data-[side=right]:slide-in-from-left-2 t:data-[side=top]:slide-in-from-bottom-2 t:z-50 t:origin-[--radix-tooltip-content-transform-origin] t:animate-in t:overflow-hidden t:rounded-md t:border t:bg-popover t:px-3 t:py-1.5 t:text-popover-foreground t:text-sm t:shadow-md t:data-[state=closed]:animate-out',
			className,
		)}
		ref={ref}
		sideOffset={sideOffset}
		{...props}
	/>
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
