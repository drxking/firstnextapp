import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="flex items-center justify-evenly bg-black border-t border-gray-700">
        <div className="left">
          <ul className="flex flex-col gap-2">
          <Link href="/" >Home</Link>
          <li>Contact</li>
          <li>Services</li>
          <Link href="/about">About</Link>
          </ul>
        </div>
        <div className="center">
          <ul className="flex flex-col gap-2">
          <Link href="/" >Home</Link>
          <li>Contact</li>
          <li>Services</li>
          <Link href="/about">About</Link>
          </ul>
        </div>
        <div className="right">
          <ul className="flex flex-col gap-2">
          <Link href="/" >Home</Link>
          <li>Contact</li>
          <li>Services</li>
          <Link href="/about">About</Link>
          </ul>
        </div>
        
      </footer>
    </>
  );
};

export default Footer;
