import { SidebarItems } from "../SidebarItems";

export const Sidebar = () => {
  const items = [
    {
      name: "ホーム",
      link: "/",
    },
    {
      name: "保存済み",
      link: "/",
    },
    {
      name: "履歴",
      link: "/",
    },
  ];
  return (
    <aside className='border-r mr-4 col-span-2'>
      <SidebarItems items={items} />
    </aside>
  );
};
