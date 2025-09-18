import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Register user
  const register = async (userData) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      if (res.ok) {
        setUser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/home");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Register error:", error);
    }
  };

  // Login user
  const login = async (credentials) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await res.json();
      if (res.ok) {
        setUser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/home");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/register");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
