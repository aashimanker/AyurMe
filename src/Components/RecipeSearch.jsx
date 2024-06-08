import React, { useState } from 'react';
import axios from 'axios';

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const app_id = import.meta.env.VITE_RECIPE_API_ID;
  const app_key = import.meta.env.VITE_RECIPE_API_KEY;

  const searchRecipes = async () => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`
      );
      setRecipes(response.data.hits);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  };

  return (
    <div>
    <div
  style={{
    background:
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat center",
    backgroundSize: "cover"
  }}
//   className="py-52 px-1 md:px-8 text-center relative text-white font-bold text-2xl md:text-3xl overflow-auto"
className="pt-42 py-52 h-48 px-1 md:px-8 text-center relative text-white font-bold text-2xl md:text-3xl  w-full md:w-full lg:w-full m-auto justify-center"

>
  <h1 className="pb-4">Search for Recipe</h1>
 
  <div className="w-11/12 md:w-3/4 lg:max-w-3xl m-auto">
 
    <div className="relative z-30 text-base text-black">
      <input
        type="text"
        placeholder="Search for recipe"
        className="mt-2 shadow-md focus:outline-none rounded-2xl py-3 px-6 block w-full"
        value={query}
        onChange={handleChange}
        required
      />
      <div className="text-left absolute top-10 rounded-t-none rounded-b-2xl shadow bg-white divide-y w-full max-h-40 overflow-auto"></div>
      <button type="submit" className="w-1/4 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 mt-5" onClick={handleSubmit}>
          Search
        </button>
    </div>
  </div>
</div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {recipes.map((recipe, index) => (
        <div key={index} className="bg-purple-50 text-purple-800 border border-purple-200 ">
          <h2 className="text-xl font-semibold text-purple-900 text-center">{recipe.recipe.label}</h2>
          <img src={recipe.recipe.image} alt={recipe.recipe.label} className="w-full md:w-64 mb-4 block mx-auto" />
          <p className="text-sm mb-2">Source: {recipe.recipe.source}</p>
          <h3 className="font-semibold text-xl mb-2 italic">Ingredients:</h3>
          <ul className="list-disc pl-4">
            {recipe.recipe.ingredients.map((ingredient, i) => (
              <li key={i} className="text-sm">{ingredient.text}</li>
            ))}
          </ul>
          <h3 className="font-semibold text-xl mt-4 mb-2 italic">Preparation:</h3>
          <ol className="list-decimal pl-4">
            {recipe.recipe.ingredientLines.map((step, i) => (
              <li key={i} className="text-sm">{step}</li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  </div>
  );
};

export default RecipeSearch;
