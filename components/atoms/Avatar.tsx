/* eslint-disable @next/next/no-img-element */

type Props = {
  name: string
  picture: string
  preview?: boolean
}

const Avatar = ({ name, picture, preview = false }: Props) => {
  return (
    <div className="flex items-center">
      <img
        src={picture}
        className={`rounded-full ${
          preview ? "w-8 h-8 mr-2" : "w-12 h-12 mr-3"
        }`}
        alt={name}
      />
      <div className={`font-medium ${preview ? "text-sm" : "text-lg"}`}>
        {name}
      </div>
    </div>
  )
}

export default Avatar
