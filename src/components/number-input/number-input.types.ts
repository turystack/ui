import type { InputProps } from '@/components/input/input.types'
import type { ComponentConfig } from '@/support/types'

export type NumberInputSlots = 'root' | 'input' | 'increment' | 'decrement'

export type NumberInputMode = 'single' | 'range'

export type NumberInputSingleValue = number

export type NumberInputRangeValue = {
	from?: number
	to?: number
}

type BaseNumberInputProps = Omit<
	InputProps,
	'value' | 'defaultValue' | 'onChange'
> & {
	step?: number
}

type SingleNumberInputProps = {
	mode: 'single'
	value?: NumberInputSingleValue
	defaultValue?: NumberInputSingleValue
	onChange?: (value: NumberInputSingleValue) => void
}

type RangeNumberInputProps = {
	mode: 'range'
	value?: NumberInputRangeValue
	defaultValue?: NumberInputRangeValue
	onChange?: (value: NumberInputRangeValue) => void
}

export type NumberInputProps = BaseNumberInputProps &
	(SingleNumberInputProps | RangeNumberInputProps)

export type NumberInputConfig = ComponentConfig<
	BaseNumberInputProps,
	NumberInputSlots
>
