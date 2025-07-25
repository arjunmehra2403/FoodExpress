import { useState } from "react";
import logo from "../assets/logo.jpg";
import { Home, Info, Phone, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();

  return (
    <header className="bg-gradient-to-r from-lime-200 via-green-100 to-lime-200 shadow-lg p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="logo"
              className="w-16 h-16 rounded-full border-4 border-green-400 shadow-md"
            />
            <h1 className="text-xl sm:text-2xl font-bold text-green-700">FoodExpress</h1>
          </div>

          {/* Hamburger icon for mobile */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-800 focus:outline-none"
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav
          className={`w-full sm:w-auto transition-all duration-300 ${isMenuOpen ? "block" : "hidden"
            } sm:block`}
        >
          <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-green-800 font-semibold text-sm sm:text-base mt-2 sm:mt-0">
            <Link to="">
              <li className="flex items-center gap-1 hover:text-lime-600 transition-all cursor-pointer">
                <Home className="w-5 h-5" />
                Home
              </li>
            </Link>

            <Link to="aboutus">
              <li className="flex items-center gap-1 hover:text-lime-600 transition-all cursor-pointer">
                <Info className="w-5 h-5" />
                About Us
              </li>
            </Link>

            <Link to="contactus">
              <li className="flex items-center gap-1 hover:text-lime-600 transition-all cursor-pointer">
                <Phone className="w-5 h-5" />
                Contact Us
              </li>
            </Link>

            <li className="flex items-center gap-2 text-sm font-medium text-green-900 bg-white px-3 py-1 rounded-full shadow-md">
              Status:
              <span
                className={`flex items-center gap-1 px-2 py-1 rounded-full ${onlineStatus ? "bg-green-500 text-white" : "bg-red-500 text-white"
                  }`}
              >
                {onlineStatus ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 animate-pulse"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Online
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Offline
                  </>
                )}
              </span>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
