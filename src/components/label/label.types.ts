export type LabelSlots = 'root' | 'required' | 'optional'

export type LabelProps = {
	htmlFor?: string
	required?: boolean
	optional?: boolean
	disabled?: boolean
}

export type WithLabelProps<T> = T & {
	label?: string | (LabelProps & {
		content?: string
	})
}