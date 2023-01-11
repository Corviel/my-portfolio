import HeroPost from "../../components/molecules/HeroPost"
import MoreStories from "../../components/molecules/MoreStories"
import { getAllPosts } from "../../lib/api"
import PostType from "../../lib/interfaces/post"

type allPosts = PostType[]

export default async function PostsPage() {
  const allPosts: any = getAllPosts([
    "slug",
    "title",
    "date",
    "author",
    "excerpt",
    "coverImage",
  ])
  console.log(allPosts)

  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return (
    <>
      <h1>These are the posts</h1>
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </>
  )
}
