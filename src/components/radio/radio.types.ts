export type RadioSlots = 'root' | 'indicator' | 'label'

export type RadioItem = {
	label: string
	value: string
	disabled?: boolean
}

export type RadioProps = {
	label?: string
	value?: string
	disabled?: boolean
	checked?: boolean
	defaultChecked?: boolean
	onCheckedChange?: (checked: boolean) => void
}

export type RadioGroupSlots = 'root' | 'item'

export type RadioGroupVariant = 'vertical' | 'horizontal'

export type RadioGroupProps = {
	items: RadioItem[]
	variant?: RadioGroupVariant
	value?: string
	defaultValue?: string
	disabled?: boolean
	onChange?: (value: string) => void
}
