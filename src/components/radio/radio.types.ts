export type RadioSlots = 'root' | 'indicator' | 'label' | 'description'

export type RadioItem = {
	label: string
	value: string
	description?: string
	disabled?: boolean
}

export type RadioProps = {
	label?: string
	description?: string
	value?: string
	disabled?: boolean
	bordered?: boolean
	checked?: boolean
	defaultChecked?: boolean
	onChange?: (checked: boolean) => void
}

export type RadioGroupSlots = 'root' | 'item'

export type RadioGroupVariant = 'vertical' | 'horizontal'

export type RadioGroupProps = {
	items: RadioItem[]
	variant?: RadioGroupVariant
	value?: string
	defaultValue?: string
	disabled?: boolean
	bordered?: boolean
	onChange?: (value: string) => void
}
