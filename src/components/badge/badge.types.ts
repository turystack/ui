export type BadgeSlots = 'root'

export type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline'

export type BadgeAlign = 'start' | 'center' | 'end'

export type BadgeProps = {
	variant?: BadgeVariant
	align?: BadgeAlign
	block?: boolean
	loading?: boolean
	asChild?: boolean
	onClick?: React.MouseEventHandler<HTMLDivElement>
}
