import Link from "next/link"
import Author from "../../lib/interfaces/author"
import Avatar from "../atoms/Avatar"
import CoverImage from "../atoms/CoverImage"

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <article className="col-span-8 sm:grid grid-cols-1 [&>*]:col-span-full [&>*]:row-span-full place-items-center sm:text-white max-xl:mb-12">
      <div className="max-sm:mb-4 sm:brightness-50 sm:-z-10">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="sm:px-8 xl:px-24">
        <h2 className="mb-2 text-2xl font-bold lg:text-5xl leading-tight">
          <Link
            as={`/writing/${slug}`}
            href="/writing/[slug]"
            className="hover:underline"
          >
            {title}
          </Link>
        </h2>
        <div className="mb-2 sm:mb-4 max-sm:text-gray-500 text-lg">{date}</div>
        <p className="text-lg leading-relaxed mb-4">
          {excerpt.substring(0, 150)}...{" "}
          <Link
            as={`/writing/${slug}`}
            href="/writing/[slug]"
            className="underline"
          >
            Read more
          </Link>
        </p>
        <Avatar name={author.name} picture={author.picture} />
      </div>
    </article>
  )
}

export default HeroPost
