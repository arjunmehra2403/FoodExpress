import { useEffect, useState } from "react";
import { UtensilsCrossed } from "lucide-react";
import Shimmer from "./Shimmer";
import SearchBar from "./SearchBar";
import Mealofday from "./Mealofday";
import {Link} from "react-router-dom";
const Body = () => {
    const [data, setdata] = useState([]);
    const [filtered, setfiltered] = useState([]);
    const [searchtext, setsearchtext] = useState("");
    useEffect(() => {
        fetchmeal();
    }, []);

    const fetchmeal = async () => {
        const API = "https://www.themealdb.com/api/json/v1/1/categories.php";
        const fetch_data = await fetch(API);
        const response = await fetch_data.json();
        setdata(response?.categories);
        setfiltered(response?.categories);
    };
    const handleSearch = () => {
        const filtered = data.filter((item) =>
            item.strCategory.toLowerCase().includes(searchtext.toLowerCase())
        );
        setfiltered(filtered);
    };

    return data.length === 0 ? <Shimmer /> : (
        <div className="bg-gradient-to-br from-lime-50 via-orange-50 to-amber-100 min-h-screen p-6">

            <Mealofday />      {/*This is Meal of The Day Cart */}
            <h1 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-10 flex items-center justify-center gap-2">
                <UtensilsCrossed className="text-lime-700 w-8 h-8" />
                Explore Delicious Categories
            </h1>

            <SearchBar searchtext={searchtext} handleSearch={handleSearch} setsearchtext={setsearchtext} />  {/*Search Bar Imported from SearBar.jsx*/}


            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto mt-15 ">
                {
                    filtered.map((res) => {
                        return (
                            <Link key={res.idCategory} to={"/exploremore/" + res.strCategory}><div  className="bg-white rounded-2xl shadow-xl hover:shadow-green-300 border border-green-100 overflow-hidden transition-transform hover:scale-105">
                                <img
                                    src={res.strCategoryThumb}
                                    alt={res.strCategory}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 space-y-2">
                                    <h1 className="text-xl font-bold text-lime-700 flex items-center gap-2">
                                        <UtensilsCrossed className="w-5 h-5 text-orange-500" />
                                        {res.strCategory}
                                    </h1>
                                    <p className="text-sm text-gray-700 text-justify line-clamp-4">
                                        {res.strCategoryDescription}
                                    </p>
                                </div>
                                {/* <div className="flex justify-center mt-8">
                                    <button
                                        className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-br from-lime-600 via-green-500 to-lime-400 text-white text-base font-semibold shadow-md hover:scale-105 hover:shadow-green-500 transition-all duration-300 ease-in-out border border-green-100 mb-10"
                                        onClick={(()=>{
                                            console.log("btn clicked");
                                        })}
                                    >
                                        <UtensilsCrossed className="w-4 h-4 text-white" />
                                        <span>Explore More</span>
                                        <span className="text-lg">🍴</span>
                                    </button>
                                </div> */}
                            </div>
                            </Link>
                        );
                    })
                }
            </div>
        </div>
    );
};
export default Body;
