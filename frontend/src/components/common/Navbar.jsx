import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LuSearch } from "react-icons/lu";
import { BsHandbag } from "react-icons/bs";
import { useCart } from '../../contexts/CartContext';



export default function Navbar() {
  

  const navItems = ['HOME', 'BRACELET', 'BANGLE', 'NEW ARRIVALS', 'ALL PRODUCTS'];
  const { cartItems } = useCart();

  console.log("navbar:", cartItems);

  const getPath = (item) => {
    if (item === 'HOME') return '/';
    if (item === 'ALL PRODUCTS') return '/products';
    if (item === 'NEW ARRIVALS') return '/new-arrivals';
    return `/category/${item.toLowerCase()}`;
  };

  return (
    <>
      {/* 🔝 TOP HEADER */}
      <header className="sticky top-0 z-50 w-full shadow-md">

        {/* Announcement */}
        <div className="bg-black text-white text-xs text-center py-2">
          Save Min 50% UPTO 300 on all orders and get free shipping
        </div>

        {/* Main Navbar */}
        <div className="flex items-center justify-between px-4 h-18 bg-white">

          {/* Search Icon */}
          <div className="md:hidden">
            <LuSearch size={22}/>
          </div>

          {/* Logo */}
          <Link to="/" className="font-bold text-lg">
            Omkar
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <li key={item}>
                <Link to={getPath(item)}>{item}</Link>
              </li>
            ))}
          </ul>

          {/* Right Side (Cart) */}
          <div className="flex items-center gap-4 relative">
            <Link to="/bag"><BsHandbag size={22}/></Link>

            <div className='absolute z-50 bg-red-500 text-white text-[10px] font-semibold rounded-full h-3.5 w-3.5 -right-1 -bottom-1 flex items-center justify-center'>
              <p>{cartItems.length}</p>
            </div>
          </div>
        </div>
      </header>

      

      
      
    </>
  );
}