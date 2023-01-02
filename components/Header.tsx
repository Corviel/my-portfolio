import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="p-8 mb-12">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/letter-c.png"
            alt="A logo with the C letter"
            width={64}
            height={64}
          />
        </Link>

        <nav>
          <ul className="flex items-center text-lg list-none gap-x-4">
            <li className="relative line-through after:text-xs after:content-['Soon'] after:absolute after:top-5 after:left-1/2 after:-translate-x-1/2 after:uppercase">
              Writing
            </li>
            <li>
              <Link
                href="mailto:gabrielbgmenezes@gmail.com"
                className="border-2 border-black py-2 px-4 font-medium hover:bg-black hover:text-white"
              >
                Let&apos;s talk!
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
