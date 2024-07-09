import React from "react";
import FoodItem from "./FoodItem";
import Reciepe from "./Reciepe";

function FoodList({ foodData, setFoodId, foodId }) {
  return (
    <div className="flex h-screen">
      {/* Left side */}
      <div className="flex p-2 flex-col w-1/3 border-r border-gray-200">
        {foodData.map((food, index) => (
          <div key={index} className="p-4">
            <FoodItem food={food} setFoodId={setFoodId} />
          </div>
        ))}
      </div>

      {/* Right side */}
      <div className="flex flex-col border-r w-2/3">
        <Reciepe foodId={foodId} />
      </div>
    </div>
  );
}

export default FoodList;
