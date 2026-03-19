export type UploaderSlots =
	| 'root'
	| 'fileList'
	| 'fileItem'
	| 'fileName'
	| 'progress'
	| 'remove'
	| 'icon'

export type UploaderHandlerResponse = {
	fileName: string
	fileNameSigned: string
}

type BaseUploaderProps = {
	accept?: string
	maxFiles?: number
	maxFileSize?: number
	disabled?: boolean
	handler: (fileName: string) => Promise<UploaderHandlerResponse>
}

type SingleUploaderProps = {
	onUpload?: (response: UploaderHandlerResponse, index: number) => void
}

type MultipleUploaderProps = {
	onUpload?: (response: UploaderHandlerResponse[], index: number) => void
}

export type UploaderProps = BaseUploaderProps &
	(SingleUploaderProps | MultipleUploaderProps)
