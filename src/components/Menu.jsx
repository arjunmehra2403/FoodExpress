import { useEffect, useState } from "react";
import { FetchMenu } from "../utils/constants";
import { Star, Globe, BadgeDollarSign, UtensilsCrossed } from "lucide-react";

const Menu = () => {
  const [menu, setmenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const API = FetchMenu;
    const data = await fetch(API);
    const response = await data.json();
    setmenu(response.bbqs);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-green-100 to-lime-50 py-10 px-4 sm:px-10">
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-green-700 mb-10 font-[Poppins] drop-shadow-lg">
        🍽️ Food Express Menu
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {menu.map((e) => (
          <div
            key={e.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-green-100 hover:border-green-400 transform hover:scale-[1.03] cursor-pointer"
          >
            <img
              src={e.img}
              alt="Menu"
              className="w-full h-52 object-cover rounded-t-2xl"
            />
            <div className="p-4 space-y-2">
              <h2 className="text-xl font-semibold text-green-800 flex items-center gap-2">
                <UtensilsCrossed className="text-lime-500" size={20} />
                {e.name}
              </h2>

              <p className="text-gray-600 font-medium line-clamp-2">
                {e.dsc}
              </p>

              <div className="flex justify-between text-sm font-medium mt-4">
                <span className="flex items-center gap-1 text-green-600">
                  <BadgeDollarSign size={16} className="text-green-500" />
                  {e.price}
                </span>
                <span className="flex items-center gap-1 text-yellow-500">
                  <Star size={16} />
                  {e.rating || "4.5"}
                </span>
              </div>

              <p className="text-right text-xs text-gray-500 mt-2 flex items-center justify-end gap-1">
                <Globe size={14} className="text-blue-400" />
                {e.country}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
