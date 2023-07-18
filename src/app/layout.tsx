'use client'

import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Exporter from "@/components/Exporter";

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
					<Exporter />
				</Providers>
			</body>
		</html>
	)
}