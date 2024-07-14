import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between px-20 py-5 border-b border-gray-700">
        <h1>NEXT.js</h1>
        <ul className="flex gap-10">
          <li>Home</li>
          <li>Contact</li>
          <li>Services</li>
          <li>About</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
