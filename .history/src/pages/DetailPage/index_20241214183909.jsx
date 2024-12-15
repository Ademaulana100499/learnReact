import { Navbar } from "../../components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export const DetailPage = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const getData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/recipes/" + id);
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div className="bg-gray-100 ">
      <Navbar />
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto mt-6">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">
          {data.name}
        </h3>

        <div className="mb-6">
          {data.ingredients && (
            <div>
              <h4 className="text-2xl font-medium text-gray-700 mb-4">
                Ingredients
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                {data.ingredients.map((item, index) => (
                  <li key={index} className="text-gray-700 text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mb-6">
          {data.instructions && (
            <div>
              <h4 className="text-2xl font-medium text-gray-700 mb-4">
                Instructions
              </h4>
              <ol className="list-decimal pl-6 space-y-2">
                {data.instructions.map((item, index) => (
                  <li key={index} className="text-gray-700 text-lg">
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <p className="text-lg font-medium text-gray-700">
            <span className="font-semibold">Prep Time:</span>{" "}
            {data.prepTimeMinutes} mins
          </p>
          <p className="text-lg font-medium text-gray-700">
            <span className="font-semibold">Cook Time:</span>{" "}
            {data.cookTimeMinutes} mins
          </p>
          <p className="text-lg font-medium text-gray-700">
            <span className="font-semibold">Servings:</span> {data.servings}
          </p>
          <p className="text-lg font-medium text-gray-700">
            <span className="font-semibold">Difficulty:</span> {data.difficulty}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <p className="text-lg font-medium text-gray-700">
            <span className="font-semibold">Cuisine:</span> {data.cuisine}
          </p>
          <p className="text-lg font-medium text-gray-700">
            <span className="font-semibold">Calories per Serving:</span>{" "}
            {data.caloriesPerServing}
          </p>
        </div>
      </div>
    </div>
  );
};
