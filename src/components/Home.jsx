import React from "react";
import chocolateBrownie from "../assets/chocolate-brownie.jpg";
import margritaPizza from "../assets/margherita-pizza.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${margritaPizza})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center p-5 bg-transparent">
        <h1 className="text-2xl text-white font-bold">
          mojo meals
        </h1>
        <div>
          <Link to="/login" className="text-white mr-4 hover:underline">
            Login
          </Link>
          <Link to="/signup" className="text-white hover:underline">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <h1 className="text-7xl text-white font-bold">
          mojo meals
        </h1>
      </div>
    </div>
  );
};

export default Home;
