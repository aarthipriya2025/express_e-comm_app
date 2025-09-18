import { useState } from "react";
import loginImg from "../assets/registration.png"; // you can use a different image

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Data:", { email, password });
    // Call API for login here
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Image */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto">
        <img
          src={loginImg}
          alt="Login"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/40"></div> */}
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center text-white formDiv">
        <div className="w-full max-w-md p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2"
              />
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full  hover:#5876b5 text-#0c1018 font-semibold py-3 rounded-lg transition duration-300"
            >
              Login
            </button>
            <button
              type="submit"
              className="w-full  hover:#5876b5 text-#0c1018 font-semibold py-3 rounded-lg transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
