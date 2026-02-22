import { cn } from '@/support/utils'

function Skeleton({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn('t:animate-pulse t:rounded-md t:bg-muted', className)}
			{...props}
		/>
	)
}

export { Skeleton }
