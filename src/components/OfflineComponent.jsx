import { WifiOff, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

const OfflineComponent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center px-4 text-white">
      {/* Animated Icon */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, bounce: 0.3, type: "spring" }}
        className="text-red-500 mb-6"
      >
        <WifiOff size={60} />
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        You're Offline!
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="text-lg text-gray-300 text-center max-w-md mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        It looks like you’ve lost your internet connection. Please check your network settings and try again.
      </motion.p>

      {/* Retry Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-full font-semibold shadow-xl"
        onClick={() => window.location.reload()}
      >
        <RefreshCw className="w-5 h-5" />
        Retry
      </motion.button>
    </div>
  );
};

export default OfflineComponent;
