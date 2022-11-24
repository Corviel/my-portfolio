import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="container">
                <Link href='/'>
                    <Image src="/letter-c.png" alt='A logo with the C letter' width={64} height={64} />
                </Link>

                <nav>
                    <ul>
                        <li className="writing">Writing</li>
                        <li><Link href="mailto:gabrielbgmenezes@gmail.com" className="contact">Let&apos;s talk!</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}