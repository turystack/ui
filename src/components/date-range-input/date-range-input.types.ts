import type { InputProps } from '@/components/input/input.types'

export type DateRangeInputSlots = 'root' | 'content' | 'calendar'

export type DateRange = {
	from?: Date
	to?: Date
}

export type DateRangeInputProps = Omit<InputProps, 'value' | 'defaultValue' | 'onChange'> & {
	value?: DateRange | null
	defaultValue?: DateRange | null
	onChange?: (range: DateRange | null) => void
}
