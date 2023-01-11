type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div dangerouslySetInnerHTML={{ __html: content }} className="prose" />
    </div>
  )
}

export default PostBody
