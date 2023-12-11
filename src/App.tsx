import ThemeToggler from '@/components/ThemeToggler'

function App() {
	return (
		<div class="bg-background text-foreground">
			<div class="h-screen w-screen grid grid-rows-[60px_1fr] grid-cols-[400px_1fr] max-w-[2000px] m-auto gap-x-4 pb-4">
				{/* Hello World
				 */}
				<div class="h-full w-full rounded-lg p-2">Logo</div>
				<div class="h-full w-full rounded-lg p-2 flex justify-end">
					<ThemeToggler />
				</div>
				<div class="border-2 border-gray-500 h-full w-full rounded-lg p-2">
					Sidebar{' '}
				</div>
				<div class="border-2 border-gray-500 h-full w-full rounded-lg p-2">
					table | charts
				</div>
			</div>
		</div>
	)
}

export default App
