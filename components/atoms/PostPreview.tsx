import Link from "next/link"
import Author from "../../lib/interfaces/author"
import Avatar from "./Avatar"

type Props = {
  title: string
  date: string
  author: Author
  slug: string
  preview?: boolean
}

const PostPreview = ({ title, date, author, slug, preview = false }: Props) => {
  return (
    <article className="border-2 border-gray-500 rounded-lg p-4 mb-4 hover:bg-gray-100">
      <h3 className="text-md mb-1 font-medium leading-snug">
        <Link
          as={`/writing/${slug}`}
          href="/writing/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-sm text-gray-500 mb-2">{date}</div>
      <Avatar name={author.name} picture={author.picture} preview={preview} />
    </article>
  )
}

export default PostPreview
