import Link from "next/link"

function NavbarLinks() {
  return (
    <div className="w-fit py-8">
      <ul className="flex flex-row w-fit	">
        <li>
          <Link href="/" className="link-button mx-4">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="link-button mx-4">
            About
          </Link>
        </li>
        <li>
          <Link href="/work" className="link-button mx-4">
            Work
          </Link>
        </li>
        <li>
          <Link href="/contact" className="link-button mx-4">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavbarLinks
