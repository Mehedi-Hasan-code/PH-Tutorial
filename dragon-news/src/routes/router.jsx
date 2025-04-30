import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout
    },
    {
        path: '/auth',
        element: <h1>This is auth</h1>
    },
    {
        path: '/news',
        element: <h1>This is News</h1>
    }, 
    {
        path: '/*',
        element: <h1>This is Error page</h1>
    }
])