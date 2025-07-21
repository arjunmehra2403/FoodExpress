// Footer.jsx
import { Facebook, Instagram, Mail, Phone, Twitter, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-lime-200 via-green-100 to-lime-200 text-gray-800 mt-16 pt-10 pb-6 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="w-full space-y-2">
          <div className="flex items-center space-x-2 text-red-600 text-2xl font-bold">
            <UtensilsCrossed className="text-red-500" />
            <span>Food Express</span>
          </div>
          <p className="text-sm text-gray-600">
            Delivering flavors that make your tastebuds dance. 🍕🍜🍔
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-orange-700 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-red-600 transition">Home</Link></li>
            <li><Link to="/aboutus" className="hover:text-red-600 transition">About Us</Link></li>
            <li><Link to="/contactus" className="hover:text-red-600 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-orange-700 mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center space-x-2"><Phone className="text-green-600" size={16} /><span>+91 98765 43210</span></li>
            <li className="flex items-center space-x-2"><Mail className="text-blue-600" size={16} /><span>support@foodexpress.com</span></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-orange-700 mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="text-blue-600 hover:scale-110 transition"><Facebook /></a>
            <a href="#" className="text-pink-500 hover:scale-110 transition"><Instagram /></a>
            <a href="#" className="text-blue-400 hover:scale-110 transition"><Twitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 text-center text-sm text-gray-600 border-t pt-4 border-orange-300">
        © {new Date().getFullYear()} <span className="text-orange-600 font-semibold">Food Express</span> – All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
