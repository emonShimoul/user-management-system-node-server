import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route Not Found</h2>,
    children: [
      {
        path: "/",
        element: <h2>Home</h2>,
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
