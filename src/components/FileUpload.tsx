import { Match, Switch, createEffect, createSignal } from 'solid-js'
import Button from './ui/button'
import { cn } from '@/lib/utils'
import { RiDocumentContactsBookUploadLine } from 'solid-icons/ri'
import { TbFileAlert, TbFilePlus } from 'solid-icons/tb'

export default function FileUpload() {
	const [fileInputRef, setFileInputRef] = createSignal<HTMLInputElement | null>(
		null
	)
	const [overDropZone, setOverDropZone] = createSignal(false)
	const [isValidFile, setIsValidFile] = createSignal(true)

	const allowedFileTypes = ['csv', 'xlsx', 'json']

	const checkFileValidity = (file: File): boolean => {
		const fileExtension = file.name.split('.').pop()?.toLowerCase()
		if (fileExtension && allowedFileTypes.includes(fileExtension)) {
			setIsValidFile(true)
			handleFileChange(file)
			return true
		} else {
			setIsValidFile(false)
			return false
		}
	}

	createEffect(() => {
		if (!isValidFile())
			setTimeout(() => {
				setIsValidFile(true)
			}, 5000)
	})

	const handleFileChange = (file: File) => {
		console.log(file.name)
	}

	return (
		<div class="w-full h-full flex justify-center items-center">
			<Button
				disabled={false}
				variant={'outline'}
				class={cn(
					'relative block w-full h-full rounded-lg border-2 border-dashed border-border p-12 text-center',
					overDropZone() && 'bg-secondary',
					!isValidFile() && 'border-destructive border-solid'
				)}
				onClick={(e) => {
					e.preventDefault()
					if (fileInputRef()) {
						const fileInput = fileInputRef()
						if (fileInput) {
							fileInput.click()
						}
					}
				}}
				onDragOver={(e) => {
					e.preventDefault()
					e.stopPropagation()
					setOverDropZone(true)
				}}
				onDragLeave={(e) => {
					e.preventDefault()
					e.stopPropagation()
					setOverDropZone(false)
				}}
				onDrop={(e) => {
					e.preventDefault()
					e.stopPropagation()
					if (
						e.dataTransfer &&
						e.dataTransfer.files &&
						e.dataTransfer.files.length > 0
					) {
						const isValid = checkFileValidity(e.dataTransfer.files[0])
						if (!isValid) {
							e.dataTransfer.clearData()
						}
					}
					setOverDropZone(false)
				}}>
				<div>
					<Switch
						fallback={<TbFilePlus class="mx-auto h-12 w-12 text-gray-400" />}>
						<Match when={isValidFile() && overDropZone()}>
							<RiDocumentContactsBookUploadLine class="mx-auto h-12 w-12 text-primary" />
						</Match>
						<Match when={!isValidFile()}>
							<TbFileAlert class="mx-auto h-12 w-12 text-destructive" />
						</Match>
					</Switch>
					<span
						class={cn(
							'mt-2 block text-sm font-semibold',
							!isValidFile() && 'text-destructive'
						)}>
						Upload File
					</span>
					<span class={cn('text-xs', !isValidFile() && 'text-destructive')}>
						Supported formats: <code>.csv</code>, <code>.xlsx</code>,{' '}
						<code>.json</code>
					</span>
					<br />
					<br />
					<Button
						variant={'link'}
						size={'sm'}
						onClick={(e) => {
							e.preventDefault()
							e.stopPropagation()
							console.log('Example data')
						}}>
						Play with example data
					</Button>
					<input
						class="hidden"
						id="file"
						name="file"
						type="file"
						ref={setFileInputRef}
						accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/json"
						onClick={(e) => {
							e.stopPropagation()
						}}
						onChange={(e) => {
							const file = (e.target as HTMLInputElement).files?.[0]
							if (!file) return
							checkFileValidity(file)
						}}
					/>
				</div>
			</Button>
		</div>
	)
}
