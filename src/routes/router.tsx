import { createBrowserRouter } from "react-router-dom";

import Home from '../pages/Home';
import App from '../App';
import ProductDetail from "../pages/ProductDetail";
import CartPage from "../pages/CartPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/product/:productId",
                element: <ProductDetail />,
            },
            {
                path: "/cart",
                element: <CartPage />,
            },

        ],
    },
]);

export default router