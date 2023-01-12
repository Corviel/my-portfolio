import type Post from "../../lib/interfaces/post"
import PostPreview from "../atoms/PostPreview"

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <aside className="col-span-4 relative">
      <h2 className="mb-8 text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
        More writing
      </h2>
      <div className="max-xl:grid grid-cols-1 md:grid-cols-2 w-full gap-4">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            author={post.author}
            slug={post.slug}
            preview={post.preview}
          />
        ))}
      </div>
    </aside>
  )
}

export default MoreStories
