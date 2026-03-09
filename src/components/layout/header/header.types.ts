import type { ComponentConfig } from '@/support/types'

export type LayoutHeaderSlots = 'root' | 'left' | 'center' | 'right'
export type LayoutHeaderSize = 'sm' | 'md' | 'lg'

export type LayoutHeaderProps = {
	bordered?: boolean
	sticky?: boolean
	size?: LayoutHeaderSize
}

export type HeaderConfig = ComponentConfig<LayoutHeaderProps, LayoutHeaderSlots>
