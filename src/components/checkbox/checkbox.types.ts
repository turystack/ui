export type CheckboxSlots = 'wrapper' | 'root' | 'indicator' | 'icon' | 'label'

export type CheckboxSize = 'sm' | 'md' | 'lg'

export type CheckboxItem = {
	label: string
	value: string
	disabled?: boolean
}

export type CheckboxProps = {
	label?: string
	value?: string
	size?: CheckboxSize
	disabled?: boolean
	checked?: boolean
	defaultChecked?: boolean
	onChange?: (checked: boolean) => void
}

export type CheckboxGroupSlots = 'root' | 'item'

export type CheckboxGroupVariant = 'vertical' | 'horizontal'

export type CheckboxGroupProps = {
	items: CheckboxItem[]
	value?: string[]
	defaultValue?: string[]
	disabled?: boolean
	variant?: CheckboxGroupVariant
	onChange?: (value: string[]) => void
}
