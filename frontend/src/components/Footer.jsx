import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhone, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer id="contact" className="bg-blue-950 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-bold text-white">IELTS Mastery</h4>
          <p className="mt-4 text-white text-sm">
            Helping students achieve their dream IELTS scores since 2010.
          </p>
        </div>
        <div>
          <h5 className="font-semibold text-white text-lg">Quick Links</h5>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#home" className="hover:text-blue-100">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-blue-100">
                Features
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-blue-100">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-100">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-white">Contact</h5>
          <p className="mt-4 text-white text-sm space-y-2">
            <span className="flex items-center gap-2">
              <HiOutlineLocationMarker size={20} />
              New Delhi, India
            </span>
            <span className="flex items-center gap-2">
              <FiPhone ize={20} />
              +91 98765 43210
            </span>
            <span className="flex items-center gap-2">
              <FiMail ize={20} />
              info@ieltsmastery.com
            </span>
          </p>
        </div>
      </div>
      <div className="text-center text-white text-sm mt-6 md:mt-8">
        &copy; {new Date().getFullYear()} IELTS Mastery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
