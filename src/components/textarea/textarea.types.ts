import type { InputProps } from '@/components/input/input.types'

export type TextareaSlots = 'root' | 'counter'

export type TextareaProps = InputProps & {
	maxLength?: number
	rows?: number
}
