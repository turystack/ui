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
import type { InputProps, InputSlots } from '@/components/input'
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
import type { CurrencyInputProps, CurrencyInputSlots } from '@/components/currency-input/currency-input.types'
import type { DateInputProps, DateInputSlots } from '@/components/date-input/date-input.types'
import type { DateRangeInputProps, DateRangeInputSlots } from '@/components/date-range-input/date-range-input.types'
import type { I18nTranslations } from '@/components/i18n/i18n.types'
import type { MaskInputProps, MaskInputSlots } from '@/components/mask-input/mask-input.types'
import type { OTPInputProps, OTPInputSlots } from '@/components/otp-input/otp-input.types'
import type { PhoneInputProps, PhoneInputSlots } from '@/components/phone-input/phone-input.types'
import type { SelectSlots } from '@/components/select/select.types'
import type { TagsInputProps, TagsInputSlots } from '@/components/tags-input/tags-input.types'
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
	translations?: I18nTranslations
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
		input?: ComponentConfig<InputProps, InputSlots>
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
		maskInput?: ComponentConfig<MaskInputProps, MaskInputSlots>
		currencyInput?: ComponentConfig<CurrencyInputProps, CurrencyInputSlots>
		otpInput?: ComponentConfig<OTPInputProps, OTPInputSlots>
		dateInput?: ComponentConfig<DateInputProps, DateInputSlots>
		dateRangeInput?: ComponentConfig<DateRangeInputProps, DateRangeInputSlots>
		phoneInput?: ComponentConfig<PhoneInputProps, PhoneInputSlots>
		tagsInput?: ComponentConfig<TagsInputProps, TagsInputSlots>
		select?: ComponentConfig<object, SelectSlots>
		tabs?: {
			default?: ComponentConfig<TabsProps, TabsSlots>
			list?: ComponentConfig<TabsListProps, TabsListSlots>
			trigger?: ComponentConfig<TabsTriggerProps, TabsTriggerSlots>
			content?: ComponentConfig<TabsContentProps, TabsContentSlots>
		}
	}
}
