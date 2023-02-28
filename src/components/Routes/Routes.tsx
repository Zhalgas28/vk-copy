import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Auth from "../Pages/Auth/Auth";
import Register from "../Pages/Auth/Register"
import Home from "../Pages/Home/Home";

type RouterType = {
  path: string;
  exact: boolean;
  element: React.ReactNode;
  isAuth: boolean;
};

const router: Array<RouterType> = [
  {
    path: "/",
    exact: true,
    element: <Home />,
    isAuth: true,
  },
  {
    path: "/auth",
    exact: true,
    element: <Auth />,
    isAuth: false,
  },
  {
    path: "/register",
    exact: true,
    element: <Register />,
    isAuth: false,
  },
];

const AppRoutes: FC = () => {
  const isAuth = true;
  return (
    <Routes>
      {router.map((rout) => {
        if (!isAuth && rout.isAuth) {
            return false // login page
        }
          return (
            <Route path={rout.path}
              element={<Layout>{rout.element}</Layout>}
              key={`route ${rout.element}`}
            />
          );
      })}
    </Routes>
  );
};

export default AppRoutes;
