import { Tabs } from "../components/Tabs";
import { Content } from "../components/Thread/Content";

export const Home = () => {
  return (
    <>
      <Tabs titles={["勢い", "新規", "トップ"]} />
      <Content title='タイトル' subtitle='見出し' tags={["タグ1", "タグ2"]} />
    </>
  );
};
