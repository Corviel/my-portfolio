/* eslint-disable @next/next/no-img-element */
type SkillProps = {
  image: string
  title: string
  description: string
  subtitle: string
  firstList: string[]
  currently: "studying" | "working"
  secondList: string[]
  additionalClasses?: string
}

export default function Skill(Props: SkillProps) {
  return (
    <article
      className={`bg-[#f7f7f7] w-full p-8 px-12 max-xl:max-w-2xl justify-self-center xl:shadow-card ${Props.additionalClasses}`}
    >
      <img
        className="my-8 mx-auto"
        src={`${Props.image}.svg`}
        alt={`Icon representing said skill`}
        width={64}
        height={64}
      />
      <h3 className="text-xl font-medium mb-4">{Props.title}</h3>
      <p className="font-medium mb-12">{Props.description}</p>
      <h4 className="text-[#6e07f3] font-medium mb-2">{Props.subtitle}</h4>
      <ul className="list-none mb-4 [&>li]:mb-2">
        {Props.firstList?.map((item, key) => {
          return <li key={key}>{item}</li>
        })}
      </ul>

      <h4 className="text-[#6e07f3] font-medium mb-2">
        Currently {Props.currently}
      </h4>
      <ul className="list-none mb-4 [&>li]:mb-2">
        {Props.secondList?.map((item, key) => {
          return <li key={key}>{item}</li>
        })}
      </ul>
    </article>
  )
}
