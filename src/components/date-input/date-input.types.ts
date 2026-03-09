import type { ComponentConfig } from '@/support/types'
import type { InputProps } from '@/components/input/input.types'

export type DateInputSlots = 'root' | 'content' | 'calendar'

export type DateInputProps = Omit<InputProps, 'value' | 'defaultValue' | 'onChange'> & {
	value?: Date | null
	defaultValue?: Date | null
	onChange?: (date: Date | null) => void
}

export type DateInputConfig = ComponentConfig<DateInputProps, DateInputSlots>
