import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route Not Found</h2>,
    children: [
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "/about",
        element: <h2>About</h2>,
      },
      {
        path: "/contact",
        element: <h2>Contact</h2>,
      },
    ],
  },
]);

export default router;
