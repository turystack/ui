import type { InputProps } from "@/components/input/input.types"

export type TagsInputSlots = 'root' | 'input' | 'tag' | 'tagRemove'

export type TagsInputProps = Omit<InputProps, 'value' | 'defaultValue' | 'onChange'> & {
	value?: string[]
	defaultValue?: string[]
	maxTags?: number
	allowDuplicates?: boolean
	onChange?: (value: string[]) => void
}
