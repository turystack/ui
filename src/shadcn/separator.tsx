import * as SeparatorPrimitive from '@radix-ui/react-separator'
import * as React from 'react'

import { cn } from '@/support/utils'

const Separator = React.forwardRef<
	React.ElementRef<typeof SeparatorPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
	(
		{ className, orientation = 'horizontal', decorative = true, ...props },
		ref,
	) => (
		<SeparatorPrimitive.Root
			className={cn(
				't:shrink-0 t:bg-border',
				orientation === 'horizontal'
					? 't:h-[1px] t:w-full'
					: 't:h-full t:w-[1px]',
				className,
			)}
			decorative={decorative}
			orientation={orientation}
			ref={ref}
			{...props}
		/>
	),
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
