import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import InnerContainer from "./components/InnerContainer";
import Reciepe from "./components/Reciepe";
import Container from "./components/Container";
require('dotenv').config();
const {REACT_APP_SPOONACULAR_API_KEY} = process.env;
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState(REACT_APP_SPOONACULAR_API_KEY);
  return (
    <>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodId={foodId} foodData={foodData} setFoodId={setFoodId} />
    </>
  );
}

export default App;
