import { Button } from "./Button";
import { BrowserRouter, Link } from "react-router-dom";

export const SidebarItems = (props) => {
  return (
    <div className='mt-6'>
      {props.items.map((item) => {
        return (
          <p className='leading-10'>
            <Link to={item.link}>{item.name}</Link>
          </p>
        );
      })}

      <Link to='/create'>
        <Button text='スレッドを立てる' style='btn-info text-white' />
      </Link>
    </div>
  );
};
