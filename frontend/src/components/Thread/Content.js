import { Tag } from "./Tag"

export const Content = (props) => { 
  const title = props.title
  const subtitle = props.subtitle
  const tags = props.tags
  
  // `タグがないと作られないようにする
  if(!tags) return null
  
  return (
    <div>
      <div className="flex">
        {
          tags.map(tag => {
          return (
            <Tag name={tag} />
            )
        })}
      </div>

      <h2>
      {title}
      </h2>

      <p>{ subtitle }</p>
    </div>
  )
}