/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import ProjectCard from "../components/atoms/ProjectCard"
import Skill from "../components/atoms/Skill"

export default function HomePage() {
  return (
    <main>
      <section className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-2">
          Front-end developer & back-end enthusiast.
        </h1>
        <p className="text-lg mb-10">I love to code and live to learn.</p>
        <Image
          className="mb-16 mx-auto"
          src="/gb-circle-crop.png"
          alt="A picture of me trying to look cool"
          width={300}
          height={300}
        />
        <img
          className="mx-auto"
          src="/programming.svg"
          alt="Image of guy using computer with 3 screens"
          width="700px"
        />
      </section>

      <section className="bg-[#372e41] pt-24 pb-48 text-center text-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">
            Hello! I&apos;m Gabriel. Nice to meet you :)
          </h2>
          <p className="max-w-2xl mx-auto text-lg leading-normal">
            Passionate about in-depth and theoretical knowledge of the web
            development field, I have a high ability to solve, or at least find
            solutions for any problem I encounter. I&apos;m always looking to
            keep myself up to date with the latest technologies in the field and
            better myself where i need in order to use them.
          </p>
        </div>
      </section>

      <section className="-mt-32 mb-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-3 text-center">
            <Skill
              image="frontend"
              title="Front-end"
              description="I value beauty as much as functionality, because appearances do matter."
              subtitle="Technologies i use:"
              firstList={[
                "HTML (SEO and accessibility optimized)",
                "CSS (SASS and Tailwind included)",
                "JS (TypeScript included)",
                "React and its hooks",
                "Next (including v13.0)",
                "Svelte and SvelteKit",
              ]}
              currently="studying"
              secondList={["Astro", "Qwik"]}
              additionalClasses="max-xl:rounded-t-[20px] xl:rounded-tl-[20px] xl:rounded-bl-[20px] border xl:border-r-0 border-[#372e4140]"
            />
            <Skill
              image="database"
              title="Back-end"
              description="Even though i am a back-end beginner, i love to learn and get
              better at it."
              subtitle="Technologies i use:"
              firstList={[
                "NodeJS",
                "Express",
                "MySQL",
                "MongoDB",
                "PocketBase",
                "Strapi",
              ]}
              currently="studying"
              secondList={["SSR", "Headless CMS's"]}
              additionalClasses="border-x border-y border-[#372e4140]"
            />
            <Skill
              image="social"
              title="Social"
              description="These skills are a valuable part of who i am and i consider them
              resourceful for my career."
              subtitle="Communication:"
              firstList={[
                "Willing to listen",
                "Talkative",
                "Inquisitive",
                "Receptive",
                "Calm",
              ]}
              currently="working"
              secondList={["Being less assertive", "Being less shy"]}
              additionalClasses="max-xl:rounded-b-[20px] xl:rounded-tr-[20px] xl:border-l-0 xl:rounded-br-[20px] border border-t-0 border-[#372e4140]"
            />
          </div>
        </div>
      </section>

      <section className="mb-24 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl mb-4 font-bold">My recent work</h2>
          <p className="text-lg font-medium mb-12">
            These are some of the projects i&apos;ve been working on. Want to be
            part of it? <a href="">Contact me</a>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <ProjectCard
              image="e-commerce"
              imageAlt="Person buying online"
              icon="shopping"
              iconAlt="Shopping cart"
              text="E-commerce app for studying complex global states using context and reducers"
              href="https://e-commerce-mu-khaki.vercel.app/#/"
            />
            <ProjectCard
              image="crypto"
              imageAlt="Crypto currencies"
              icon="crypto"
              iconAlt="Crypto coin icon"
              text="Crypto Currency Viewer using react-query for fetching and
                  re-evaluating data."
              href="https://corviel.github.io/crypto-project/"
            />
            <ProjectCard
              image="pokemon"
              imageAlt="Pokeball on top of cards"
              icon="pokemon"
              iconAlt="Pokeball icon"
              text="Pokedex app with SSR, server-side fetchs, loading and error pages"
              href="https://pokedex-o5oqqwgcf-corviel.vercel.app/"
            />
          </div>

          <a
            className="py-3 px-8 block w-fit mx-auto border-2 border-[#6e07f3] font-medium duration-200 hover:bg-[#6e07f3] hover:text-white"
            href="https://github.com/Corviel"
            rel="noreferrer"
            target="_blank"
          >
            See more on my GitHub
          </a>
        </div>
      </section>

      <section className="container mx-auto relative -mb-20 z-10 text-white">
        <div className="py-16 px-8 rounded-2xl bg-[#141c3a] flex max-lg:flex-col max-lg:gap-y-8 justify-around items-center">
          <h2 className="text-3xl font-bold">Start a project</h2>

          <p className="max-w-[400px] text-center">
            Interested in working together? We should queue up a time to chat.
            I&apos;ll buy the coffee.
          </p>

          <a
            className="group inline-flex items-center justify-center py-2 px-8 border-2 border-[#5be9b9] rounded-full text-center text-xl duration-200 ease-in-out hover:bg-[#5be9b9] hover:text-[#141c3a]"
            href="mailto:gabrielbgmenezes@gmail.com"
          >
            <span className="inline-flex justify-center items-center w-[30px] h-[30px] -ml-[10px] mr-1">
              <svg
                className="h-[20px]"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="hand-horns"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              >
                <path
                  className="duration-200 ease-in-out group-hover:fill-[#141c3a]"
                  fill="white"
                  d="M376 64c-39.69 0-72 31.86-72 71.02v26.17C300.2 160.5 296.3 160 292.3 160C279.3 160 266.8 163.7 256 170.5C245.2 163.7 232.7 160 219.8 160C215.7 160 211.8 160.5 208 161.2V72c0-39.7-32.3-72-71.1-72C96.32 0 64.02 32.3 64.02 72v160.4l-7.113 1.188C23.94 240.7 0 270.3 0 303.1v80c0 22.38 10.12 43.09 27.81 56.84l45.97 35.75c29.34 22.83 65.97 35.41 103.2 35.41L271.8 512C368.9 512 448 432.9 448 335.8V135C448 95.86 415.7 64 376 64zM272 228.3C272 217.1 281.1 208 292.3 208s20.25 9.078 20.25 20.25v55.5C312.5 294.9 303.4 304 292.3 304S272 294.9 272 283.8V228.3zM240 228.3v55.5c0 .4414-.2246 .8105-.252 1.246C238.5 255.4 220.9 234.4 200.4 223.9C202.4 214.9 210.1 208 219.8 208C230.9 208 240 217.1 240 228.3zM112 72c0-13.23 10.78-24 23.1-24c13.22 0 24 10.77 24 24v123.9C156.4 202.6 153.8 209.8 152.6 217.6L112 224.4V72zM400 335.8C400 406.5 342.5 464 271.8 464l-94.81-.0156c-26.56 0-52.72-8.984-73.69-25.3l-45.97-35.75C51.47 398.4 48 391.3 48 383.1v-80c0-11.23 7.969-21.11 17.88-23.27l97-16.19c1.692-.3629 3.383-.5372 5.05-.5372c11.86 0 24.09 9.439 24.09 24.06c0 11.04-7.513 20.95-17.17 23.09L116.8 319c-12.03 1.633-20.78 11.92-20.78 23.75c0 20.24 18.82 24.08 23.69 24.08c1.161 0 2.339-.0863 3.526-.2646l59.88-8.172c7.666-1.646 14.58-4.74 21.01-8.496C209.1 351.1 214.3 352 219.8 352C232.7 352 245.2 348.3 256 341.5C266.8 348.3 279.3 352 292.3 352c37.63 0 68.25-30.61 68.25-68.25v-55.5c0-11.75-3.254-22.64-8.5-32.3V135C352 122.3 362.8 112 376 112s24 10.33 24 23.02V335.8z"
                ></path>
              </svg>
            </span>
            <span>Let&apos;s do this</span>
          </a>
        </div>
      </section>
    </main>
  )
}
