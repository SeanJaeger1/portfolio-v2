import Link from "next/link"

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Me</Link>
      </li>
      <li>
        <Link href="/work">Work</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  )
}

export default Home
