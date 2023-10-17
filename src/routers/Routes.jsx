import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Addcoffy from "../pages/Addcoffy";
import Moredetails from "../components/Moredetails";
import ProductUpded from "../components/ProductUpded";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://coffyshop-backend-pp6jslwjl-sudiptacoding.vercel.app/coffee')
            },
            {
                path: "/addcoffee",
                element: <Addcoffy></Addcoffy>,
            },
            {
                path: "/moredetails/:id",
                element: <Moredetails></Moredetails>,
                loader: ({ params }) => fetch(`https://coffyshop-backend-pp6jslwjl-sudiptacoding.vercel.app/coffee/${params.id}`)
            },
            {
                path: "/productupded/:id",
                element: <ProductUpded></ProductUpded>,
                loader: ({ params }) => fetch(`https://coffyshop-backend-pp6jslwjl-sudiptacoding.vercel.app/coffee/${params.id}`)
            },
        ],
    },
]);
export default router