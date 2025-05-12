import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate from react-router-dom

const LoginPage = () => {
  const [adminInput, setAdminInput] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = () => {
    if (adminInput === "sumit7065") {
      setIsLoggedIn(true);
      alert("Login successful! Redirecting...");
      setTimeout(() => {
        // Navigate to another page after successful login
        navigate("/dashboard"); // You can change the URL path to the desired page
      }, 2000); // Redirect after 2 seconds delay
    } else {
      alert("Wrong password!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-10 space-y-8 border border-gray-300 mt-20">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-indigo-700 mb-4">Admin Login</h1>
          <p className="text-gray-500 text-sm">Enter your credentials to access the system</p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          <input
            type="password"
            placeholder="Enter Admin Password"
            value={adminInput}
            onChange={(e) => setAdminInput(e.target.value)}
            className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={handleLogin}
            className="w-full py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
          >
            Login
          </button>
        </div>

        {/* Success Message */}
        {isLoggedIn && (
          <div className="text-center text-green-600 font-semibold mt-4">
            <p>Successfully logged in! Redirecting...</p>
          </div>
        )}

        {/* Footer */}
        <div className="text-center text-gray-400 text-sm mt-6">
          <p>&copy; {new Date().getFullYear()} School Management System</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
