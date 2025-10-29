import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Board from "../pages/Board";
import Logout from "../pages/Logout";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Feed from "../components/Feed";
import ItemDetails from "../pages/ItemDetails";
import MyBids from "../components/MyBids";

export const router = createBrowserRouter(
    [
        {
            path: "/signup",
            element: <SignUp />
        },
        {
            path: "/signin",
            element: <SignIn />
        },
        {
            path: "/logout",
            element: <Logout />
        },
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Board />
                },
                {
                    path: "/my-items",
                    element: <Feed myOwn={true} />
                },
                {
                    path: "/my-bids",
                    element: <MyBids />
                },
                {
                    path: "/item/:id",
                    element: <ItemDetails />
                },
            ],
        },
    ],
)