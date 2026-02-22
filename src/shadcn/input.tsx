import * as React from 'react'

import { cn } from '@/support/utils'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				className={cn(
					't:flex t:h-10 t:w-full t:rounded-md t:border t:border-input t:bg-background t:px-3 t:py-2 t:text-base t:ring-offset-background t:file:border-0 t:file:bg-transparent t:file:font-medium t:file:text-foreground t:file:text-sm t:placeholder:text-muted-foreground t:focus-visible:outline-none t:focus-visible:ring-2 t:focus-visible:ring-ring t:focus-visible:ring-offset-2 t:disabled:cursor-not-allowed t:disabled:opacity-50 t:md:text-sm',
					className,
				)}
				ref={ref}
				type={type}
				{...props}
			/>
		)
	},
)
Input.displayName = 'Input'

export { Input }
