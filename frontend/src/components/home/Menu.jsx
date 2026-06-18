import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FiHome } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";


const Menu = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navItems = [
    "HOME",
    "BRACELET",
    "BANGLE",
    "NEW ARRIVALS",
    "ALL PRODUCTS",
  ];

  const getPath = (item) => {
    if (item === "HOME") return "/";
    if (item === "ALL PRODUCTS") return "/products";
    if (item === "NEW ARRIVALS") return "/new-arrivals";
    return `/category/${item.toLowerCase()}`;
  };

  return (
     <>
     <div
        className={`fixed inset-0 bg-white font-semibold text-lg z-50 transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between">
          <span className="font-bold">Menu</span>
          <button onClick={toggleMobileMenu}>✕</button>
        </div>

        <ul className="flex flex-col items-center gap-6 mt-15">
          {navItems.map((item) => (
            <li key={item}>
              <Link to={getPath(item)} onClick={closeMobileMenu}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-full w-full p-0 m-0">
        <div className="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around items-center h-15 md:hidden z-50">
          <Link to="/" className="flex flex-col items-center text-xs">
            <FiHome size={22} />
            <span className="font-semibold text-[0.9rem]">Home</span>
          </Link>

          <Link to="/orders" className="flex flex-col items-center text-xs">
            <LuUser size={22} />
            <span className="font-semibold text-[0.9rem]">Orders</span>
          </Link>

          <button
            onClick={toggleMobileMenu}
            className="flex flex-col items-center text-xs"
          >
            <RxHamburgerMenu size={22} />
            <span className="font-semibold text-[0.9rem]">Browse</span>
          </button>
        </div>
      </div> 
     </>
  )
}

export default Menu