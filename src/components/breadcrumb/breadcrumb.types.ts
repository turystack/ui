import type { ComponentConfig } from '@/support/types'

export type BreadcrumbSlots = 'root'

export type BreadcrumbProps = {}

export type BreadcrumbListSlots = 'root'

export type BreadcrumbListProps = {}

export type BreadcrumbItemSlots = 'root'

export type BreadcrumbItemProps = {}

export type BreadcrumbLinkSlots = 'root'

export type BreadcrumbLinkProps = {
	asChild?: boolean
	href?: string
}

export type BreadcrumbPageSlots = 'root'

export type BreadcrumbPageProps = {}

export type BreadcrumbSeparatorSlots = 'root'

export type BreadcrumbSeparatorProps = {}

export type BreadcrumbEllipsisSlots = 'root' | 'icon'

export type BreadcrumbEllipsisProps = {}

export type BreadcrumbConfig = {
	default?: ComponentConfig<BreadcrumbProps, BreadcrumbSlots>
	list?: ComponentConfig<BreadcrumbListProps, BreadcrumbListSlots>
	item?: ComponentConfig<BreadcrumbItemProps, BreadcrumbItemSlots>
	link?: ComponentConfig<BreadcrumbLinkProps, BreadcrumbLinkSlots>
	page?: ComponentConfig<BreadcrumbPageProps, BreadcrumbPageSlots>
	separator?: ComponentConfig<
		BreadcrumbSeparatorProps,
		BreadcrumbSeparatorSlots
	>
	ellipsis?: ComponentConfig<BreadcrumbEllipsisProps, BreadcrumbEllipsisSlots>
}
