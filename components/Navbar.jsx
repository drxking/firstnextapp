import Link from "next/link";
import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between  px-20 py-5 ">
      <Link href="/" ><Image src="/next.svg" width="100" height="0" className="invert"></Image></Link>
        <ul className="flex gap-10">
          <Link href="/" >Home</Link>
          <Link href="/contact" >Contact</Link>
          <Link href="/services" >Services</Link>
          <Link href="/about">About</Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
