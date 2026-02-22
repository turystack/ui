import * as SwitchPrimitives from '@radix-ui/react-switch'
import * as React from 'react'

import { cn } from '@/support/utils'

const Switch = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
	<SwitchPrimitives.Root
		className={cn(
			't:peer t:inline-flex t:h-6 t:w-11 t:shrink-0 t:cursor-pointer t:items-center t:rounded-full t:border-2 t:border-transparent t:transition-colors t:focus-visible:outline-none t:focus-visible:ring-2 t:focus-visible:ring-ring t:focus-visible:ring-offset-2 t:focus-visible:ring-offset-background t:disabled:cursor-not-allowed t:disabled:opacity-50 t:data-[state=checked]:bg-primary t:data-[state=unchecked]:bg-input',
			className,
		)}
		{...props}
		ref={ref}
	>
		<SwitchPrimitives.Thumb
			className={cn(
				't:pointer-events-none t:block t:h-5 t:w-5 t:rounded-full t:bg-background t:shadow-lg t:ring-0 t:transition-transform t:data-[state=checked]:translate-x-5 t:data-[state=unchecked]:translate-x-0',
			)}
		/>
	</SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
