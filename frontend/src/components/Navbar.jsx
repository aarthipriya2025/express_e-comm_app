import { useState } from "react";
import "../css/navbar.css";
import { FiShoppingCart, FiMoreVertical } from "react-icons/fi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Navbar() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-3">
        {/* Left - Logo */}
        <div className="text-3xl font-black md:font-extrabold text-[#3D517C] logo">
          ZyloMart
        </div>

        {/* Center - Search Box */}
        <div className="hidden sm:flex flex-1 justify-center">
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="w-full md:w-[500px] sm:w-[70%] px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Right - Menu */}
        <div className="flex items-center gap-9 relative">
          {/* Login Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 text-gray-700  border-none text-xl font-black md:font-extrabold"
              onClick={() => setLoginOpen(!loginOpen)} // toggle open/close
            >
              Login
              {loginOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {loginOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg border rounded-md py-2">
                <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">
                  New Customer? <span className="text-blue-600">Signup</span>
                </a>
                <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">
                  My Profile
                </a>
                <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">
                  Orders
                </a>
                <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">
                  Wishlist
                </a>
                <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">
                  Rewards
                </a>
              </div>
            )}
          </div>

          <div className="flex items-center gap-1 text-gray-700 hover:text- cursor-pointer">
            <span className="text-xl font-black md:font-extrabold">Shop</span>
          </div>

          {/* Cart */}
          <div className="flex items-center gap-1 text-gray-700 hover:text-#0c1018 cursor-pointer">
            <FiShoppingCart className="text-xl" />
            <span className="text-xl font-black md:font-extrabold">Cart</span>
          </div>

          {/* More Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button className="flex items-center text-gray-700 hover:text-blue-600">
              <FiMoreVertical className="text-xl" />
            </button>
            {moreOpen && (
              <div className="absolute top-full right-0 mt-2 w-52 bg-white shadow-lg border rounded-md py-2">
                <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">
                  Notifications
                </a>
                <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">
                  24 x 7 Customer Care
                </a>
                <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">
                  Download App
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search - visible below navbar */}
      <div className="sm:hidden px-4 pb-3">
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </nav>
  );
}
