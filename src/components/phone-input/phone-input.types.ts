import type { MaskInputProps } from '@/components/mask-input/mask-input.types'

export type PhoneInputSlots =
	| 'root'
	| 'input'
	| 'countrySelector'
	| 'rightSection'
	| 'loader'

export type Country = {
	code: string
	ddi: string
	flag: string
	mask: string
}

export type PhoneValue = {
	iso: string
	number: string
	ddi?: string
}

export type PhoneInputProps = Omit<
	MaskInputProps,
	'value' | 'defaultValue' | 'mask' | 'onChange' | 'leftSection'
> & {
	value?: PhoneValue | null
	defaultValue?: PhoneValue | null
	onChange?: (value: PhoneValue | null) => void
}
