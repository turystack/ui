import type { ComponentConfig } from '@/support/types'

export type LoaderSlots = 'root'

export type LoaderSize = 'sm' | 'md' | 'lg'

export type LoaderProps = {
	size?: LoaderSize
}

export type LoaderConfig = ComponentConfig<LoaderProps, LoaderSlots>
