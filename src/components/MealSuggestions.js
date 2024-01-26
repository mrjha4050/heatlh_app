import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MealSuggestions = ({ suggestions }) => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  const [userInput, setUserInput] = useState("");
  console.log("suggestions:", suggestions);
  return (
    <div className="flex items-center justify-center min-h-screen mb-20">
      <div className="mx-8 p-6 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-4">Meal Suggestions</h2>
        {suggestions && suggestions.length > 0 ? (
          <ul>
            {suggestions.map((meal) => (
              <li key={meal.id} className="mb-4">
                <h3 className="text-xl font-semibold">{meal.title}</h3>
                <p>Recipe ID: {meal.id}</p>
                <p>
                  Ingredients:{" "}
                  {meal.usedIngredients
                    ? meal.usedIngredients
                        .map((ingredient) => ingredient.originalString)
                        .join(", ")
                    : "N/A"}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">
            No recipes found. Please adjust your search criteria.
          </p>
        )}

        <button
          className="text-white border-none px-2 py-2 text-lg md:text-[16px] rounded-2xl mt-3 md:mt-6 w-full transition ease-in-out delay-100 bg-blue-600 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300"
          onClick={redirectToHome}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default MealSuggestions;
