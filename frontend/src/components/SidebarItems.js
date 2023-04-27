export const SidebarItems = (props) => {
  return (
    props.names.map(name => { 
      return (
        <p>{name}</p>
        )
    })
  )
}