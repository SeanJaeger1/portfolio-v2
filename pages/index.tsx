import Head from "next/head"
import Navbar from "@/components/Navbar"

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
      <Navbar />
      <div>Home page</div>
    </>
  )
}
