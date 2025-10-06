import React, { lazy, Suspense, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import Cart from "./components/Cart"

import UserContext from "./utils/UserContext";
import ThemeContext from "./utils/ThemeContext";
// import Grocery from "./components/Grocery"

import {Provider} from "react-redux"
import appStore from "./utils/appStore";

const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  const [userName, setUserName] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const data = {
      name: "Akhilesh R M",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}> {/* Redux */}
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}> {/* Context API */}
      <div className="app">
        <UserContext.Provider value={{ loggedInUser: "Madhyastha" }}>
          <Header />
        </UserContext.Provider>
        <ThemeContext.Provider value={{ theme: darkMode, setDarkMode }}>
          <Outlet />
        </ThemeContext.Provider>
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
