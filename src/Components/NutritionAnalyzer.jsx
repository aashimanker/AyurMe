import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "chart.js/auto";

const NutritionAnalyzer = () => {
  const [inputData, setInputData] = useState("");
  const [nutritionData, setNutritionData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (nutritionData && nutritionData.totalNutrients) {
      renderChart();
    }
  }, [nutritionData]);

  const analyzeNutrition = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.edamam.com/api/nutrition-details",
        {
          ingr: [inputData],
        },
        {
          params: {
            app_id: import.meta.env.VITE_NUTRITION_API_ID,
            app_key: import.meta.env.VITE_NUTRITION_API_KEY,
          },
        }
      );
      setNutritionData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error analyzing nutrition:", error);
      setLoading(false);
    }
  };

  const renderChart = () => {
    const nutrients = Object.keys(nutritionData.totalNutrients);
    const quantities = nutrients.map(
      (key) => nutritionData.totalNutrients[key].quantity
    );

    const ctx = document.getElementById("nutritionChart");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: nutrients,
        datasets: [
          {
            label: "Quantity",
            data: quantities,
            backgroundColor: "rgba(54, 162, 235, 0.6)",
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  return (
    <div className="page-container"
    
   >
      <div
        className="content-section"
        style={{
          backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/033/351/651/non_2x/food-frame-bright-fresh-top-view-ai-generated-photo.jpg')", // Add background image here
          position: "relative",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "calc(100vh - 50px)",
          
        }}
      >
        <div className="max-w-lg mx-auto mt-auto p-4 border rounded-lg shadow-lg bg-gray-100 text-gray-800 "
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}>
          <h2 className="text-lg font-semibold mb-4  text-gray-900">
            Nutrition Analyzer
          </h2>
          <textarea
            className="w-full border rounded-lg p-2 mb-4"
            placeholder="Enter food data..."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          ></textarea>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={analyzeNutrition}
            disabled={!inputData || loading}
          >
            {loading ? "Analyzing..." : "Analyze"}
          </button>
          {nutritionData && nutritionData.totalNutrients && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">
                Nutritional Information:
              </h3>
              <canvas id="nutritionChart" width="400" height="200"></canvas>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NutritionAnalyzer;
