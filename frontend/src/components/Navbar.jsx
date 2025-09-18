import { useState } from "react";
import { FiShoppingCart, FiMoreVertical } from "react-icons/fi";

export default function Navbar() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Left - Logo */}
        <div className="text-2xl font-bold text-gray-800">ZyloMart</div>

        {/* Center - Search Box */}
        <div className="flex-1 mx-6">
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Right - Menu */}
        <div className="flex items-center gap-6 relative">
          {/* Login Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLoginOpen(true)}
            onMouseLeave={() => setLoginOpen(false)}
          >
            <button className="text-gray-700 hover:text-blue-600">Login</button>
            {loginOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg border rounded-md py-2">
                <a
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  href="#"
                >
                  New Customer? <span className="text-blue-600">Signup</span>
                </a>
                <a
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  href="#"
                >
                  My Profile
                </a>
                <a
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  href="#"
                >
                  Orders
                </a>
                <a
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  href="#"
                >
                  Wishlist
                </a>
                <a
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  href="#"
                >
                  Rewards
                </a>
              </div>
            )}
          </div>

          {/* Cart */}
          <div className="flex items-center gap-1 text-gray-700 hover:text-blue-600 cursor-pointer">
            <FiShoppingCart className="text-xl" />
            <span>Cart</span>
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
                <a
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  href="#"
                >
                  Notifications
                </a>
                <a
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  href="#"
                >
                  24 x 7 Customer Care
                </a>
                <a
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  href="#"
                >
                  Download App
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
