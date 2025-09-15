import React, {lazy, Suspense} from "react"
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
// import Grocery from "./components/Grocery"

const Grocery = lazy(() => import("./components/Grocery"))

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/",
        element:<Main/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>,
      },
      {
        path:"/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
      }
    ],
    errorElement: <Error />,
  },
]);
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
