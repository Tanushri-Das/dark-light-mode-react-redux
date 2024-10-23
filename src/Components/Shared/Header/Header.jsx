import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../../redux/features/theme/themeSlice";
import { FaBars, FaXmark } from "react-icons/fa6";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  const handleThemeToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <nav
      className={`border-b-[2px] ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="px-8 lg:px-28 py-4 flex items-center justify-between">
        <div className="text-lg font-bold md:flex-grow-0">
          <Link to="/">
            <div className="flex justify-center items-center">
              <h1 className="text-3xl font-bold italic tracking-wide transition-all duration-300 ease-in-out hover:scale-105">
                Mode
              </h1>
            </div>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="hidden md:block ml-auto">
            <div className="flex items-center justify-center space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-bold"
                    : "text-xl text-[#737373] font-normal"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-bold"
                    : "text-xl text-[#737373] font-normal"
                }
              >
                Login
              </NavLink>
              <button
                onClick={handleThemeToggle}
                className="ml-5 px-4 py-2 flex items-center space-x-2 border rounded"
              >
                {darkMode ? (
                  <>
                    <FaRegMoon className="text-xl" />
                  </>
                ) : (
                  <>
                    <IoSunnyOutline className="text-xl" />
                  </>
                )}
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <FaBars onClick={toggleDrawer} className="h-8 w-8 cursor-pointer" />
          </div>
        </div>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 md:hidden"
              onClick={closeDrawer}
            ></div>
            <div
              className={`fixed inset-y-0 left-0 w-64 bg-white z-50 transform transition-transform duration-300 md:hidden ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="p-5">
                <div className="flex justify-end mb-6">
                  <FaXmark
                    onClick={closeDrawer}
                    className="text-black h-6 w-6 cursor-pointer"
                  />
                </div>
                <NavLink
                  to="/"
                  onClick={closeDrawer}
                  className={({ isActive }) =>
                    isActive
                      ? "text-xl font-bold mb-5 block"
                      : "text-xl text-[#737373] font-normal mb-5 block"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/login"
                  onClick={closeDrawer}
                  className={({ isActive }) =>
                    isActive
                      ? "text-xl font-bold block"
                      : "text-xl text-[#737373] font-normal block"
                  }
                >
                  Login
                </NavLink>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
