import ThemeToggler from '@/components/ThemeToggler'
import Button from './components/ui/button'
import { BsGithub } from 'solid-icons/bs'
import Logo from './components/Logo'
import DataView from './components/DataView'

function App() {
	return (
		<div class="bg-background text-foreground">
			<div class="h-screen w-screen grid grid-rows-[60px_1fr] grid-cols-[400px_1fr] max-w-[2000px] m-auto gap-x-4 p-2">
				<div class="h-full w-full rounded-lg pb-2">
					<Logo />
				</div>
				<div class="h-full w-full rounded-lg flex justify-end items-center gap-4 pb-2">
					<ThemeToggler />
					<a
						tabIndex={-1}
						href="https://github.com/prashant1k99/lyzer"
						target="_blank">
						<Button size={'icon'} variant={'secondary'}>
							<BsGithub size={24} />
						</Button>
					</a>
				</div>
				<div class="border-2 border-gray-500 h-full w-full rounded-lg p-2">
					Sidebar
				</div>
				<div class="border-2 border-gray-500 h-full w-full rounded-lg p-2">
					<DataView />
				</div>
			</div>
		</div>
	)
}

export default App
