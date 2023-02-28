import React, {FC} from "react"
import { IUser } from "../../../types/types"
import SidebarItems from "./SidebarItems/SidebarItems"
import SidebarPages from "./SidebarPages/SidebarPages"
import { users } from "./usersData"


const Sidebar: FC = () => {
    return <div>
        <SidebarItems users={users} />
        <SidebarPages />
    </div>
}

export default Sidebar