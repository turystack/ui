import type { ComponentConfig } from '@/support/types'

// Slots
export type LayoutSlots = 'root'
export type LayoutMainSlots = 'root'
export type LayoutContentSlots = 'root' | 'inner'
export type LayoutFooterSlots = 'root'

// Props
export type LayoutProps = {}
export type LayoutMainProps = {}
export type LayoutContentProps = {
	padding?: 'sm' | 'md' | 'lg'
	paddingHorizontal?: 'sm' | 'md' | 'lg'
	paddingVertical?: 'sm' | 'md' | 'lg'
	maxWidth?: 'sm' | 'md' | 'lg'
}
export type LayoutFooterProps = {
	bordered?: boolean
	sticky?: boolean
	size?: 'sm' | 'md' | 'lg'
}

// Config
export type LayoutConfig = {
	default?: ComponentConfig<LayoutProps, LayoutSlots>
	main?: ComponentConfig<LayoutMainProps, LayoutMainSlots>
	content?: ComponentConfig<LayoutContentProps, LayoutContentSlots>
	footer?: ComponentConfig<LayoutFooterProps, LayoutFooterSlots>
}
