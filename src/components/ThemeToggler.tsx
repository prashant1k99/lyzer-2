import { Show } from 'solid-js'
import { FiSun } from 'solid-icons/fi'
import { RiWeatherMoonClearLine } from 'solid-icons/ri'
import { useTheme } from '../lib/context/Theme'
import Button from './ui/button'

export default function ThemeToggler() {
	const { theme, toggleTheme } = useTheme()
	return (
		<Button
			variant={'ghost'}
			size={'icon'}
			onClick={toggleTheme}
			class="text-primary">
			<Show when={theme() === 'light'} fallback={<FiSun size={24} />}>
				<RiWeatherMoonClearLine size={24} />
			</Show>
		</Button>
	)
}
