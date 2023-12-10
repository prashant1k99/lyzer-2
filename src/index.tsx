/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import App from './App'
import { ThemeProvider } from './lib/context/Theme'

const root = document.getElementById('root')

render(
	() => (
		<ThemeProvider storageKey="lyzer-ui-theme" defaultTheme="system">
			<App />
		</ThemeProvider>
	),
	root!
)
