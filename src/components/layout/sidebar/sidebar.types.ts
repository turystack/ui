import type { ComponentConfig } from '@/support/types'

export type SidebarSlots = 'root'
export type SidebarHeaderSlots = 'root'
export type SidebarBodySlots = 'root'
export type SidebarFooterSlots = 'root'
export type SidebarTriggerSlots = 'root'

export type SidebarWidth = 'default' | 'wide'
export type SidebarSize = 'sm' | 'md' | 'lg'
export type SidebarPadding = 'sm' | 'md' | 'lg'

export type LayoutSidebarProps = {
	bordered?: boolean
	width?: SidebarWidth
	paddingHorizontal?: SidebarPadding
	paddingVertical?: SidebarPadding
}
export type SidebarHeaderProps = {
	bordered?: boolean
	size?: SidebarSize
}
export type SidebarBodyProps = {}
export type SidebarFooterProps = {
	bordered?: boolean
	size?: SidebarSize
}

export type SidebarConfig = {
	default?: ComponentConfig<LayoutSidebarProps, SidebarSlots>
	header?: ComponentConfig<SidebarHeaderProps, SidebarHeaderSlots>
	body?: ComponentConfig<SidebarBodyProps, SidebarBodySlots>
	footer?: ComponentConfig<SidebarFooterProps, SidebarFooterSlots>
}
