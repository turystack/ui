import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/support/utils'

const Checkbox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
	<CheckboxPrimitive.Root
		className={cn(
			't:peer t:grid t:h-4 t:w-4 t:shrink-0 t:place-content-center t:rounded-sm t:border t:border-primary t:ring-offset-background t:focus-visible:outline-none t:focus-visible:ring-2 t:focus-visible:ring-ring t:focus-visible:ring-offset-2 t:disabled:cursor-not-allowed t:disabled:opacity-50 t:data-[state=checked]:bg-primary t:data-[state=checked]:text-primary-foreground',
			className,
		)}
		ref={ref}
		{...props}
	>
		<CheckboxPrimitive.Indicator
			className={cn('t:grid t:place-content-center t:text-current')}
		>
			<Check className="t:h-4 t:w-4" />
		</CheckboxPrimitive.Indicator>
	</CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
