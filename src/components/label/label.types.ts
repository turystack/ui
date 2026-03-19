export type LabelSlots = 'root' | 'required' | 'optional'

export type LabelProps = {
	htmlFor?: string
	required?: boolean
	optional?: boolean
	disabled?: boolean
	tooltip?: React.ReactNode
}

export type WithLabelProps<T> = T & {
	label?:
		| string
		| (LabelProps & {
				content?: string
		  })
}
