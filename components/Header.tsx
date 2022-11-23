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
                        <li><Link href="writing">Writing</Link></li>
                        <li><Link href="" className="contact">Let&apos;s talk!</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}