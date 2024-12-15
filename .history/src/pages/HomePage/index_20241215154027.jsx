import { Navbar } from "../../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export const HomePage = () => {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const getData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/recipes?limit=4");
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
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="container grid grid-cols-4 gap-10 mx-auto mt-8 ">
        {data.map((index) => (
          <div
            key={index.id}
            className="flex flex-col justify-between h-full p-6 transition-transform duration-300 ease-in-out transform bg-white rounded-lg shadow-lg hover:scale-105"
          >
            <div className="mb-4">
              <h1 className="mb-4 text-2xl font-semibold text-gray-800">
                {index.name}
              </h1>
              <h2 className="mb-2 font-medium text-gray-600">Ingredients:</h2>
              {index?.ingredients.map((single, i) => (
                <p key={i} className="mb-1 text-sm text-gray-700">
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
                <button className="w-full px-6 py-2 font-semibold text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600">
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
