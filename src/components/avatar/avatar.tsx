import * as AvatarPrimitive from '@radix-ui/react-avatar'
import type { PropsWithChildren } from 'react'
import { tv } from 'tailwind-variants'

import type { AvatarProps } from './avatar.types'

import { useInternalState } from '@/components/provider/provider.context'
import { cn } from '@/support/utils'

const styles = tv({
	defaultVariants: {
		size: 'md',
		variant: 'circle',
	},
	slots: {
		fallback:
			't:flex t:h-full t:w-full t:items-center t:justify-center t:bg-muted',
		image: 't:aspect-square t:h-full t:w-full',
		root: 't:relative t:flex t:shrink-0 t:overflow-hidden',
	},
	variants: {
		size: {
			lg: {
				fallback: 't:text-lg',
				root: 't:h-12 t:w-12',
			},
			md: {
				fallback: 't:text-sm',
				root: 't:h-9 t:w-9',
			},
			sm: {
				fallback: 't:text-xs',
				root: 't:h-7 t:w-7',
			},
		},
		variant: {
			circle: {
				fallback: 't:rounded-full',
				root: 't:rounded-full',
			},
			square: {
				fallback: 't:rounded-md',
				root: 't:rounded-md',
			},
		},
	},
})

export function Avatar({
	src,
	alt,
	size,
	variant,
	children,
}: PropsWithChildren<AvatarProps>) {
	const state = useInternalState()
	const config = state?.components?.avatar

	const resolvedSize = size ?? config?.defaultProps?.size ?? 'md'
	const resolvedVariant = variant ?? config?.defaultProps?.variant ?? 'circle'

	const { root, image, fallback } = styles({
		size: resolvedSize,
		variant: resolvedVariant,
	})

	return (
		<AvatarPrimitive.Root className={cn(root(), config?.classNames?.root)}>
			{!!src && (
				<AvatarPrimitive.Image
					alt={alt}
					className={cn(image(), config?.classNames?.image)}
					src={src}
				/>
			)}

			<AvatarPrimitive.Fallback
				className={cn(fallback(), config?.classNames?.fallback)}
			>
				{children}
			</AvatarPrimitive.Fallback>
		</AvatarPrimitive.Root>
	)
}
