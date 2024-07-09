import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import InnerContainer from "./components/InnerContainer";
import Reciepe from "./components/Reciepe";
import Container from "./components/Container";
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");
  return (
    <>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodId={foodId} foodData={foodData} setFoodId={setFoodId} />
    </>
  );
}

export default App;
