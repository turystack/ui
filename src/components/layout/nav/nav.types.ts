import type { LucideIcon } from 'lucide-react'

export interface SidebarNavSubItem {
	label: string
	icon?: LucideIcon
	href?: string
	active?: boolean
}

export interface SidebarNavItem {
	label: string
	icon?: LucideIcon
	href?: string
	active?: boolean
	children?: SidebarNavSubItem[]
}

export type SidebarNavEntry =
	| {
			type: 'item'
			item: SidebarNavItem
	  }
	| {
			type: 'divider'
	  }

export type NavProps = {
	items: SidebarNavEntry[]
}
