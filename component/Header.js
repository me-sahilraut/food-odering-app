import { useState, useContext, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "./Sidebar";
import { toggleMenu } from "../utils/CartSlice";
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 1024;
  const onlineStatus = useOnlineStatus();

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };


  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  // const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  // Subscribing to the store using a Selector

  const cartItems = useSelector((Store) => Store.Cart.items);

  //console.log(cartItems);

  return width > breakpoint ? (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">

        <ul className="flex p-4 m-4">
          <li className="px-2">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="mx-2">
            <Link to="/" className="hover:underline hover:underline-offset-8 cursor-pointer">Home</Link>
          </li>
          <li className="mx-2">
            <Link to="/about" className="hover:underline hover:underline-offset-8 cursor-pointer">About Us</Link>
          </li>
          <li className="mx-2">
            <Link to="/contact" className="hover:underline hover:underline-offset-8 cursor-pointer">Contact Us</Link>
          </li>
          <li className="mx-2">
            <Link to="/grocery" className="hover:underline hover:underline-offset-8 cursor-pointer">Grocery</Link>
          </li>
          <li className="mx-4 font-bold text-xl">
            <Link to="/cart" className="hover:underline hover:underline-offset-8 cursor-pointer flex"><FaShoppingCart className="w-[1.5rem] h-[1.5rem] my-auto" />- ({cartItems.length} items)</Link>
          </li>
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

          {/* <li className="px-4 ">{"hello"}</li> */}
        </ul>
      </div>
    </div>
  ) : <div className="flex justify-between  shadow-lg bg-green-50">
    <div className="logo-container">
      <img className="w-26 h-27" src={LOGO_URL} />
    </div>
    <div className="flex items-center">

      <img
        onClick={() => toggleMenuHandler()}
        className="mt-3 mx-9 h-10 cursor-pointer"
        alt="menu"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAATlBMVEXz9fQzMzP3+fi2t7YiIiIqKirk5uU/Pz+AgYHn6ej2+PdaWlpwcHAlJSUfHx8ZGBnc3t2UlpXu8O+jpKM2NjbMzMxVVVVOTk4vLi4TExOjM+vzAAABA0lEQVR4nO3bAXKCMBBA0UBrW1BEQRTvf9H2EtudWd67wZ8MhAnZ1gAAAAAAAAAAAAAAAAAAAAAASDD2scbsvrZ9xNpaauM4nD+jnYfMxPEyddGmS2bhcA0P7LrrkFk4/0PhnFnYnqfwwNMzM7Df9ukUa9q3PjXxdv+Jdb+lBsZv+PlbPgAAAFDFGCs7r/XLV6wl+yBqfX3Heq2py9iv8x58ILzPa+YqLo/owL/Ex5JYOLzDA7vunfnfov4a1n8O679LD7AftvrfNAAAAEAN5e+Xlr8jfIB73uXv6teft6g/M1N/7qn+7Fr9+cNWf4YUAAAAAAAAAAAAAAAAAAAAAOCgfgHY3y+u9Hc0OQAAAABJRU5ErkJggg=="
      />
      <Sidebar />
    </div>
  </div>
}




export default Header;
