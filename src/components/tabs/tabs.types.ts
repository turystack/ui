export type TabsSlots = 'root'

export type TabsOrientation = 'horizontal' | 'vertical'

export type TabsProps = {
	orientation?: TabsOrientation
	value?: string
	defaultValue?: string
	onChange?: (value: string) => void
}

export type TabsListSlots = 'root'

export type TabsListProps = {
	justified?: boolean
}

export type TabsTriggerSlots = 'root'

export type TabsTriggerProps = {
	value: string
	icon?: React.ReactNode
}

export type TabsContentSlots = 'root'

export type TabsContentProps = {
	value: string
}

import type { ComponentConfig } from '@/support/types'

export type TabsConfig = {
	default?: ComponentConfig<TabsProps, TabsSlots>
	list?: ComponentConfig<TabsListProps, TabsListSlots>
	trigger?: ComponentConfig<TabsTriggerProps, TabsTriggerSlots>
	content?: ComponentConfig<TabsContentProps, TabsContentSlots>
}
