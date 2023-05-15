import { AppProps } from 'next/app';
import './../globals.css'

interface PageProps {}

export default function App({ Component, pageProps }: AppProps<PageProps>) {
  return <Component {...pageProps} />
}