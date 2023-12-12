import { createStore } from 'solid-js/store'
import { createRoot, createEffect } from 'solid-js'

function Store() {
	const worker = new Worker(new URL('../lib/data-worker.ts', import.meta.url))

	const [data, setData] = createStore({
		isLoading: false,
		isEmpty: true,
	})

	const fetchData = () => {
		// worker.postMessage({
		// 	method: 'get',
		// 	args: {
		// 		type: 'csv',
		// 		limit: 5,
		// 	},
		// } as events)
	}

	createEffect(() => {
		worker.postMessage('ping')
		worker.onmessage = (e) => {
			setData(e.data)
			console.log(e)
			if (e.data.method == 'load' && e.data.status == 'success') {
				fetchData()
			}
		}
	})

	const loadData = (type: 'csv' | 'json', data: string) => {
		// worker.postMessage({
		// 	method: 'load',
		// 	args: {
		// 		function:
		// 			type === 'csv' ? loadFromCSV.toString() : loadFromJSON.toString(),
		// 		data,
		// 	},
		// } as events)
	}
	return {
		data,
		setData,
		loadData,
		fetchData,
	}
}

export default createRoot(Store)
