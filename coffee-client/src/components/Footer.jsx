import React from 'react';
import logo1 from '../../public/images/more/logo1.png'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[url('/footer-bg.png')] bg-cover bg-center text-gray-800 py-12 px-4 md:px-20 font-serif bg-[#F4F3F0]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Left Section */}
        <div className="flex-1">
          <div className="mb-4">
            <img src={logo1} alt="logo" className="h-12" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Espresso Emporium</h2>
          <p className="text-sm mb-4">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex space-x-4 text-xl">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
          <div className="mt-6 space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>+88 01333 333 333</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <span>info@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <span>72, Wall street, King Road, Dhaka</span>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex-1 max-w-md">
          <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
            <textarea
              placeholder="Message"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none h-24"
            />
            <button
              type="submit"
              className="px-6 py-2 border border-gray-600 rounded hover:bg-gray-100 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
