import type { AppProps } from "next/app"
import { Open_Sans } from "next/font/google"
import "@/styles/globals.css"

const font = Open_Sans({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  )
}
