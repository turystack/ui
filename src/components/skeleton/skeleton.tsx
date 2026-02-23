import type { PropsWithChildren } from 'react'
import { tv } from 'tailwind-variants'

import type { SkeletonProps } from './skeleton.types'

import { useInternalState } from '@/components/provider/provider.context'
import { cn } from '@/support/utils'

const styles = tv({
	slots: {
		root: 't:animate-pulse t:rounded-md t:bg-muted',
	},
})

export function Skeleton({ children }: PropsWithChildren<SkeletonProps>) {
	const state = useInternalState()
	const config = state?.components?.skeleton

	const { root } = styles()

	return <div className={cn(root(), config?.classNames?.root)}>{children}</div>
}
