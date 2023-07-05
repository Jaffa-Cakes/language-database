import { Providers } from "./providers";

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
          {children}
        </Providers>
      </body>
    </html>
  )
}
