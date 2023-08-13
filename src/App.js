import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./componenets/Header";
import Body from "./componenets/Body";

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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
