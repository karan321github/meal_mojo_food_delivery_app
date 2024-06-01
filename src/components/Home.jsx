import React, { useContext } from "react";
import chocolateBrownie from "../assets/chocolate-brownie.jpg";
import margritaPizza from "../assets/margherita-pizza.jpg";

import UserProgressContext from "../store/UserProgressContext";

const Home = () => {
  const userCtx = useContext(UserProgressContext);
  const handleLogin = () => {
    userCtx.showLogin();
  };

  const handleSignUp = () => {
    userCtx.showSignUp();
  }
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${margritaPizza})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center p-5 bg-transparent">
        <h1 className="text-2xl text-white font-bold">mojo meals</h1>
        <div className=" mx-20">
          <button
            onClick={handleLogin}
            className="text-white mr-4 hover:underline"
          >
            Login
          </button>
          <button onClick={handleSignUp} className="text-white hover:underline">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <h1 className="text-3xl font-extrabold italic -mt-20 text-white">
          mojo_meals
        </h1>
      </div>
    </div>
  );
};

export default Home;
