import { useEffect, useState } from "react";
import { ExploreMoreAPI } from "../utils/constants";
import { useParams } from "react-router-dom";
import { ChefHat, Soup, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const ExploreMore = () => {
  const [explore, setexplore] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchExploreMore();
  }, []);

  const fetchExploreMore = async () => {
    const API = ExploreMoreAPI + resId;
    const data = await fetch(API);
    const response = await data.json();
    console.log(response);  
    setexplore(response.meals);
  };

  return explore.length === 0 ? <Shimmer/>  : (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-200 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-10">
          <UtensilsCrossed className="w-8 h-8 text-orange-600" />
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-lime-700 uppercase">
            Explore {resId} Meals 🍱
          </h1>
          <ChefHat className="w-8 h-8 text-green-600" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {explore.map((res) => {
            return (
              <div
                key={res.idMeal}
                className="bg-white rounded-2xl shadow-xl border border-lime-200 overflow-hidden hover:shadow-orange-300 transition-all duration-300 hover:scale-105"
              >
                <img
                  src={res.strMealThumb}
                  alt={res.strMeal}
                  className="w-full h-52 object-cover"
                />
                <div className="p-4 space-y-3 text-center">
                  <h2 className="text-xl font-bold text-orange-600 flex items-center justify-center gap-2">
                    <Soup className="w-5 h-5 text-lime-600" />
                    {res.strMeal}
                  </h2>
                  <Link to={"/morerecepie/" + res.idMeal }>
                  <button className="mt-3 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-orange-400 via-lime-500 to-green-400 text-white font-semibold shadow hover:shadow-lg hover:scale-105 transition">
                    View Recipe 🍽️
                  </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;
