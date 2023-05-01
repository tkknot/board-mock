export const Input = (props) => { 
  return (
    <p>
      <span>{ props.text}:&nbsp;</span>
      <input type="text" className="border rounded-md" />
    </p>
  )
}