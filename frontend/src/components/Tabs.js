export const Tabs = (props) => {
  return (
    <div className='tabs'>
      {props.titles.map((title) => {
        return (
          <p className='tab tab-bordered mx-16 text-2xl pb-12 font-bold'>
            <a>{title}</a>
          </p>
        );
      })}
    </div>
  );
};
