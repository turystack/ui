import type { ComponentConfig } from '@/support/types'

export type CardSlots = 'root'

export type CardProps = {
	onClick?: React.MouseEventHandler<HTMLDivElement>
}

export type CardHeaderSlots = 'root'

export type CardHeaderProps = {
	bordered?: boolean
}

export type CardTitleSlots = 'root'

export type CardTitleProps = {}

export type CardDescriptionSlots = 'root'

export type CardDescriptionProps = {}

export type CardContentSlots = 'root'

export type CardContentProps = {}

export type CardFooterSlots = 'root'

export type CardFooterProps = {
	bordered?: boolean
}

export type CardSeparatorSlots = 'root'

export type CardSeparatorProps = {}

export type CardConfig = {
	default?: ComponentConfig<CardProps, CardSlots>
	header?: ComponentConfig<CardHeaderProps, CardHeaderSlots>
	title?: ComponentConfig<CardTitleProps, CardTitleSlots>
	description?: ComponentConfig<CardDescriptionProps, CardDescriptionSlots>
	content?: ComponentConfig<CardContentProps, CardContentSlots>
	footer?: ComponentConfig<CardFooterProps, CardFooterSlots>
	separator?: ComponentConfig<CardSeparatorProps, CardSeparatorSlots>
}
