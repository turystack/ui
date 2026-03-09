import { useCallback, useState } from 'react'
import type { PropsWithChildren } from 'react'
import { tv } from 'tailwind-variants'

import { useInternalState } from '@/components/provider/provider.context'
import { cn } from '@/support/utils'

import { SidebarContext } from './context'
import { LayoutContent } from './content'
import { LayoutFooter } from './footer'
import { LayoutHeader } from './header/header'
import { LayoutMain } from './main'
import { LayoutNav } from './nav/nav'
import { LayoutSidebar } from './sidebar/sidebar'
import type { LayoutProps } from './layout.types'

const layoutStyles = tv({
	slots: {
		root: 't:flex t:h-full t:w-full t:overflow-hidden t:bg-background t:text-foreground',
	},
})

function LayoutRoot({ children }: PropsWithChildren<LayoutProps>) {
	const state = useInternalState()
	const config = state?.components?.layout?.default
	const { root } = layoutStyles()
	const [collapsed, setCollapsed] = useState(false)
	const toggle = useCallback(() => setCollapsed((p) => !p), [])

	return (
		<SidebarContext.Provider value={{ collapsed, setCollapsed, toggle }}>
			<div className={cn(root(), config?.classNames?.root)}>{children}</div>
		</SidebarContext.Provider>
	)
}

export const Layout = Object.assign(LayoutRoot, {
	Main: LayoutMain,
	Content: LayoutContent,
	Footer: LayoutFooter,
	Header: LayoutHeader,
	Sidebar: LayoutSidebar,
	Nav: LayoutNav,
})
