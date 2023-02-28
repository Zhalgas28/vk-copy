import { Typography } from "@mui/material"
import {FC, useState} from "react"
import { IPost } from "../../../types/types"
import { users } from "../../Layout/Sidebar/usersData"
import AddPost from "./AddPosts"
import Posts from "./Posts"

const Home: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([
        {
            author: users[3],
            createdAt: "1 час назад",
            text: "Серебрянная осень в Сибири",
            photos: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Mt-St-Greg-RueEcureuils-3.jpg/1200px-Mt-St-Greg-RueEcureuils-3.jpg",
                "https://gl-img.rg.ru/uploads/images/2022/10/03/autumn-gccece5cec_1280_f84.jpg",
                "https://www.kp.ru/russia/wp-content/uploads/2021/08/samaya-krasivaya-osen-oblozhka.jpg",
                "https://firefly-cdn.zr.ru/_ah/img/GwuZWO9I_FoXzkaCuozr6w=s800"
            ]
        }
    ])
    return <div>
        <AddPost setPosts={setPosts} />
        {posts.length 
            ? <Posts posts={posts} /> 
            : <Typography variant="h5" sx={{
                margin: 2
            }}>Еще нету ни одного поста</Typography> }
    </div>
}

export default Home