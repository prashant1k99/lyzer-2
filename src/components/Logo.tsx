import { BiSolidNetworkChart } from 'solid-icons/bi'

export default function Logo() {
	return (
		<div class="text-3xl h-full font-bold bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text select-none flex gap-1 items-center">
			<BiSolidNetworkChart
				class="inline-block text-primary font-bold"
				size={30}
			/>
			Lyzer
		</div>
	)
}
