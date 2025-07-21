import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecipeDetailsAPI } from "../utils/constants";
import { ChefHat, Soup, FlameKindling, Youtube } from "lucide-react";

const ViewRecepie = () => {
  const [recepie, setrecepie] = useState([]);
  const { rec_Id } = useParams();

  useEffect(() => {
    fetch_Recepie();
  }, []);

  const fetch_Recepie = async () => {
    const API = RecipeDetailsAPI + rec_Id;
    const data = await fetch(API);
    const response = await data.json();
    setrecepie(response.meals);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-200 py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-10">
        {recepie.map((e) => {
          const ingredients = [];

          for (let i = 1; i <= 20; i++) {
            const ingredient = e[`strIngredient${i}`];
            const measure = e[`strMeasure${i}`];

            if (ingredient && ingredient.trim()) {
              ingredients.push(`${measure} ${ingredient}`.trim());
            }
          }

          return (
            <div
              key={e.idMeal}
              className="bg-white rounded-3xl shadow-2xl border border-orange-200 overflow-hidden hover:shadow-pink-300 transition-all duration-300 hover:scale-[1.01]"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <img
                  src={e.strMealThumb}
                  alt={e.strMeal}
                  className="w-full lg:w-[40%] h-80 object-cover rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl"
                />

                {/* Info */}
                <div className="p-6 space-y-4 flex-1">
                  <div className="flex items-center gap-3">
                    <ChefHat className="text-green-600 w-7 h-7" />
                    <h1 className="text-3xl font-bold text-orange-700">{e.strMeal}</h1>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700 font-semibold">
                    <span className="bg-lime-100 px-3 py-1 rounded-full">
                      Category: <span className="text-lime-700">{e.strCategory}</span>
                    </span>
                    <span className="bg-pink-100 px-3 py-1 rounded-full">
                      Food Type: <span className="text-pink-700">{e.strArea}</span>
                    </span>
                  </div>

                  <div className="text-gray-800 leading-relaxed">
                    <h2 className="flex items-center gap-2 text-lg font-semibold text-lime-700">
                      <FlameKindling className="w-5 h-5 text-red-500" />
                      Cooking Instructions:
                    </h2>
                    <p className="mt-2 text-justify text-sm">{e.strInstructions}</p>
                  </div>

                  <div>
                    <h2 className="flex items-center gap-2 text-lg font-semibold text-orange-700">
                      <Soup className="w-5 h-5 text-green-500" />
                      Ingredients:
                    </h2>
                    <p className="mt-2 text-sm text-gray-700 italic">
                      {ingredients.join(", ")}
                    </p>
                  </div>

                  {e.strYoutube && (
                    <a
                      href={e.strYoutube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold mt-4 transition"
                    >
                      <Youtube className="w-5 h-5" />
                      Watch on YouTube
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewRecepie;
