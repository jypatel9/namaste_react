import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./componenets/Header";
import Body from "./componenets/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./componenets/About";
import Contact from "./componenets/Contact";
import Error from "./componenets/Error";
import RestaurantMenu from "./componenets/RestaurantMenu";
// import Grocery from "./componenets/Grocery";

/** 

*Header
   *Logo
   *Nav Item

*Body
   * - search
   * - RestaurantContainer
   *  - RestaurantCard
   *    - Img
   *    - Name of res, star rating, cuisines, delivery-time
   
*Footer
     * - copyright
     * - links
     * - Address
     * - Contact

*/

/* 
  props :- props is nothing but just the properties which is pass to in the component for rendiering dynamically
  also known as props is nothing just the funstions arguments

  syntax : fun_name = (props) => {h1{{props.hello}}}

React using something as Reconciliation Algorithm it's also known as (React Fiber)

what is virtual dom = virtual dom is representation of the actual dom.




*/

const Grocery = lazy(() => import("./componenets/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />

      {/** this is how we write comment in jsx
       *
       * if path is = /
       * <Body />
       *
       * if path is = /about
       * <About />
       *
       * if path is = /contact
       * <Contact />
       *
       */}
      {}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
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
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
