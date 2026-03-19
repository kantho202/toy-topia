import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout/HomeLayout";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import ToysDetails from "../pages/ToysDetails";
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import ForgetPassword from "../components/ForgetPaasword/ForgetPassword";
import ErrorPages from "../pages/ErrorPages";


const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [

            {
                path: "/",
                Component: Home,
                loader:()=>fetch('/toys.json')
            },
            {
                path: "/profile",
                Component: Profile
            }
        ]
    },

    {
        path: "/toys-details/:id",
        loader:()=>fetch('/toys.json'),
        element: <PrivateRouter>
            <ToysDetails></ToysDetails>
        </PrivateRouter>
        
    },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path:"/auth/login",
                Component:LogIn
            },
            {
                path:"/auth/register",
                Component:Register
            },
            {
                path:"/auth/forget-password",
                Component:ForgetPassword
            }

        ]

    },
    {
        path: "*",
        element: <ErrorPages></ErrorPages>
    }
])

export default router