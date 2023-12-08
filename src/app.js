import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "../component/Header";
import Body from "../component/Body";
import About from "../component/About";
import Contact from "../component/Contact";
import Glocessary from "../component/Glocessary";
import Cart from "../component/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "../component/Error";
import RestaurantMenu from "../component/RestaurantMenu";
import { Provider } from "react-redux";
import Store from "../utils/Store";
import UserContext from "../utils/UserContext";

// import Glocessary from "../component/Glocessary";

// const Glocessary = lazy(() => import("../component/Glocessary"));
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "sahil raut",
    email: "sahilgraut@gmail.com",
  });
  return (
    <Provider store={Store}>
      <div className="appLayout">
        <UserContext.Provider
          value={{
            user: user,
          }}
        >
          <Header />
        </UserContext.Provider>
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Body
            user={{
              name: "sahil Raut",
              email: "sahilgraut@gmail.com",
            }}
          />
        ),
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
        path: "/restaurant/:resID",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      // {
      //   path: "/glocessary",
      //   element: (
      //     <Suspense>
      //       <Glocessary />
      //     </Suspense>
      //   ),
      // },
    ],
    errorElement: <Error />,
  },
]);
//createRoot use to assigns a root
const root = ReactDOM.createRoot(document.getElementById("root"));

// render can replace element if the any element is already exist insde div
root.render(<RouterProvider router={appRouter} />);
