import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-purple-600 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/">Mental Wellness</Link>
      </div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-200">Home</Link>
        <Link to="/blog" className="hover:text-gray-200">Blog</Link>
        <Link to="/videos" className="hover:text-gray-200">Videos</Link>
        {!token ? (
          <>
            <Link to="/login" className="hover:text-gray-200">Login</Link>
            <Link to="/register" className="hover:text-gray-200">Register</Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="hover:text-gray-200 font-medium"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
