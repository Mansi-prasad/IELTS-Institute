import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="shadow-md sticky top-0 z-50 bg-blue-50 text-blue-950">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-2xl font-bold ">IELTS Mastery</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 font-medium uppercase">
            <li>
              <a href="#home" className="hover:cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="hover:cursor-pointer">
                Features
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:cursor-pointer">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="hover:cursor-pointer">
                Login
              </a>
            </li>
            <li>
              <a href="#">
                <button className="bg-blue-700 px-4 py-1.5 rounded-lg hover:bg-blue-800 hover:cursor-pointer text-white">
                  Sign Up
                </button>
              </a>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-blue-950"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      {isOpen && (
        <div
          className={`fixed top-14 right-0 w-48 bg-white shadow-lg rounded-lg transform transition-transform duration-300 ease-in-out z-40
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-4 space-y-3 text-gray-700">
            <a href="#home" className="block" onClick={() => setIsOpen(false)}>
              Home
            </a>
            <a
              href="#features"
              className="block"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="block"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <a href="#" className="block" onClick={() => setIsOpen(false)}>
              Login
            </a>
            <button
              className="bg-blue-600 px-4 py-2 rounded-lg text-white w-full hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
