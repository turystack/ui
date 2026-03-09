import { Info } from 'lucide-react'
import type { PropsWithChildren } from 'react'
import { tv } from 'tailwind-variants'

import type {
	FormFieldLabelProps,
	FormFieldProps,
	FormFieldSetProps,
	FormProps,
} from './form.types'

import { Label } from '@/components/label'
import { Tooltip } from '@/components/tooltip'

const styles = tv({
	slots: {
		description: 't:text-sm t:text-muted-foreground',
		error: 't:text-sm t:text-destructive',
		field: 't:flex t:flex-col t:gap-1.5',
		fieldSet: 't:space-y-4 t:rounded-md t:border t:p-4',
		legend: 't:text-sm t:font-medium t:px-1',
		root: 't:space-y-4',
	},
})

function Root({ onSubmit, children }: PropsWithChildren<FormProps>) {
	const { root } = styles()

	return (
		<form className={root()} onSubmit={onSubmit}>
			{children}
		</form>
	)
}

function FieldLabel({
	htmlFor,
	required,
	optional,
	disabled,
	tooltip,
	children,
}: PropsWithChildren<FormFieldLabelProps>) {
	return (
		<Label htmlFor={htmlFor} required={required} optional={optional} disabled={disabled} tooltip={tooltip}>
			{children}
		</Label>
	)
}

function Field({ children, label, name, description, error }: PropsWithChildren<FormFieldProps>) {
	const { field, description: descriptionClass, error: errorClass } = styles()

	const resolvedLabel = typeof label === 'string' ? label : label?.content
	const labelConfig = typeof label === 'object' && label !== null ? label : undefined

	return (
		<div className={field()}>
			{resolvedLabel && (
				<FieldLabel htmlFor={labelConfig?.htmlFor ?? name} required={labelConfig?.required} optional={labelConfig?.optional} disabled={labelConfig?.disabled} tooltip={labelConfig?.tooltip}>
					{resolvedLabel}
				</FieldLabel>
			)}
			{description && <p className={descriptionClass()}>{description}</p>}
			{children}
			{error && <p className={errorClass()}>{error}</p>}
		</div>
	)
}

function FieldSet({ legend, tooltip, children }: PropsWithChildren<FormFieldSetProps>) {
	const { fieldSet, legend: legendClass } = styles()
	return (
		<fieldset className={fieldSet()}>
			{legend && (
				<legend className={legendClass()}>
					{legend}
					{tooltip && (
						<Tooltip {...(typeof tooltip === 'string' ? { content: tooltip } : tooltip)}>
							<Info className="t:ml-1 t:inline-block t:h-3.5 t:w-3.5 t:cursor-help t:text-muted-foreground t:shrink-0" />
						</Tooltip>
					)}
				</legend>
			)}
			{children}
		</fieldset>
	)
}

export const Form = Object.assign(Root, {
	Field,
	FieldSet,
})
