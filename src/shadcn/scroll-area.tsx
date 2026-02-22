import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import * as React from 'react'

import { cn } from '@/support/utils'

const ScrollArea = React.forwardRef<
	React.ElementRef<typeof ScrollAreaPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
	<ScrollAreaPrimitive.Root
		className={cn('t:relative t:overflow-hidden', className)}
		ref={ref}
		{...props}
	>
		<ScrollAreaPrimitive.Viewport className="t:h-full t:w-full t:rounded-[inherit]">
			{children}
		</ScrollAreaPrimitive.Viewport>
		<ScrollBar />
		<ScrollAreaPrimitive.Corner />
	</ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
	React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
	React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = 'vertical', ...props }, ref) => (
	<ScrollAreaPrimitive.ScrollAreaScrollbar
		className={cn(
			't:flex t:touch-none t:select-none t:transition-colors',
			orientation === 'vertical' &&
				't:h-full t:w-2.5 t:border-l t:border-l-transparent t:p-[1px]',
			orientation === 'horizontal' &&
				't:h-2.5 t:flex-col t:border-t t:border-t-transparent t:p-[1px]',
			className,
		)}
		orientation={orientation}
		ref={ref}
		{...props}
	>
		<ScrollAreaPrimitive.ScrollAreaThumb className="t:relative t:flex-1 t:rounded-full t:bg-border" />
	</ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
