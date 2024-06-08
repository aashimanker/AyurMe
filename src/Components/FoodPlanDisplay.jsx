import React from 'react';

const FoodPlanDisplay = ({ foodPlan }) => {
  // Check if foodPlan is a non-empty string, then parse it
  const foodPlanData = JSON.parse(foodPlan);

  // Function to format the food plan data
  const formatFoodPlan = (plan) => {
    return Object.entries(plan).map(([category, items]) => (
      <div key={category} className="mb-4">
        <h3 className="text-lg font-semibold">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
        <ul className="list-disc list-inside">
          {Object.entries(items).map(([key, values]) => (
            <li key={key}>
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {values.join(', ')}
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Food Plan</h2>
      {formatFoodPlan(foodPlanData)}
    </div>
  );
};

export default FoodPlanDisplay;


