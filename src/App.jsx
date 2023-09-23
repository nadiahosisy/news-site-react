import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shared from "./components/Shared";
import { Home, About } from "./pages";

const routes = [
  {
    path: "/",
    element: <Shared />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
];

const App = () => {
  const router = createBrowserRouter(routes);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
