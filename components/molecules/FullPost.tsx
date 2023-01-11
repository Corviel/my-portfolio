import Author from "../../lib/interfaces/author"
import Avatar from "../atoms/Avatar"
import CoverImage from "../atoms/CoverImage"
import PostBody from "./PostBody"

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
  content: string
}

const FullPost = ({ title, coverImage, date, author, content }: Props) => {
  return (
    <>
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight leading-tight md:leading-none mb-4 text-center md:text-left">
          {title}
        </h1>
        <div className="hidden md:block md:mb-4">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div>
          <div className="block md:hidden mb-6">
            <Avatar name={author.name} picture={author.picture} />
          </div>
          <div className="mb-6 text-lg">{date}</div>
          <PostBody content={content} />
        </div>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
    </>
  )
}

export default FullPost
