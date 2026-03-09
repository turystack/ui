import type { WithLabelProps } from '@/components/label'

export type ProgressSlots = 'root' | 'label'

export type ProgressSize = 'sm' | 'md' | 'lg'

export type ProgressProps = WithLabelProps<{
	value?: number
	defaultValue?: number
	size?: ProgressSize
}>
