import Image from "next/image"
import Link from "next/link"

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className="shadow-sm hover:shadow-lg transition-shadow duration-200 rounded-md"
      width={1920}
      height={600}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`writing/${slug}`} href="writing/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
