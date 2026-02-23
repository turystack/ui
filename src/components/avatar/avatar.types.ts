export type AvatarSlots = 'root' | 'image' | 'fallback'

export type AvatarSize = 'sm' | 'md' | 'lg'

export type AvatarVariant = 'circle' | 'square'

export type AvatarProps = {
	src?: string | null
	alt?: string
	size?: AvatarSize
	variant?: AvatarVariant
}
