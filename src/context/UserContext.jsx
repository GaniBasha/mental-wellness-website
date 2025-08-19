import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check token on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ token }); // <-- temporarily set user with token
      // Optional: fetch user info from backend if you have /api/auth/me route
      // axios.get("http://localhost:5000/api/auth/me", { headers: { Authorization: token } })
      //   .then(res => setUser(res.data.user))
      //   .catch(() => localStorage.removeItem("token"));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
