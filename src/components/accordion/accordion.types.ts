export type AccordionSlots = 'root'

export type AccordionType = 'single' | 'multiple'

type BaseAccordionProps = {
	type: AccordionType
	bordered?: boolean
}

type SingleAccordionProps = {
	type: 'single'
	value?: string
	defaultValue?: string
	collapsible?: boolean
	onChange?: (value: string) => void
}

type MultipleAccordionProps = {
	type: 'multiple'
	value?: string[]
	defaultValue?: string[]
	onChange?: (value: string[]) => void
}

export type AccordionProps =
	| (BaseAccordionProps & SingleAccordionProps)
	| (BaseAccordionProps & MultipleAccordionProps)

export type AccordionItemSlots = 'root'

export type AccordionItem = {
	value: string
	disabled?: boolean
}

export type AccordionTriggerSlots = 'header' | 'root' | 'icon'

export type AccordionTrigger = {}

export type AccordionContentSlots = 'root' | 'inner'

export type AccordionContent = {}
