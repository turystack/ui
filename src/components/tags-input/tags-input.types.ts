import type { InputProps } from '@/components/input/input.types'
import type { ComponentConfig } from '@/support/types'

export type TagsInputSlots = 'root' | 'input' | 'tag' | 'tagRemove'

export type TagsInputProps = Omit<
	InputProps,
	'value' | 'defaultValue' | 'onChange'
> & {
	value?: string[]
	defaultValue?: string[]
	maxTags?: number
	allowDuplicates?: boolean
	onChange?: (value: string[]) => void
}

export type TagsInputConfig = ComponentConfig<TagsInputProps, TagsInputSlots>
