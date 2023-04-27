export const Layout = (props) => { 
  return (
    <main className="grid grid-cols-3">
      { props.children }
    </main>
  )
}