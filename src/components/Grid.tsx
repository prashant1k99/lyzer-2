import { createEffect } from 'solid-js'

export default function Grid() {
	createEffect(() => {
		console.log('Grid')
	})

	return (
		<div>
			<h1>Grid</h1>
		</div>
	)
}
