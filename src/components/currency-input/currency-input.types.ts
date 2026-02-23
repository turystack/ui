import type { InputProps } from '@/components/input/input.types'

export type CurrencyInputSlots = 'root' | 'input' | 'leftSection' | 'rightSection' | 'loader'

export type Currency = 'brl' | 'usd' | 'eur'

export type CurrencyInputProps = Omit<InputProps, 'value' | 'defaultValue' | 'onChange'> & {
	currency?: Currency
	value?: number | null
	defaultValue?: number | null
	onChange?: (value: number | null) => void
}
