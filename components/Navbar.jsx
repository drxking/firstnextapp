import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between  px-20 py-5 border-b border-gray-700">
      <Link href="/" >NEXT.js</Link>
        <ul className="flex gap-10">
          <Link href="/" >Home</Link>
          <li>Contact</li>
          <li>Services</li>
          <Link href="/about">About</Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
