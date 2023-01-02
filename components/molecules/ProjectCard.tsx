/* eslint-disable @next/next/no-img-element */
import Image from "next/image"

type ProjectCardProps = {
  image: string
  imageAlt: string
  icon: string
  iconAlt: string
  text: string
  href: string
}

export default function ProjectCard(Props: ProjectCardProps) {
  return (
    <article className="group grid relative h-80 rounded-lg [&>*]:col-span-full [&>*]:row-span-full text-white">
      <Image
        className="object-cover -z-10 brightness-50 rounded-lg"
        src={`/${Props.image}.jpg`}
        alt={Props.imageAlt}
        fill
        sizes="any"
      />
      <img
        className="place-self-center"
        src={`/${Props.icon}-icon.svg`}
        alt={Props.iconAlt}
        width={120}
      />
      <div className="flex justify-center items-center flex-col gap-y-4 p-8 w-full h-full opacity-0 bg-[#372e41] rounded-lg duration-500 ease-in-out group-hover:opacity-100">
        <h3 className="text-lg">{Props.text}</h3>
        <a
          className="text-center block w-fit mx-auto text-white border-2 border-white py-2 px-6 hover:bg-white hover:text-[#372e41]"
          href={Props.href}
          rel="noreferrer"
          target="_blank"
        >
          Visit
        </a>
      </div>
    </article>
  )
}
