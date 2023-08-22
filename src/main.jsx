import React from "react";
import ReactDOM from "react-dom/client";
import "./style/main.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root, { loader as rootLoader } from "./pages/root.jsx";
import Today from "./pages/today";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        loader: rootLoader,
        children: [
            {
                path: "/today",
                element: <Today />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
