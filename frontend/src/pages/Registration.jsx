import { useState, useContext } from "react";
import "../css/registration.css";
import AuthContext from "../context/AuthContext";
import registration from "../assets/registration.png";

export default function Registration() {
    const { register } = useContext(AuthContext);
    const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    register(form);
    // Here you can call API to register
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img
          src={registration}
          alt="Register"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/20"></div> */}
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center text-white formDiv">
        <div className="w-full max-w-md p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Enter your name"
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 "
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) => setForm({...form, email:e.target.value})}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 "
              />
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={(e) => setForm({...form, password:e.target.value})}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 "
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full  hover:#5876b5 text-#0c1018 font-semibold py-3 rounded-lg transition duration-300"
            >
              Register
            </button>
            <button
              type="submit"
              className="w-full  hover:#5876b5 text-#0c1018 font-semibold py-3 rounded-lg transition duration-300"
            >
              Signin
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}









// import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { registerUser } from "../services/authService";
// import { AuthContext } from "../context/AuthContext";
// import registration from "../assets/registration.png";

// export default function Registration() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const { login } = useContext(AuthContext);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = await registerUser({ name, email, password });
//       login(data.token, data.user); // Save token + user in context
//       navigate("/"); // Redirect to home page
//     } catch (err) {
//       setError(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row">
//       {/* Left Side - Image */}
//       <div className="w-full md:w-1/2 h-64 md:h-auto relative">
//         <img
//           src={registration}
//           alt="Register"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40"></div>
//       </div>

//       {/* Right Side - Form */}
//       <div className="w-full md:w-1/2 flex items-center justify-center text-white">
//         <div className="w-full max-w-md p-8">
//           <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>

//           {error && <p className="text-red-500 text-center">{error}</p>}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               placeholder="Enter your name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700"
//             />
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700"
//             />
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700"
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
//             >
//               Register
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
