import type { AccordionConfig } from '@/components/accordion'
import type { LayoutConfig } from '@/components/layout/layout.types'
import type { SidebarConfig } from '@/components/layout/sidebar/sidebar.types'
import type { HeaderConfig } from '@/components/layout/header/header.types'
import type { AlertConfig } from '@/components/alert'
import type { AvatarConfig } from '@/components/avatar'
import type { BadgeConfig } from '@/components/badge'
import type { BreadcrumbConfig } from '@/components/breadcrumb'
import type { ButtonConfig } from '@/components/button'
import type { CardConfig } from '@/components/card'
import type { CheckboxConfig } from '@/components/checkbox'
import type { ColorScheme } from '@/components/color-scheme'
import type { CurrencyInputConfig } from '@/components/currency-input'
import type { DateInputConfig } from '@/components/date-input/date-input.types'
import type { DateRangeInputConfig } from '@/components/date-range-input/date-range-input.types'
import type { DocumentInputConfig } from '@/components/document-input/document-input.types'
import type { I18nTranslations } from '@/components/i18n/i18n.types'
import type { InputConfig } from '@/components/input'
import type { LoaderConfig } from '@/components/loader'
import type { MaskInputConfig } from '@/components/mask-input/mask-input.types'
import type { ModalConfig } from '@/components/modal'
import type { OTPInputConfig } from '@/components/otp-input/otp-input.types'
import type { PhoneInputConfig } from '@/components/phone-input/phone-input.types'
import type { SelectConfig } from '@/components/select/select.types'
import type { SeparatorConfig } from '@/components/separator'
import type { SheetConfig } from '@/components/sheet'
import type { SkeletonConfig } from '@/components/skeleton'
import type { TabsConfig } from '@/components/tabs'
import type { TagsInputConfig } from '@/components/tags-input/tags-input.types'

export type ProviderProps = {
	defaultColorScheme?: ColorScheme
	translations?: I18nTranslations
	components?: {
		accordion?: AccordionConfig
		alert?: AlertConfig
		avatar?: AvatarConfig
		badge?: BadgeConfig
		breadcrumb?: BreadcrumbConfig
		button?: ButtonConfig
		card?: CardConfig
		checkbox?: CheckboxConfig
		currencyInput?: CurrencyInputConfig
		dateInput?: DateInputConfig
		dateRangeInput?: DateRangeInputConfig
		documentInput?: DocumentInputConfig
		input?: InputConfig
		loader?: LoaderConfig
		maskInput?: MaskInputConfig
		modal?: ModalConfig
		otpInput?: OTPInputConfig
		phoneInput?: PhoneInputConfig
		select?: SelectConfig
		separator?: SeparatorConfig
		sheet?: SheetConfig
		skeleton?: SkeletonConfig
		tabs?: TabsConfig
		tagsInput?: TagsInputConfig
		layout?: LayoutConfig & {
			sidebar?: SidebarConfig
			header?: HeaderConfig
		}
	}
}
