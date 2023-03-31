import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/layout";
import { About, Login, User } from "./pages";

// using the createBrowserRouter function to create a router
const router = createBrowserRouter([
  {
    // connecting the Layout component to the router
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
