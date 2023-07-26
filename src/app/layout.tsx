'use client'

import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Exporter from "@/components/Exporter";
import Scratchpad from "@/components/Scratchpad";

export const metadata = {
	title: 'Woi Wurrung Language App',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en-AU">
			<body>
				<Providers>
					<Navbar />
					{children}
					<Scratchpad />
					<Exporter />
				</Providers>
			</body>
		</html>
	)
}