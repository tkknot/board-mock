import { Tag } from "./Tag"

export const Content = (props) => { 
  const title = props.title
  const subtitle = props.subtitle
  const tags = props.tags
  
  // `タグがないと作られないようにする
  if(!tags) return null
  
  return (
    <div className="mx-16 border my-8 rounded-lg px-6">
      <div className="flex mb-3">
        {
          tags.map(tag => {
          return (
            <Tag name={tag} />
            )
        })}
      </div>

      <h2 className="text-xl pb-1 font-bolder">
      {title}
      </h2>

      <p className="mb-4 text-sm">{ subtitle }</p>
    </div>
  )
}