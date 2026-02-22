'use client'

import {
	CircleCheck,
	Info,
	LoaderCircle,
	OctagonX,
	TriangleAlert,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { Toaster as Sonner } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
	const { theme = 'system' } = useTheme()

	return (
		<Sonner
			className="t:toaster t:group"
			icons={{
				error: <OctagonX className="t:h-4 t:w-4" />,
				info: <Info className="t:h-4 t:w-4" />,
				loading: <LoaderCircle className="t:h-4 t:w-4 t:animate-spin" />,
				success: <CircleCheck className="t:h-4 t:w-4" />,
				warning: <TriangleAlert className="t:h-4 t:w-4" />,
			}}
			theme={theme as ToasterProps['theme']}
			toastOptions={{
				classNames: {
					actionButton:
						't:group-[.toast]:bg-primary t:group-[.toast]:text-primary-foreground',
					cancelButton:
						't:group-[.toast]:bg-muted t:group-[.toast]:text-muted-foreground',
					description: 't:group-[.toast]:text-muted-foreground',
					toast:
						't:group t:toast t:group-[.toaster]:bg-background t:group-[.toaster]:text-foreground t:group-[.toaster]:border-border t:group-[.toaster]:shadow-lg',
				},
			}}
			{...props}
		/>
	)
}

export { Toaster }
