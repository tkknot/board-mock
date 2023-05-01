import { Button } from "../components/Button";
import { Input } from "../components/Thread/Form/Input";

export const Create = () => {
  return (
    <>
      <h1 className='text-3xl font-bold mb-12 ml-16 mt-4'>
        新しくスレッドを作る
      </h1>

      <form className='grid grid-cols-2 ml-16 text-center'>
        <Input text='スレッド名' />
        <Input text='見出し' />
      </form>

      <Button
        text='スレッドを立てる'
        style='w-40 mt-8 mb-24 text-white btn-info block mx-auto'
      />
    </>
  );
};
