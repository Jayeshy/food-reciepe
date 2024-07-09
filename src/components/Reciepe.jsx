import { useEffect, useState } from "react";

function Reciepe({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "fedba808376344d1a0f167fd8964bade";
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchInfo() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFood(data);
      setIsLoading(false);
    }
    fetchInfo();
  }, [URL]);

  const veg = food.vegetarian ? "Vegetarian" : "Non vegetarian";

  return (
    <div className="flex justify-center">
      <div className="max-w-4xl">
        {/* Recipe Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Recipe Image */}
          <img
            className="w-full h-64 object-cover"
            src={food.image}
            alt={food.title}
          />

          {/* Recipe Details */}
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{food.title}</h1>
            <div className="flex justify-between mb-4">
              <p className="text-lg font-semibold">
                Ready in {food.readyInMinutes} minutes
              </p>
              <p className="text-lg font-semibold">{veg}</p>
            </div>

            {/* Instructions */}
            <div>
              <h2 className="text-2xl font-bold mb-2">Instructions</h2>
              <ul className="list-disc pl-6">
                {isLoading ? (
                  <p>Loading....</p>
                ) : (
                  food.analyzedInstructions[0].steps.map((step, index) => (
                    <li key={index} className="text-lg">
                      {step.step}
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reciepe;
