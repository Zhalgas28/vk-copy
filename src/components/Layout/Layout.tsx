import { PropaneSharp } from "@mui/icons-material"
import { Box, Grid } from "@mui/material"
import React, {FC} from "react"
import Header from "./Header/Header"
import Sidebar from "./Sidebar/Sidebar"

type PropsType = {
    children: React.ReactNode
}

const Layout: FC<PropsType> = ({children}) => {
    return (
        <>
            <Header />
            <Grid container spacing={2} mt={2} mx={3} >
                <Grid item md={2}>
                    <Sidebar />
                </Grid>
                <Grid item md={10}>
                    {children}
                </Grid>
            </Grid>
        </>
    )
}

export default Layout