import * as React from 'react'

import { cn } from '@/support/utils'

const Textarea = React.forwardRef<
	HTMLTextAreaElement,
	React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
	return (
		<textarea
			className={cn(
				't:flex t:min-h-[80px] t:w-full t:rounded-md t:border t:border-input t:bg-background t:px-3 t:py-2 t:text-base t:ring-offset-background t:placeholder:text-muted-foreground t:focus-visible:outline-none t:focus-visible:ring-2 t:focus-visible:ring-ring t:focus-visible:ring-offset-2 t:disabled:cursor-not-allowed t:disabled:opacity-50 t:md:text-sm',
				className,
			)}
			ref={ref}
			{...props}
		/>
	)
})
Textarea.displayName = 'Textarea'

export { Textarea }
