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
      <div className="max-sm:mb-4 sm:brightness-50 sm:-z-10 w-full h-full">
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
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        <div className="flex max-[340px]:flex-col items-start max-[340px]:gap-y-4 min-[340px]:items-center gap-x-8">
          <Avatar name={author.name} picture={author.picture} />
          <Link
            as={`/writing/${slug}`}
            href="/writing/[slug]"
            className="hover:underline border-2 border-black sm:border-white px-4 py-2"
          >
            See the post
          </Link>
        </div>
      </div>
    </article>
  )
}

export default HeroPost
