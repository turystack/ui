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
import type { ColorScheme } from '@/components/color-scheme'
import type { LoaderProps, LoaderSlots } from '@/components/loader'
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
		loader?: ComponentConfig<LoaderProps, LoaderSlots>
	}
}
