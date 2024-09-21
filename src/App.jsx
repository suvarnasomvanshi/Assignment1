import React, { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContext } from "./ContextProvider";
import Home from "./Pages/Home";
import AuthForm from "./components/Form";

const App = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const publicRoutes = createBrowserRouter([
    {
      path: "/*",
      element: <AuthForm setIsAuthenticated={setIsAuthenticated} />,
    },
  ]);
  const privateRoutes = createBrowserRouter([
    {
      path: "/home",
      element: <Home setIsAuthenticated={setIsAuthenticated} />,
    },
  ]);
  return (
    <>
      <RouterProvider router={isAuthenticated ? privateRoutes : publicRoutes} />
    </>
  );
};

export default App;
