import Head from "next/head"
import { Open_Sans } from "next/font/google"
import Header from "@/components/Header"

const font = Open_Sans({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sean Jaeger Portfolio</title>
        <meta
          name="description"
          content="Sean Jaeger's JavaScript Developer Portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={font.className}>
        <Header />
      </main>
    </>
  )
}
