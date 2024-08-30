import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0">

        {/* Logo and Social Media */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <img src="/path-to-your-logo.png" alt="CineMates Logo" className="h-6 w-6 mr-2" />
            <h1 className="text-xl font-bold">CineMates</h1>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Support Links */}
        <div className="flex flex-col items-start">
          <h2 className="text-sm font-semibold mb-2">Support</h2>
          <a href="#" className="text-white text-sm hover:text-gray-400">Contact Us</a>
          <a href="#" className="text-white text-sm hover:text-gray-400">FAQ</a>
        </div>

        {/* CineMates Links */}
        <div className="flex flex-col items-start">
          <h2 className="text-sm font-semibold mb-2">CineMates</h2>
          <Link to="/about_us" className="text-white text-sm hover:text-gray-400">About Us</Link>
          <Link to="/about_cinemates" className="text-white text-sm hover:text-gray-400">About CineMates</Link>
        </div>

        {/* Newsletter Signup */}
        <div className="flex flex-col items-start w-full lg:w-auto">
          <h2 className="text-sm font-semibold mb-2">Stay Connected</h2>
          <form className="flex w-full">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 rounded-l-lg text-black w-full lg:w-auto"
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded-r-lg hover:bg-red-600 w-full lg:w-auto"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;