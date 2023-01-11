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
    <section className="container mx-auto mb-16">
      <article>
        <div className="mb-4">
          <CoverImage title={title} src={coverImage} slug={slug} />
        </div>
        <h2 className="mb-2 text-4xl lg:text-5xl leading-tight">
          <Link
            as={`/writing/${slug}`}
            href="/writing/[slug]"
            className="hover:underline"
          >
            {title}
          </Link>
        </h2>
        <div className="mb-4 text-lg">{date}</div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        <Avatar name={author.name} picture={author.picture} />
      </article>
    </section>
  )
}

export default HeroPost
