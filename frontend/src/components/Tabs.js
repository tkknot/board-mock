export const Tabs = (props) => {
  return (
    <div className='tabs tabs-boxed'>
      {props.titles.map((title) => {
        return <a className='tab'>{title}</a>;
      })}
    </div>
  );
};
