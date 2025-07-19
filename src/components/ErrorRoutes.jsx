import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const ErrorRoutes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e293b] to-[#0f172a] flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-400/10 to-transparent blur-3xl"></div>

      <div className="z-10 max-w-xl text-center flex flex-col items-center space-y-6">
        <Player
          autoplay
          loop
          src="https://lottie.host/feec999d-e30b-43c5-a7a2-d6417c3cbb95/vS0ysvlTIy.json"
          className="w-[300px] h-[300px]"
        />

        <h1 className="text-4xl md:text-6xl font-bold text-white animate-pulse">
          Oops! Page Not Found
        </h1>
        <p className="text-gray-300 text-lg md:text-xl">
          We couldn’t find the page you’re looking for. It might have been removed or renamed.
        </p>

        <Link
          to="/"
          className="inline-block mt-4 px-6 py-3 bg-teal-500 hover:bg-teal-400 text-white rounded-full text-lg transition-all duration-300 shadow-lg hover:scale-105"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorRoutes;
