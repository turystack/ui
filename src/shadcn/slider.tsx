import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'

import { cn } from '@/support/utils'

const Slider = React.forwardRef<
	React.ElementRef<typeof SliderPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
	<SliderPrimitive.Root
		className={cn(
			't:relative t:flex t:w-full t:touch-none t:select-none t:items-center',
			className,
		)}
		ref={ref}
		{...props}
	>
		<SliderPrimitive.Track className="t:relative t:h-2 t:w-full t:grow t:overflow-hidden t:rounded-full t:bg-secondary">
			<SliderPrimitive.Range className="t:absolute t:h-full t:bg-primary" />
		</SliderPrimitive.Track>
		<SliderPrimitive.Thumb className="t:block t:h-5 t:w-5 t:rounded-full t:border-2 t:border-primary t:bg-background t:ring-offset-background t:transition-colors t:focus-visible:outline-none t:focus-visible:ring-2 t:focus-visible:ring-ring t:focus-visible:ring-offset-2 t:disabled:pointer-events-none t:disabled:opacity-50" />
	</SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
