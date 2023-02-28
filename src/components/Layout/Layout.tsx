import { PropaneSharp } from "@mui/icons-material"
import { Box, Container, Grid } from "@mui/material"
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
            <Container maxWidth={"xl"}>
                <Grid container spacing={2} mt={9} >
                    <Grid item md={3}>
                        <Sidebar />
                    </Grid>
                    <Grid item md={9}>
                        {children}
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Layout