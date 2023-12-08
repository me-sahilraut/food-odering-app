import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const IsMenuOpen = useSelector((store) => store.Cart.IsMenuOpen);

    if (!IsMenuOpen) return null;

    return (
        <div className="w-10">
            <ul className=" bg-black text-white">
                {/* <li className="px-2">Online Status: {onlineStatus ? "✅" : "🔴"}</li> */}
                <li className="mx-2">
                    <Link to="/">Home</Link>
                </li>
                <li className="mx-2">
                    <Link to="/about">About Us</Link>
                </li>
                <li className="mx-2">
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li className="mx-2">
                    <Link to="/grocery">Grocery</Link>
                </li>
                {/* <li className="mx-4 font-bold text-xl">
                    <Link to="/cart">Cart - ({cartItems.length} items)</Link>
                </li> */}
                {/* <button
                    className="login"
                    onClick={() => {
                        btnNameReact === "Login"
                            ? setBtnNameReact("Logout")
                            : setBtnNameReact("Login");
                    }}
                >
                    {btnNameReact}
                </button> */}

                {/* <li className="px-4 ">{"hello"}</li> */}
            </ul>
        </div>
    );
}

export default Sidebar