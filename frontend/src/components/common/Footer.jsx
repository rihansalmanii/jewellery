import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <footer className="w-full bg-black font-sans text-white">
      {/* Upper Content Section */}
      <div className="mx-auto max-w-7xl px-6 py-10">
        
        {/* Brand Header with Logo Graphic */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-12 w-12 overflow-hidden rounded-full bg-white/10 p-1 flex items-center justify-center">
            {/* Replace src with your actual logo asset path */}
            <span className="text-[10px] font-bold tracking-tighter text-gray-400 uppercase">Logo</span>
          </div>
          <h2 className="text-2xl font-bold tracking-wide">Omkar Jeweller</h2>
        </div>

        {/* Brand Bio Narrative */}
        <p className="max-w-xl text-sm leading-relaxed text-gray-300 mb-6 font-medium">
          Omkar Jeweller offers elegant women's jewellery crafted with fine quality and timeless designs, 
          perfect to add charm, confidence, and a graceful touch to every look and occasion.
        </p>

        {/* Social Link Utilities */}
        <div className="flex items-center gap-6 mb-8 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white hover:text-gray-400 transition-colors outline-none" aria-label="Facebook">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.11-1 .5-1H15V2h-3c-2.43 0-3 1.23-3 3v3z"/>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white hover:text-gray-400 transition-colors outline-none" aria-label="Instagram">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
        </div>

        {/* Collapsible/Static Contact Drawer Segment */}
        <div className="border-b border-gray-800 pb-8">
          <button className="flex items-center gap-2 text-sm font-bold tracking-wider uppercase text-white mb-4 focus:outline-none">
            CONTACT US 
            
          </button>
          
          <div className="flex flex-col space-y-2.5 text-sm text-gray-300 font-medium">
            <p><span className="text-white font-bold">Call:</span> +91 - 9876543210</p>
            <p><span className="text-white font-bold">WhatsApp:</span> +91 - 9876543210</p>
            <p><span className="text-white font-bold">Customer Support Time:</span> 24/7</p>
            <p><span className="text-white font-bold">Email:</span> abc@120@gmail.com</p>
            <p className="leading-relaxed max-w-lg">
              <span className="text-white font-bold">Address:</span> C-79 198 DB GUTTA ROAD, ARAMBAD, PAHARGANJ, Delhi, Central Delhi, 110055
            </p>
          </div>
        </div>

        {/* Middle Core Policy Navigation Links Grid */}
        <div className="grid grid-cols-2 gap-y-4 py-8 text-sm font-bold tracking-wide border-b border-gray-800">
          <Link to="/about-us" className="hover:text-gray-400 transition-colors">About Us</Link>
          <Link to="/privacy-policy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
          <Link to="/return-policy" className="hover:text-gray-400 transition-colors">Return Policy</Link>
          <Link to="/shipping-policy" className="hover:text-gray-400 transition-colors">Shipping Policy</Link>
          <Link to="/terms-and-conditions" className="hover:text-gray-400 transition-colors">Terms and condition</Link>
        </div>

        {/* Bottom Horizontal SEO Meta Links Tag Container */}
        <div className="pt-8 text-[11px] font-bold tracking-widest text-gray-400 uppercase leading-loose">
          <p className="mb-2 text-xs text-white tracking-wider normal-case font-bold">Most searched on store</p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <Link to="/products" className="hover:text-white transition-colors">TOP PRODUCTS</Link> <span>|</span>
            <Link to="/category/necklace" className="hover:text-white transition-colors">NECKLACE</Link> <span>|</span>
            <Link to="/category/earrings" className="hover:text-white transition-colors">EARRINGS</Link> <span>|</span>
            <Link to="/new-ins" className="hover:text-white transition-colors">NEW INS</Link> <span>|</span>
            <Link to="/category/bangle" className="hover:text-white transition-colors">BANGLE</Link> <span>|</span>
            <Link to="/category/bracelet" className="hover:text-white transition-colors">BRACELET</Link> <span>|</span>
            <Link to="/deals" className="hover:text-white transition-colors">AMAZING DEALS</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
