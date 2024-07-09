import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
function Search({ foodData, setFoodData }) {
  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = "07fe5fa5e7c64c4bbff8336e615db27d";
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodData(data.results);
      console.log(data.results);
    }
    fetchFood();
  }, [query, setFoodData]);
  return (
    <div className="flex justify-center items-center bg-white m-10 mr-20 ml-20 rounded-xl shadow-md h-20">
      <input
        className="flex pl-2 w-full m-4 rounded-lg h-12 focus:outline-none border-b border-gray-400"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search"
      ></input>
    </div>
  );
}
export default Search;
