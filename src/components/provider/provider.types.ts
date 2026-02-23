import type {
	AccordionContent,
	AccordionContentSlots,
	AccordionItem,
	AccordionItemSlots,
	AccordionProps,
	AccordionSlots,
	AccordionTrigger,
	AccordionTriggerSlots,
} from '@/components/accordion'
import type {
	AlertActionProps,
	AlertActionSlots,
	AlertDescriptionProps,
	AlertDescriptionSlots,
	AlertIconProps,
	AlertIconSlots,
	AlertProps,
	AlertSlots,
	AlertTitleProps,
	AlertTitleSlots,
} from '@/components/alert'
import type { AvatarProps, AvatarSlots } from '@/components/avatar'
import type { BadgeProps, BadgeSlots } from '@/components/badge'
import type {
	BreadcrumbEllipsisProps,
	BreadcrumbEllipsisSlots,
	BreadcrumbItemProps,
	BreadcrumbItemSlots,
	BreadcrumbLinkProps,
	BreadcrumbLinkSlots,
	BreadcrumbListProps,
	BreadcrumbListSlots,
	BreadcrumbPageProps,
	BreadcrumbPageSlots,
	BreadcrumbProps,
	BreadcrumbSeparatorProps,
	BreadcrumbSeparatorSlots,
	BreadcrumbSlots,
} from '@/components/breadcrumb'
import type { ButtonProps, ButtonSlots } from '@/components/button'
import type {
	CardContentProps,
	CardContentSlots,
	CardDescriptionProps,
	CardDescriptionSlots,
	CardFooterProps,
	CardFooterSlots,
	CardHeaderProps,
	CardHeaderSlots,
	CardProps,
	CardSeparatorProps,
	CardSeparatorSlots,
	CardSlots,
	CardTitleProps,
	CardTitleSlots,
} from '@/components/card'
import type {
	CheckboxGroupProps,
	CheckboxGroupSlots,
	CheckboxProps,
	CheckboxSlots,
} from '@/components/checkbox'
import type { ColorScheme } from '@/components/color-scheme'
import type { LoaderProps, LoaderSlots } from '@/components/loader'
import type {
	ModalBodyProps,
	ModalBodySlots,
	ModalFooterProps,
	ModalFooterSlots,
	ModalHeaderDescriptionProps,
	ModalHeaderDescriptionSlots,
	ModalHeaderProps,
	ModalHeaderSlots,
	ModalHeaderTitleProps,
	ModalHeaderTitleSlots,
	ModalProps,
	ModalSlots,
} from '@/components/modal'
import type { SeparatorProps, SeparatorSlots } from '@/components/separator'
import type {
	SheetBodyProps,
	SheetBodySlots,
	SheetDescriptionProps,
	SheetDescriptionSlots,
	SheetFooterProps,
	SheetFooterSlots,
	SheetHeaderProps,
	SheetHeaderSlots,
	SheetProps,
	SheetSlots,
	SheetTitleProps,
	SheetTitleSlots,
} from '@/components/sheet'
import type { SkeletonProps, SkeletonSlots } from '@/components/skeleton'
import type {
	TabsContentProps,
	TabsContentSlots,
	TabsListProps,
	TabsListSlots,
	TabsProps,
	TabsSlots,
	TabsTriggerProps,
	TabsTriggerSlots,
} from '@/components/tabs'
import type {
	ComponentClassNameSlots,
	ComponentDefaultProps,
} from '@/support/types'

export type ComponentConfig<T extends object, S extends string> = {
	classNames?: ComponentClassNameSlots<S>
	defaultProps?: ComponentDefaultProps<T>
}

