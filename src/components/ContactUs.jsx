import { Mail, MapPin, Phone } from "lucide-react";
import contactusimg from "../assets/contact.jpeg";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <>
    <div className="w-full bg-gradient-to-b from-orange-50 via-yellow-50 to-red-100 text-gray-800 font-[Poppins] px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-orange-600">Get in Touch</h1>
          <p className="text-gray-700 mt-4 text-lg">
            We'd love to hear from you! Whether it’s feedback, queries or you just want to say hello 🍕
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Phone className="text-green-500" size={30} />
              <div>
                <h3 className="text-lg font-semibold text-green-700">Phone</h3>
                <p className="text-sm text-gray-600">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-600" size={30} />
              <div>
                <h3 className="text-lg font-semibold text-blue-700">Email</h3>
                <p className="text-sm text-gray-600">support@foodexpress.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-red-500" size={30} />
              <div>
                <h3 className="text-lg font-semibold text-red-700">Address</h3>
                <p className="text-sm text-gray-600">Food Street, Flavor City, India</p>
              </div>
            </div>
            <img
              src={contactusimg}
              alt="Contact Us Food"
              className="rounded-xl shadow-lg mt-8 w-full h-[250px] object-cover"
            />
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-orange-600">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 font-medium mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 font-medium mb-1">Your Message</label>
                <textarea
                  rows="4"
                  placeholder="Type your message..."
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-semibold transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;
