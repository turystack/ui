'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/support/utils'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		className={cn('t:border-b', className)}
		ref={ref}
		{...props}
	/>
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className="t:flex">
		<AccordionPrimitive.Trigger
			className={cn(
				't:flex t:flex-1 t:items-center t:justify-between t:py-4 t:font-medium t:transition-all t:hover:underline t:[&[data-state=open]>svg]:rotate-180',
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
			<ChevronDown className="t:h-4 t:w-4 t:shrink-0 t:transition-transform t:duration-200" />
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		className="t:overflow-hidden t:text-sm t:transition-all t:data-[state=closed]:animate-accordion-up t:data-[state=open]:animate-accordion-down"
		ref={ref}
		{...props}
	>
		<div className={cn('t:pt-0 t:pb-4', className)}>{children}</div>
	</AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
