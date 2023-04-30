export const Layout = (props) => { 
  return (
    <main className="grid grid-cols-12 px-8">
      { props.children }
    </main>
  )
}