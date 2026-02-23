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
				root: 't:h-16 t:w-16',
			},
			md: {
				root: 't:h-10 t:w-10',
			},
			sm: {
				root: 't:h-8 t:w-8',
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
