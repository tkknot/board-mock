import { SidebarItems } from "../SidebarItems"

export const Sidebar = () => {
  return (
    <aside className='border-r mr-4 col-span-1'>
      <SidebarItems names={["ホーム", "保存済み", "履歴"]} />
    </aside>
  );
}