/* eslint-disable @next/next/no-img-element */
export default function Footer() {
    return (
        <footer>
            <div className="container">
                <h2>Living, learning & leveling up <br /> one day at a time.</h2>
                <div className="socials">
                    <a href="https://github.com/Corviel" rel='noreferrer' target="_blank">
                        <img src="/github.svg" alt="" width={40}/>
                    </a>

                    <a href="https://www.linkedin.com/in/corviel/" rel='noreferrer' target="_blank">
                        <img src="/linkedin.svg" alt="" width={40}/>
                    </a>
                </div>
                <p>Handcrafted by me, with love ❤ and <a href="https://nextjs.org/" rel="noreferrer" target='_blank'>Next.js</a>. &copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}