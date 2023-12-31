import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/login"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/acceso", element: < Login /> },
    ],
  },
 
]);