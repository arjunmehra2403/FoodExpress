const Shimmer = () => {
  const shimmerCards = Array(8).fill(0); 

  return (
    <div className="bg-gradient-to-br from-lime-50 via-amber-50 to-orange-100 min-h-screen p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-10 animate-bounce">
        🍽️ Loading Delicious Dishes...
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {shimmerCards.map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl border border-green-100 overflow-hidden animate-fadeIn duration-1000 delay-75 transition-all"
          >
            {/* Image shimmer */}
            <div className="w-full h-48 shimmer-bg animate-shimmer rounded-t-2xl" />

            {/* Text shimmer */}
            <div className="p-4 space-y-4">
              <div className="h-4 bg-gradient-to-r from-lime-200 via-lime-100 to-lime-200 rounded w-3/4 shimmer-bg animate-shimmer" />
              <div className="h-3 bg-gradient-to-r from-amber-200 via-orange-100 to-amber-200 rounded w-full shimmer-bg animate-shimmer" />
              <div className="h-3 bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 rounded w-5/6 shimmer-bg animate-shimmer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
