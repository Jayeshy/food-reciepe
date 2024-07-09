// import React from "react";

// function FoodItem({ food }) {
//   function clicked() {
//     console.log("button is clicked");
//   }
//   return (
//     <div>
//       {food.title}
//       <img src={food.image}></img>
//       <button onClick={() => clicked()}>view reciepe</button>
//     </div>
//   );
// }

// export default FoodItem;
import React from "react";

function FoodItem({ food, setFoodId }) {
  return (
    <div className="border rounded-lg shadow-lg">
      <img className="w-full" src={food.image} alt={food.title} />
      <div className="p-4">
        <p className="text-xl font-bold mb-2">{food.title}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => setFoodId(food.id)}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}

export default FoodItem;
