import { FC } from "react"
import { RouterProvider } from "react-router"
import { createBrowserRouter } from "react-router-dom"
import Layout from "../Layout/Layout"
import Home from "../Pages/Home/Home"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    }
])

const Routes: FC = () => {
    return (
        <Layout><RouterProvider router={router} /></Layout> 
    )
}

export default Routes