'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import HamburgerBtn from '@/app/assets/hamburger-btn.svg';
import CancelBtn from '@/app/assets/cancel-btn.svg';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50">
      <div className="flex justify-between bg-white drop-shadow-lg items-center px-4 py-3 lg:px-16 lg:py-6">
        <Link href="" className="font-extrabold text-lg lg:text-2xl">Anziboo</Link>
        {/* Desktop Menu */}
        <div className="nav-items hidden w-1/3 lg:block lg:flex justify-between font-bold">
          <div>
            <Link href="">Home</Link>
          </div>
          <div>
            <Link href="#whatwedo">What we do</Link>
          </div>
          <div>
            <Link href="#products">Products</Link>
          </div>
          <div>
            <Link href="#project">Project</Link>
          </div>
          <div>
            <Link href="#whoweare">Who we are</Link>
          </div>
          <div>
            <Link href="#contact">Contact</Link>
          </div>
        </div>

        {/* Hamburger Button */}
        <button
          className="text-white text-2xl lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Hamburger Icon */}
          {
            isOpen ?
              <Image alt="cancel button" className="w-12" src={CancelBtn} /> :
              <Image alt="humburger button" className="w-12" src={HamburgerBtn} />
          }
        </button>
      </div>
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="flex flex-col space-y-4 font-bold text-black bg-white py-3 text-center absolute w-screen lg:hidden">
          <Link href="#home" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#whatwedo" onClick={() => setIsOpen(false)}>What we do</Link>
          <Link href="#products" onClick={() => setIsOpen(false)}>Products</Link>
          <Link href="#project" onClick={() => setIsOpen(false)}>Project</Link>
          <Link href="#whoweare" onClick={() => setIsOpen(false)}>Who we are</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  )
}
