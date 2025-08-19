// src/pages/Home.jsx
import React from "react";
import homeBg from "../assets/home-bg.jpg"; // ✅ Importing directly

const Home = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${homeBg})`, // ✅ Use imported image
      }}
    >
      <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
        "The happiest people don’t have the best of everything; they make the best of everything."
      </h1>
    </div>
  );
};

export default Home;
