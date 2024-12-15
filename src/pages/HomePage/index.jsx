import { Navbar } from "../../components";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export const HomePage = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/recipes");
      console.log("res ", res.data);
      setData(res.data.recipes);
    } catch (error) {
      console.log("err ", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="grid grid-cols-4 gap-10 mt-8 container mx-auto ">
        {data.map((index) => (
          <div
            key={index.id}
            className="bg-white transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col justify-between shadow-lg rounded-lg p-6  h-full"
          >
            <div className="mb-4">
              <h1 className="text-2xl font-semibold text-gray-800 mb-4">
                {index.name}
              </h1>
              <h2 className="text-gray-600 font-medium mb-2">Ingredients:</h2>
              {index?.ingredients.map((single, i) => (
                <p key={i} className="text-gray-700 text-sm mb-1">
                  - {single}
                </p>
              ))}

              <p>
                <span className="font-medium">Prep Time:</span>{" "}
                {index.prepTimeMinutes} mins
              </p>
              <p>
                <span className="font-medium">Cook Time:</span>{" "}
                {index.cookTimeMinutes} mins
              </p>
              <p>
                <span className="font-medium">Difficulty:</span>{" "}
                {index.difficulty}
              </p>
            </div>
            <div>
              <Link to={`/detail/${index.id}`}>
                <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg w-full hover:bg-blue-600 transition-colors">
                  Detail Recipe
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