export type TuryStackProviderProps = {
	defaultColorScheme?: ColorScheme
	components?: {
		accordion?: {
			default?: ComponentConfig<AccordionProps, AccordionSlots>
			item?: ComponentConfig<AccordionItem, AccordionItemSlots>
			trigger?: ComponentConfig<AccordionTrigger, AccordionTriggerSlots>
			content?: ComponentConfig<AccordionContent, AccordionContentSlots>
		}
		alert?: {
			default?: ComponentConfig<AlertProps, AlertSlots>
			icon?: ComponentConfig<AlertIconProps, AlertIconSlots>
			title?: ComponentConfig<AlertTitleProps, AlertTitleSlots>
			description?: ComponentConfig<
				AlertDescriptionProps,
				AlertDescriptionSlots
			>
			action?: ComponentConfig<AlertActionProps, AlertActionSlots>
		}
		avatar?: ComponentConfig<AvatarProps, AvatarSlots>
		badge?: ComponentConfig<BadgeProps, BadgeSlots>
		breadcrumb?: {
			default?: ComponentConfig<BreadcrumbProps, BreadcrumbSlots>
			list?: ComponentConfig<BreadcrumbListProps, BreadcrumbListSlots>
			item?: ComponentConfig<BreadcrumbItemProps, BreadcrumbItemSlots>
			link?: ComponentConfig<BreadcrumbLinkProps, BreadcrumbLinkSlots>
			page?: ComponentConfig<BreadcrumbPageProps, BreadcrumbPageSlots>
			separator?: ComponentConfig<
				BreadcrumbSeparatorProps,
				BreadcrumbSeparatorSlots
			>
			ellipsis?: ComponentConfig<
				BreadcrumbEllipsisProps,
				BreadcrumbEllipsisSlots
			>
		}
		button?: ComponentConfig<ButtonProps, ButtonSlots>
		checkbox?: {
			default?: ComponentConfig<CheckboxProps, CheckboxSlots>
			group?: ComponentConfig<CheckboxGroupProps, CheckboxGroupSlots>
		}
		card?: {
			default?: ComponentConfig<CardProps, CardSlots>
			header?: ComponentConfig<CardHeaderProps, CardHeaderSlots>
			title?: ComponentConfig<CardTitleProps, CardTitleSlots>
			description?: ComponentConfig<CardDescriptionProps, CardDescriptionSlots>
			content?: ComponentConfig<CardContentProps, CardContentSlots>
			footer?: ComponentConfig<CardFooterProps, CardFooterSlots>
			separator?: ComponentConfig<CardSeparatorProps, CardSeparatorSlots>
		}
		loader?: ComponentConfig<LoaderProps, LoaderSlots>
		modal?: {
			default?: ComponentConfig<ModalProps, ModalSlots>
			header?: ComponentConfig<ModalHeaderProps, ModalHeaderSlots>
			headerTitle?: ComponentConfig<
				ModalHeaderTitleProps,
				ModalHeaderTitleSlots
			>
			headerDescription?: ComponentConfig<
				ModalHeaderDescriptionProps,
				ModalHeaderDescriptionSlots
			>
			body?: ComponentConfig<ModalBodyProps, ModalBodySlots>
			footer?: ComponentConfig<ModalFooterProps, ModalFooterSlots>
		}
		separator?: ComponentConfig<SeparatorProps, SeparatorSlots>
		sheet?: {
			default?: ComponentConfig<SheetProps, SheetSlots>
			header?: ComponentConfig<SheetHeaderProps, SheetHeaderSlots>
			body?: ComponentConfig<SheetBodyProps, SheetBodySlots>
			footer?: ComponentConfig<SheetFooterProps, SheetFooterSlots>
			title?: ComponentConfig<SheetTitleProps, SheetTitleSlots>
			description?: ComponentConfig<SheetDescriptionProps, SheetDescriptionSlots>
		}
		skeleton?: ComponentConfig<SkeletonProps, SkeletonSlots>
		tabs?: {
			default?: ComponentConfig<TabsProps, TabsSlots>
			list?: ComponentConfig<TabsListProps, TabsListSlots>
			trigger?: ComponentConfig<TabsTriggerProps, TabsTriggerSlots>
			content?: ComponentConfig<TabsContentProps, TabsContentSlots>
		}
	}
}
