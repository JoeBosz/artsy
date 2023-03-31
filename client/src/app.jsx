import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/layout";
import { About, Login, User } from "./pages";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/about", element: <About /> },
      { path: "/user", element: <User /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
