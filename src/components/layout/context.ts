import { createContext, useContext } from 'react'

type SidebarContextValue = {
	collapsed: boolean
	setCollapsed: (v: boolean) => void
	toggle: () => void
}

export const SidebarContext = createContext<SidebarContextValue | null>(null)

function useSidebarContext() {
	const ctx = useContext(SidebarContext)
	if (!ctx) throw new Error('useSidebar must be used within Layout')
	return ctx
}

export function useSidebar() {
	return useSidebarContext()
}
