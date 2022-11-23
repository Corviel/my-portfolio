/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
    return (
        <main className="home">
            <section className="hero container">
                <h1>Front-end developer & back-end enthusiast.</h1>
                <p>I love to code and live to learn.</p>
                <div className="me">
                    <Image src="/gb-circle-crop.png" alt="A picture of me trying to look cool" width={300} height={300}/>
                </div>

                <img src="/programming.svg" alt="Image of guy using computer with 3 screens" width="700px" />
            </section>

            <section className="sectiontwo">
                <div className="container">
                    <h2>Hello! I&apos;m Gabriel. Nice to meet you :)</h2>
                    <p>Passionate about in-depth and theoretical knowledge of the web development field, I have a high ability to solve, or at least find solutions for any problem I encounter. I&apos;m always looking to keep myself up to date with the latest technologies in the field and better myself where i need in order to use them.</p>
                </div>
            </section>

            <section className="skills">
                <div className="container">
                    <div className="skills-grid">
                        <div className="card">
                            <div className="icon">
                                <img src="frontend.svg" alt="Icon of paint brush" width={72}/>
                            </div>
                            <h3>Front-end</h3>
                            <p>I value beauty as much as functionality, because appearances do matter.</p>
                            <div className="list">
                                <h4>Technologies i use:</h4>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS (SASS)</li>
                                    <li>JS (TypeScript)</li>
                                    <li>React</li>
                                    <li>Next (including v13)</li>
                                </ul>

                                <h4>Currently studying:</h4>
                                <ul>
                                    <li>Astro</li>
                                    <li>Qwik</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="icon">
                                <img src="database.svg" alt="Icon of database" width={72} />
                            </div>
                            <h3>Back-end</h3>
                            <p>Even though i am a back-end beginner, i love to learn and get better at it.</p>

                            <div className="list">
                                <h4>Technologies i use:</h4>
                                <ul>
                                    <li>NodeJS</li>
                                    <li>Express</li>
                                    <li>MySQL</li>
                                    <li>MongoDB</li>
                                    <li>PocketBase</li>
                                </ul>

                                <h4>Currently studying:</h4>
                                <ul>
                                    <li>SSR</li>
                                    <li>ORMs</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="icon">
                                <img src="social.svg" alt="Icon of people" width={72} />
                            </div>
                            <h3>Social</h3>
                            <p>These skills are a valuable part of who i am and i consider them resourceful for my career.</p>

                            <div className="list">
                                <h4>Communication:</h4>
                                <ul>
                                    <li>Willing to listen</li>
                                    <li>Talkative</li>
                                    <li>Inquisitive</li>
                                    <li>Receptive</li>
                                    <li>Calm</li>
                                </ul>

                                <h4>Currently working on:</h4>
                                <ul>
                                    <li>Being less assertive</li>
                                    <li>Being less shy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="work">
                <div className="container">
                    <h2>My recent work</h2>
                    <p>These are some of the projects i&apos;ve been working on. Want to be part of it? <a href="">Contact me</a></p>

                    <div className="work-grid">
                        <div className="box">
                            <Image className='back' src='/crypto.jpg' alt="Crypto currencies" fill sizes='any'/>
                            <img className='icon' src="/crypto-icon.svg" alt="Currency icon" width={120} />
                            <div className="text">
                                <h3>Crypto Currency Viewer using react-query for fetching and revaluating data.</h3>
                                <a href="https://corviel.github.io/crypto-project/" rel='noreferrer' target="_blank">Visit</a>
                            </div>
                        </div>
                        <div className="box">
                            <Image className='back' src='/groceries.jpg' alt="Crypto currencies" fill sizes='any'/>
                            <img className='icon' src="/barn-icon.svg" alt="Barn icon" width={120} />
                            <div className="text">
                                <h3>CRUD App for ordering groceries</h3>
                                <a href="">Visit</a>
                            </div>
                        </div>
                        <div className="box">
                            <Image className='back' src='/pokemon.jpg' alt="Crypto currencies" fill sizes='any'/>
                            <img className='icon' src="/pokemon-icon.svg" alt="Pokemon icon" width={120} />
                            <div className="text">
                                <h3>Pokedex app collab with a friend for studies</h3>
                                <a href="">Visit</a>
                            </div>
                        </div>
                    </div>

                    <a className="github-link" href="">See more on my GitHub</a>
                </div>
            </section>

            <section className="collab">
                <div className="container">
                    <h2>Start a project</h2>

                    <p>Interested in working together? We should queue up a time to chat. I&apos;ll buy the coffee.</p>

                    <a href="">Let&apos;s do this!</a>
                </div>
            </section>

            <footer>
                <div className="container">
                    <h2>Living, learning & leveling up <br /> one day at a time.</h2>
                    <div className="socials">
                        <a href="">
                            <img src="/github.svg" alt="" width={40}/>
                        </a>

                        <a href="">
                            <img src="/instagram.svg" alt="" width={40}/>
                        </a>

                        <a href="">
                            <img src="/linkedin.svg" alt="" width={40}/>
                        </a>
                    </div>
                    <p>Handcrafted by me, with love ❤ and <a href="">Next.js</a>. &copy; {new Date().getFullYear()}</p>
                </div>
            </footer>
        </main>
    )
}