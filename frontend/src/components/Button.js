export const Button = (props) => {
  const style = `btn ${props.style}`

  return (
    <button className={style}>
      { props.text }
    </button>
  )
}