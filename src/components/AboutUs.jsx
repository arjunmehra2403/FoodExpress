import { ChefHat, HeartHandshake, UtensilsCrossed, UsersRound } from "lucide-react";
import Footer from "./Footer";
import {Link} from "react-router-dom";

const AboutUs = () => {
  return (
    <>
    <div className="w-full font-[Poppins] bg-gradient-to-b from-yellow-50 via-orange-50 to-red-100 text-gray-800">
      {/* Hero Section */}
      <div className="w-full px-4 py-12 md:py-20 flex flex-col md:flex-row items-center max-w-7xl mx-auto">
        <div className="md:w-1/2 space-y-5">
          <h1 className="text-4xl sm:text-5xl font-bold text-orange-600">About Food Express</h1>
          <p className="text-lg text-gray-700">
            At <span className="font-semibold text-red-500">Food Express</span>, we bring
            culinary delight to your doorstep. Our mission is to make delicious,
            healthy, and fresh meals accessible to everyone — anytime, anywhere.
          </p>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="Food Express Chef"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Icons Section */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div className="space-y-3">
            <ChefHat className="mx-auto text-orange-500" size={40} />
            <h3 className="text-xl font-semibold text-red-600">Expert Chefs</h3>
            <p className="text-sm text-gray-600">Trained chefs craft every meal with perfection and passion.</p>
          </div>
          <div className="space-y-3">
            <UsersRound className="mx-auto text-green-500" size={40} />
            <h3 className="text-xl font-semibold text-green-700">Happy Customers</h3>
            <p className="text-sm text-gray-600">Over 50K+ customers love our taste and speedy service.</p>
          </div>
          <div className="space-y-3">
            <UtensilsCrossed className="mx-auto text-purple-500" size={40} />
            <h3 className="text-xl font-semibold text-purple-700">Wide Variety</h3>
            <p className="text-sm text-gray-600">Choose from 500+ authentic dishes from all over the world.</p>
          </div>
          <div className="space-y-3">
            <HeartHandshake className="mx-auto text-pink-500" size={40} />
            <h3 className="text-xl font-semibold text-pink-600">Trusted Quality</h3>
            <p className="text-sm text-gray-600">Fresh, hygienic, and high-quality ingredients in every bite.</p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="bg-orange-50 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-700">Our Journey</h2>
          <p className="text-lg text-gray-700">
            Founded in 2021, Food Express started with a simple dream — to deliver joy through food.
            From a small kitchen to a city-wide food network, we've stayed true to our values of quality,
            taste, and customer love.
          </p>
          <img
            src="https://images.unsplash.com/photo-1546069901-eacef0df6022"
            alt="Our Journey"
            className="rounded-xl shadow-md w-full max-h-[400px] object-cover"
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100 py-10 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-2xl font-bold text-red-600">Join the Food Revolution 🍱</h2>
          <p className="text-gray-700 text-md">
            Whether you're craving spicy curries, cheesy pizzas, or healthy bowls — Food Express
            is here to satisfy your hunger with love and speed.
          </p>
          <Link to="/menu">
          <button className="mt-3 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-md transition duration-300">
            Explore Our Menu
          </button>
          </Link>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
