import React from "react";
import { Link } from "react-router-dom";
import {
  FaGoogle,
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";
import { useSelector } from "react-redux";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div
      className={`p-10 ${
        darkMode ? "bg-[#737373] text-white" : "bg-[#F5F5F8] text-black"
      }`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="flex flex-col items-center md:items-start mb-3">
          <Link to="/">
            <div className="flex justify-center items-center">
              <h1 className="text-3xl ms-1 font-bold italic text-orange-500 tracking-wide transition-all duration-300 ease-in-out hover:scale-105">
                Groco
              </h1>
            </div>
          </Link>
          <p className="w-full max-w-[300px] text-[16px] font-normal my-4">
            Groco brings fresh groceries to your doorstep with ease and top
            quality.
          </p>
          <div className="flex space-x-3 mb-8">
            <button className="flex justify-center items-center border border-gray-300 bg-[#F5F5F8] rounded-full w-12 h-12">
              <FaGoogle className="text-black text-2xl" />
            </button>
            <button
              type="submit"
              className="flex justify-center items-center border border-gray-300 bg-[#F5F5F8] rounded-full w-12 h-12"
            >
              <FaLinkedinIn className="text-black text-2xl" />
            </button>
            <button
              type="submit"
              className="flex justify-center items-center border border-gray-300 bg-[#F5F5F8] rounded-full w-12 h-12"
            >
              <FaFacebook className="text-black text-2xl" />
            </button>
            <button
              type="submit"
              className="flex justify-center items-center border border-gray-300 bg-[#F5F5F8] rounded-full w-12 h-12"
            >
              <FaInstagram className="text-black text-2xl" />
            </button>
          </div>
        </div>
        <div className="mb-10 sm:mb-10">
          <h6 className="text-xl font-semibold mb-8 text-center">About</h6>
          <Link
            href="/"
            className="text-[16px] font-normal text-center block mb-4"
          >
            Home
          </Link>
          <Link
            href="/"
            className="text-[16px] font-normal text-center block mb-4"
          >
            Service
          </Link>
          <Link href="/" className="text-[16px] font-normal text-center block">
            Contact
          </Link>
        </div>
        <div className="mb-10">
          <h6 className="text-xl font-semibold mb-8 text-center">Company</h6>
          <Link
            href="/"
            className="text-[16px] font-normal text-center block mb-4"
          >
            About Us
          </Link>
          <Link href="/" className="text-[16px] font-normal text-center block">
            Contact
          </Link>
        </div>
        <div className="mb-10">
          <h6 className="text-xl font-semibold mb-8 text-center">Support</h6>
          <Link
            href="/"
            className="text-[16px] font-normal text-center block mb-4"
          >
            Support Center
          </Link>
          <Link
            href="/"
            className="text-[16px] font-normal text-center block mb-4"
          >
            Feedback
          </Link>
          <Link href="/" className="text-[16px] font-normal text-center block">
            Accessibility
          </Link>
        </div>
      </div>
      <hr className="w-full border-t-2 border-gray-400 mb-4" />
      <div className="mt-8 text-center font-medium text-[16px]">
        © {currentYear} grocery shopping website. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
