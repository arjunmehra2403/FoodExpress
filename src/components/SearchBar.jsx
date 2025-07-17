import { Search } from "lucide-react";
const SearchBar = (props) => {
    const {searchtext,handleSearch,setsearchtext}=props
  return (
    <div className="flex justify-center items-center p-6 bg-gradient-to-r from-lime-100 via-yellow-50 to-orange-100">
      <div className="relative w-full max-w-xl flex">
        {/* Search Icon inside input */}
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search delicious food..."
            value={searchtext}
            onChange={(e)=>{
                setsearchtext(e.target.value);  
            }}
            className="w-full py-3 pl-12 pr-4 rounded-l-full bg-white text-gray-700 placeholder:text-gray-400 shadow-md border border-green-200 focus:outline-none focus:ring-4 focus:ring-lime-300 transition-all duration-300 ease-in-out hover:shadow-lg"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lime-500 w-5 h-5 animate-bounce-slow" />
        </div>

        {/* Search Button */}
        <button className="px-6 py-3 bg-gradient-to-r from-lime-400 to-green-500 text-white font-semibold rounded-r-full shadow-md hover:scale-105 hover:shadow-green-400 transition-all duration-300 ease-in-out" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
