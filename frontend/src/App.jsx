// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import AuthProvider from "./context/AuthProvider.jsx";
// import Registration from "./pages/Registration";
// import Login from "./pages/Signin";
// import Home from "./pages/Home";
// import "./App.css";

// function App() {
//   return (
//     <Router>
//       <AuthProvider>
//         <Routes>
//           {/* Default → Register */}
//           <Route path="/" element={<Registration />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/home" element={<Home />} />

//           {/* Fallback */}
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </AuthProvider>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Registration from "./pages/Registration";
import Login from "./pages/Signin";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";

export default function App() {
  return (
    // <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </AuthProvider>
    // </BrowserRouter>
  );
}
