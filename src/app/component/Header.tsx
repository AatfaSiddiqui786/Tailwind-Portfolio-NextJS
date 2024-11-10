'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import logo from "../../public/images/IQ-logo1.png";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { GoProjectSymlink } from "react-icons/go";
import { FcServices } from "react-icons/fc";
import {  FaFilePdf } from 'react-icons/fa';


 const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
 
    <div>
      <header className="text-white body-font bg-black">
        <div className="container mx-auto flex justify-between p-4 md:flex-row items-center">
          <div id="logo">
            <Image src={"/pink.png"} alt="logo" width={120} height={120} />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex text-xl font-bold transition space-x-5 items-center">

            <Link href="/" className="hover:text-pink-700">Home</Link>
            <Link href="/about" className="hover:text-pink-700">About</Link>    
            <Link href="/Project" className="hover:text-pink-700">Projects</Link>
            <Link href="/Contact" className="hover:text-pink-700">Contact</Link>
            
           
      
            
           
            <Link href="cv.png" target="_blank" rel="noopener noreferrer" className="hover:text-pink-700">
              <FaFilePdf className="w-5 h-5" />
            </Link>
          </nav>

          
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {/* Hamburger icon */}
            <svg
              className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16m-7 6h7" />
            </svg>

            {/* Close icon */}
            <svg
              className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black text-white flex flex-col items-start ml-3 space-y-2 py-2">
            <Link href="/" className="p-2 hover:text-pink-700 flex items-center" onClick={toggleMenu}> 
              <IoHomeOutline className="mr-2" />  
              Home
            </Link>
            <Link href="/about" className="p-2 hover:text-pink-700 flex items-center" onClick={toggleMenu}>
              <MdOutlineRoundaboutRight className="mr-2" /> About
            </Link>
            <Link href="/project" className="hover:text-pink-700 p-2 flex items-center" onClick={toggleMenu}>
              <GoProjectSymlink className="mr-2" /> Projects
            </Link>
            <Link href="/service" className="hover:text-pink-700 p-2 flex items-center" onClick={toggleMenu}>
              <FcServices className="mr-2" /> Services
            </Link>
            <Link href="/contact" className="hover:text-pink-700 p-2 flex items-center" onClick={toggleMenu}>
              <IoMdContact className="mr-2" /> Contact
            </Link>
            
            <Link href="/images/cv/mycv.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-pink-700 p-2 flex items-center" onClick={toggleMenu}>
              <FaFilePdf className="mr-2" />Mycv
            </Link>
            
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
