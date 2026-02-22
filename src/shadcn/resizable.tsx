'use client'

import { GripVertical } from 'lucide-react'
import { Group, Panel, Separator } from 'react-resizable-panels'

import { cn } from '@/support/utils'

const ResizablePanelGroup = ({
	className,
	...props
}: React.ComponentProps<typeof Group>) => (
	<Group
		className={cn(
			't:flex t:h-full t:w-full t:data-[panel-group-direction=vertical]:flex-col',
			className,
		)}
		{...props}
	/>
)

const ResizablePanel = Panel

const ResizableHandle = ({
	withHandle,
	className,
	...props
}: React.ComponentProps<typeof Separator> & {
	withHandle?: boolean
}) => (
	<Separator
		className={cn(
			't:after:-t-translate-x-1/2 t:data-[panel-group-direction=vertical]:after:-t-translate-y-1/2 t:relative t:flex t:w-px t:items-center t:justify-center t:bg-border t:after:absolute t:after:inset-y-0 t:after:left-1/2 t:after:w-1 t:focus-visible:outline-none t:focus-visible:ring-1 t:focus-visible:ring-ring t:focus-visible:ring-offset-1 t:data-[panel-group-direction=vertical]:h-px t:data-[panel-group-direction=vertical]:w-full t:data-[panel-group-direction=vertical]:after:left-0 t:data-[panel-group-direction=vertical]:after:h-1 t:data-[panel-group-direction=vertical]:after:w-full t:data-[panel-group-direction=vertical]:after:translate-x-0 t:[&[data-panel-group-direction=vertical]>div]:rotate-90',
			className,
		)}
		{...props}
	>
		{withHandle && (
			<div className="t:z-10 t:flex t:h-4 t:w-3 t:items-center t:justify-center t:rounded-sm t:border t:bg-border">
				<GripVertical className="t:h-2.5 t:w-2.5" />
			</div>
		)}
	</Separator>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
