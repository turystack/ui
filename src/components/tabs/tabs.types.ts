export type TabsSlots = 'root'

export type TabsOrientation = 'horizontal' | 'vertical'

export type TabsProps = {
	orientation?: TabsOrientation
	value?: string
	defaultValue?: string
	onChange?: (value: string) => void
}

export type TabsListSlots = 'root'

export type TabsListProps = {}

export type TabsTriggerSlots = 'root'

export type TabsTriggerProps = {
	value: string
	icon?: React.ReactNode
}

export type TabsContentSlots = 'root'

export type TabsContentProps = {
	value: string
}
