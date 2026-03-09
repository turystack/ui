import type { ComponentConfig } from '@/support/types'

export type AvatarSlots = 'root' | 'image' | 'fallback'

export type AvatarSize = 'sm' | 'md' | 'lg'

export type AvatarVariant = 'circle' | 'square'

export type AvatarProps = {
	src?: string | null
	alt?: string
	size?: AvatarSize
	variant?: AvatarVariant
}

export type AvatarConfig = ComponentConfig<AvatarProps, AvatarSlots>
