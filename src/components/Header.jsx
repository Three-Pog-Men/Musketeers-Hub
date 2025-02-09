import React from "react";
import { FaSearch } from "react-icons/fa";
import "../assets/styles/css/header.css";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white flex justify-between items-center p-4 border-b border-gray-700">
      <div className="text-yellow-400 text-3xl font-bold">Three musketeer</div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="flex items-center bg-gray-800 rounded-lg px-3 py-1">
        <input 
          type="text" 
          placeholder="Search" 
          className="bg-transparent text-gray-300 outline-none placeholder-gray-500 px-2" 
        />
        <button className="text-gray-400 hover:text-[var(--main-color)]">
          <FaSearch />
        </button>
      </div>
    </header>
  );
};

export default Header;
