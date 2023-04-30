export const Tag = (props) => {
  return (
    <div className='grid w-32 h-6 mt-4 mr-4 rounded bg-primary text-primary-content place-content-center text-sm'>
      { props.name }
    </div>
  );
};
