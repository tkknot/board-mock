import { Button } from "../Button"
import { SidebarItems } from "../SidebarItems"

export const Sidebar = () => {
  return (
    <aside>
      <Button text='新しいスレッド' />
      <SidebarItems names={["ホーム","保存済み","履歴"]} />
    </aside>
  )
}