import { Tabs } from "../Tabs";
import { Content } from "../Thread/Content";

export const ContentArea = () => {
  return (
    <div className='col-span-11'>
      <Tabs titles={["勢い", "新規", "トップ"]} />

      <Content title='タイトル' subtitle='サブタイトル' tags={['タグ1', 'タグ2']} />
      <Content title='タイトル' subtitle='サブタイトル' tags={['タグ1', 'タグ2']} />
      <Content title='タイトル' subtitle='サブタイトル' tags={['タグ1', 'タグ2']} />
      <Content title='タイトル' subtitle='サブタイトル' tags={['タグ1', 'タグ2']} />
    </div>
  );
};
