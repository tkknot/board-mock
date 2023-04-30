import { Button } from "./Button"

export const SidebarItems = (props) => {
  return (
    <div className="mt-6">
      {props.names.map((name) => {
        return <p className='leading-10'>{name}</p>;
      })}

      <Button text='新しく作る' />
    </div>
  );
};
