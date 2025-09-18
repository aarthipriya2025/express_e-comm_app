import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/register"; // adjust if different

// Register user
export const registerUser = async (userData) => {
  const res = await axios.post(`${API_URL}/register`, userData);
  return res.data;
};

// Login user
export const loginUser = async (userData) => {
  const res = await axios.post(`${API_URL}/login`, userData);
  return res.data;
};
