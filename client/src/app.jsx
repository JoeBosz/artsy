// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Layout from "./layouts/layout";
// import { About, Login, User } from "./pages";

// const router = createBrowserRouter([
//   {
//     element: <Layout />,
//     children: [
//       { path: "/", element: <Login /> },
//       { path: "/about", element: <About /> },
//       { path: "/user", element: <User /> },
//     ],
//   },
// ]);

// export default function App() {
//   return <RouterProvider router={router} />;
// }

import { useState } from "react";
// import Footer from "./components/Footer";
import Home from "./components/home";
import Navigation from "./components/navigation";
import Login from "./pages/loginRegister";

export default function App() {
  const [page, setPage] = useState("Home");
  const displayPage = () => {
    if (page === "Home") {
      return <Home />;
    }
    if (page === "Login") {
      return <Login />;
    }
  };
  return (
    <div>
      <Navigation setPage={setPage} />
      {displayPage()}
      {/* <Footer /> */}
    </div>
  );
}
