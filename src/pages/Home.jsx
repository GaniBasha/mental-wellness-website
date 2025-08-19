// src/pages/Home.jsx
import React from "react";

const Home = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/home-bg.jpg)`,
      }}
    >
      <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
        "The happiest people don’t have the best of everything; they make the best of everything."
      </h1>
    </div>
  );
};

export default Home;
