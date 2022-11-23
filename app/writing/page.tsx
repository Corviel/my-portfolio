import Link from 'next/link';
import PocketBase from 'pocketbase'

async function getPosts() {
    const db = new PocketBase('http://127.0.0.1:8090');
    const data = await db.records.getList('posts');

    return data?.items as any[]
}


export default async function PostsPage() {
    const posts = await getPosts()

    return (
        <>
            <h1>My writing</h1>

            <section>
                {posts?.map(post => {
                    return <Post key={post.id} post={post} />
                })}
            </section>
        </>
    )
}

function Post({ post }: any) {
    const { id, title, content, created } = post || {};

    return (
        <Link href={`/writing/${id}`}>
            <article>
                <h2>{title}</h2>
                <p>{content}</p>
                <span>{created.toLocaleDateString("en-US")}</span>
            </article>
        </Link>
    )
}