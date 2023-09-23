import { useState, useEffect } from "react";
import { LOGO_URL } from "../../Utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../Utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  //this use effect called everytime after render of the component
  // useEffect() second argument it's take a dependency array, so it's dependency array changes of it's behavior of it's render

  // if no dependency array => useEffect is called every render
  // if dependency array is empty = [] => useEffect is called on initial render(just once)
  // if dependency array is [btnNameReact] => called everytime btnNameReact is updated
  useEffect(() => {}, [btnNameReact]);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-yellow-50 lg:bg-gray-50">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL}></img>
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
