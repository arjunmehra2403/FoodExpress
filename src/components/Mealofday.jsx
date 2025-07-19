import { useEffect, useState } from "react";
import { ChefHat, Utensils, YoutubeIcon } from "lucide-react";
const Mealofday = () => {
    const [meal, setmeal] = useState([]);

    useEffect(() => {
        fetchMealOfDay();
    }, []);

    const fetchMealOfDay = async () => {
        const API = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
        const data = await fetch(API);
        const response = await data.json();
        setmeal(response?.meals);
    };
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center p-4">
                <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-6 md:p-10">
                    <h1 className="text-3xl md:text-5xl font-bold text-center mb-10 text-emerald-700 animate-pulse flex items-center justify-center gap-3">
                        <ChefHat className="text-pink-500 w-8 h-8" />
                        Meal of the Day
                    </h1>

                    {
                        meal.map((res) => {
                            const youtubeEmbedUrl = res.strYoutube?.replace("watch?v=", "embed/");
                            return (
                                <div key={res.idMeal} className="flex flex-col md:flex-row items-center gap-8">
                                    <img
                                        src={res.strMealThumb}
                                        alt={res.strMeal}
                                        className="w-full md:w-1/2 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg border-4 border-emerald-300"
                                    />
                                    <div className="flex-1 space-y-4 text-center md:text-left">
                                        <h2 className="text-2xl font-semibold text-emerald-800 flex items-center justify-center md:justify-start gap-2">
                                            <Utensils className="text-yellow-500" /> {res.strMeal}
                                        </h2>
                                        <p className="text-lg font-medium text-gray-700">
                                            <span className="text-emerald-600 font-semibold">Category:</span> {res.strCategory}
                                        </p>
                                        {youtubeEmbedUrl && (
                                            <div className="rounded-xl overflow-hidden shadow-lg mt-4 border border-gray-300">
                                                <iframe
                                                    width="100%"
                                                    height="250"
                                                    src={youtubeEmbedUrl}
                                                    frameBorder="0"
                                                    allowFullScreen
                                                    title="Meal Video"
                                                ></iframe>
                                                <div className="flex items-center justify-center gap-2 bg-emerald-100 p-2 text-emerald-700 font-semibold">
                                                    <YoutubeIcon className="text-red-600" /> Watch Recipe
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

            </div>
        </>

    );
};

export default Mealofday;
