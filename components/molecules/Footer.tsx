/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <footer className="pt-40 bg-[#6e07f3]">
      <div className="container mx-auto text-white text-center">
        <h2 className="mb-8 text-2xl opacity-80">
          Living, learning & leveling up <br /> one day at a time.
        </h2>
        <div className="flex gap-4 justify-center mb-8">
          <a href="https://github.com/Corviel" rel="noreferrer" target="_blank">
            <img src="/github.svg" alt="" width={40} />
          </a>

          <a
            href="https://www.linkedin.com/in/corviel/"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/linkedin.svg" alt="" width={40} />
          </a>
        </div>
        <p className="max-sm:text-sm font-bold underline">
          Handcrafted by me, with love ❤ and{" "}
          <a href="https://nextjs.org/" rel="noreferrer" target="_blank">
            Next.js
          </a>
          . &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
