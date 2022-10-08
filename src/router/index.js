// import { lazy } from 'react'
import Login from "../views/login";
import NotFind from "../views/404";
import Layout from "../views/layout";
import Index from "../views/index";
import User from "../views/sys/user";
import Dept from "../views/sys/dept";
import Role from "../views/sys/role";
import Menu from "../views/sys/menu";

// const Dept = lazy(() => import('../views/sys/dept'))
// const Role = lazy(() => import('../views/sys/role'))
// const Menu = lazy(() => import('../views/sys/menu'))

let routes = [
  { path: "/login", name: "login", element: <Login /> },
  {
    path: "/",
    name: "/",
    element: <Layout />,
    children: [
      { index: true, name: "index", element: <Index /> },
      { path: "/User", name: "User", element: <User /> },
      { path: "/Dept", name: "Dept", element: <Dept /> },
      { path: "/Role", name: "Role", element: <Role /> },
      { path: "/Menu", name: "Menu", element: <Menu /> },
      { path: "*", name: "404", element: <NotFind /> },
    ],
  },
];
export default routes;
