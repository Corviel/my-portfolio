import MoreStories from "../../components/molecules/MoreStories"
import HeroPost from "../../components/organisms/HeroPost"
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

  const heroPost = allPosts[0]
  const morePosts = allPosts
    .slice(1)
    .map((item: any) => ({ ...item, preview: true }))

  return (
    <main className="container mx-auto mb-8">
      <h1 className="text-4xl mb-4">Welcome to my blog!</h1>
      <section className="xl:grid xl:grid-cols-12 gap-8">
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
      </section>
    </main>
  )
}
