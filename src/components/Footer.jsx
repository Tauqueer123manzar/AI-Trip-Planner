import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-10'>
      <div className='container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left'>
        {/* Brand Section */}
        <div>
          <h2 className='text-3xl font-bold'>AI Trip Planner</h2>
          <p className='text-gray-400 mt-3 leading-relaxed'>Plan smarter, travel better with AI-powered itineraries and personalized recommendations.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
          <ul className='text-gray-400 space-y-3'>
            <li className='hover:text-blue-400 transition duration-300 cursor-pointer'>Home</li>
            <li className='hover:text-blue-400 transition duration-300 cursor-pointer'>About</li>
            <li className='hover:text-blue-400 transition duration-300 cursor-pointer'>Destinations</li>
            <li className='hover:text-blue-400 transition duration-300 cursor-pointer'>Contact</li>
          </ul>
        </div>

        {/* Social Media & Newsletter */}
        <div>
          <h3 className='text-xl font-semibold mb-4'>Follow Us</h3>
          <div className='flex justify-center md:justify-start space-x-4'>
            <FaFacebookF className='text-xl text-gray-400 hover:text-blue-500 transition duration-300 cursor-pointer'/>
            <FaTwitter className='text-xl text-gray-400 hover:text-blue-400 transition duration-300 cursor-pointer'/>
            <FaInstagram className='text-xl text-gray-400 hover:text-pink-500 transition duration-300 cursor-pointer'/>
            <FaLinkedin className='text-xl text-gray-400 hover:text-blue-600 transition duration-300 cursor-pointer'/>
          </div>

          <h3 className='text-xl font-semibold mt-6'>Subscribe</h3>
          <div className='mt-3  flex items-center justify-center md:justify-start md:w-2/3'>
            <input
              type='email'
              placeholder='Enter your email'
              className='bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none w-2/3'
            />
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md cursor-pointer transition duration-300'
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className='text-center text-gray-500 mt-10 border-t border-gray-700 pt-4'>
        &copy; 2025 AI Trip Planner. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
