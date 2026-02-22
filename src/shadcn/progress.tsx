'use client'

import * as ProgressPrimitive from '@radix-ui/react-progress'
import * as React from 'react'

import { cn } from '@/support/utils'

const Progress = React.forwardRef<
	React.ElementRef<typeof ProgressPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
	<ProgressPrimitive.Root
		className={cn(
			't:relative t:h-4 t:w-full t:overflow-hidden t:rounded-full t:bg-secondary',
			className,
		)}
		ref={ref}
		{...props}
	>
		<ProgressPrimitive.Indicator
			className="t:h-full t:w-full t:flex-1 t:bg-primary t:transition-all"
			style={{
				transform: `translateX(-${100 - (value || 0)}%)`,
			}}
		/>
	</ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
