import React from "react";
import { account,databases } from "../appwrite/config";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { ID } from "appwrite";
import conf from "../../conf/conf";
const DoshaInfo = ({ dosha }) => {
  const doshaData = {
    Vata: {
      description:
        "Vatas tend to be more spacey, anxious, with active minds. They speak quickly, and are likely to have joints that crack. Vata influences the movement of thoughts, feelings, prana flows, nerve impulses, and fluids in the body.",
      qualities:
        "Cold, light, dry, irregular, rough, moving, quick, and always changing. Vata governs movement in the body, the activities of the nervous system, and the process of elimination. Vata influences the other doshas. Vatas tend to always be on the go, with energetic and creative minds. When Vatas are in balance, they are lively and enthusiastic.",
      physicalCharacteristics:
        "Thin, light frame, and excellent adaptability. Their energy comes in bursts, and they are likely to experience sudden bouts of fatigue. Vatas typically have dry skin and cold hands and feet. They sleep lightly and their digestion can be sensitive. When imbalanced, Vatas tend to experience weight loss, constipation, arthritis, weakness, restlessness, aches, and pains.",
      emotionalCharacteristics:
        "Vatas love excitement and new experiences. They are quick to anger but also to forgive. They are energetic, creative, and flexible. They also take initiative and are lively conversationalists. When imbalanced, Vatas are prone to worry, anxiousness, nervousness, and often suffer from insomnia.",
      stressResponse:
        "When they feel overwhelmed or stressed, their response is: 'What did I do wrong?'",
      balanceTips: [
        "Follow the dietary guidelines in the diet below.",
        "Maintain a consistent daily routine and keep exercises both gentle and regulated.",
        "Find time for rest and to nurture themselves. Be in a calm, safe, and comforting environment.",
        "Have regular Ayurvedic massages as this is soothing and grounding for Vatas.",
        "Avoid very cold and windy conditions, as well as dry climates.",
        "Minimize travel and too much movement; avoid loud and noisy places as well as crowds and too much talking.",
        "Keep warm and get enough sleep.",
      ],
      favorableFoods: "Warm, nourishing foods with moderately heavy texture', 'Salty, sour, and sweet tastes', 'Warm milk, cream, butter, warm soups, stews, hot cereals, fresh baked bread, raw nuts, and nut butters', 'Hot or herbal tea with snacks in the late afternoon', 'Sweet fruits (extra-ripe)', 'Warm drinks or hot water",
foodsToReduce: "Cold foods such as salads, iced drinks, raw vegetables and greens', 'Drinks with too much caffeine and candies', 'Unripe fruits",
      foodPlan: {
        vegetables: {
          best: [
            "Asparagus",
            "Beets",
            "Carrots",
            "Cucumber",
            "Garlic",
            "Green beans",
            "Onions",
            "Radishes",
            "Turnips",
          ],
          moderation: [
            "Broccoli",
            "Brussels sprouts",
            "Cabbage",
            "Cauliflower",
            "Celery",
            "Eggplant",
            "Leafy green vegetables",
            "Mushrooms",
            "Peas",
            "Peppers",
            "Potatoes",
            "Sprouts",
            "Tomatoes",
            "Zucchini",
          ],
          avoid: ["Raw vegetables"],
        },
        fruits: {
          best: [
            "Apples",
            "Apricots",
            "Berries",
            "Cherries",
            "Cranberries",
            "Papaya",
            "Pears",
            "Prunes",
            "Pomegranates",
            "Grapefruit",
            "Lemons",
            "Grapes",
            "Mangoes",
            "Melons",
            "Oranges",
            "Pineapples",
            "Plums",
          ],
          moderation: ["Dates", "Bananas", "Coconuts", "Fresh figs"],
        },
        grains: {
          best: [
            "Barley",
            "Buckwheat",
            "Corn",
            "Millet",
            "Oats",
            "Rye",
            "Basmati rice",
          ],
          moderation: ["Rice", "Wheat"],
        },
        dairy: {
          best: [
            "Skim milk",
            "Whole milk (small amounts)",
            "Eggs",
            "Goat’s milk",
            "Soy milk",
            "Camel milk",
          ],
          moderation: ["Egg yolks"],
        },
        meats: {
          best: ["Chicken", "Turkey", "Lean fish (small amounts)"],
          moderation: ["Shrimp", "Red meat"],
        },
        beans: {
          best: ["All legumes"],
          moderation: ["Kidney beans", "Tofu"],
        },
        oils: {
          best: [
            "Almond oil",
            "Sunflower oil",
            "Olive oil",
            "Grapeseed oil (small amounts)",
          ],
        },
        sweeteners: {
          inModeration: ["All in very small quantities"],
        },
        nutsAndSeeds: {
          all: ["All are acceptable in small amounts. Almonds are best."],
        },
        herbsAndSpices: {
          inModeration: ["Cumin", "Fenugreek", "Sesame", "Ginger"],
        }
      }
    },
    Pitta: {
      description:
        "Pittas literally have more fire in them than other types. They have better appetites and better digestion. They can withstand the cold better, as they are hotter-headed. They are naturally aggressive and impatient, intelligent, and sharp. Since Pittas have strong and efficient digestion, they can generally eat just about everything. Most Pittas get into trouble by continued use of too much salt, overuse of sour and spicy food, and overeating.",
      qualities:
        "Hot, light, intense, penetrating, pungent, sharp, and acidic. The Pitta dosha controls digestion, metabolism, and energy production. The primary function of Pitta is transformation.",
      physicalCharacteristics:
        "Pittas have excellent digestion and warm body temperature; they sleep soundly for short periods of time, have abundant energy, and a strong appetite. When imbalanced, Pittas may suffer from skin rashes, burning sensations, peptic ulcers, excessive body heat, heartburn, and indigestion.",
      emotionalCharacteristics:
        "Pittas have a powerful intellect and a strong ability to concentrate. They are good decision makers, teachers, and speakers. They are precise, sharp-witted, direct, and often outspoken. They are ambitious and practical, and love both adventure and challenges. When imbalanced, Pittas can be short-tempered, argumentative, and suffer outbursts of emotion.",
      stressResponse:
        "When they feel overwhelmed or stressed, their response is: 'What did you do wrong?'",
      balanceTips: [
        "Follow the dietary guidelines in the diet below.",
        "Get plenty of fresh air and choose cooler times of day to get physical exercise.",
        "Keep cool physically and mentally, and apply an attitude of moderation in all things.",
        "Avoid situations of excessive heat, steam, or humidity and take plenty of fluids.",
        "Be considerate and patient with others.",
        "Engage in quiet and contemplative activities.",
        "Avoid situations of potential conflict."],
      favorableFoods: "Cool or warm foods with moderately heavy textures', 'Bitter, sweet, and astringent tastes', 'Cool, refreshing food in summer or hot weather (like salads, milk, and ice cream)', 'Herbal tea (especially mint or licorice root tea)', 'Vegetarian foods, in general', 'Abundant amounts of milk, grains, and vegetables",
      foodsToReduce: 
        "Butter and added fat Pickles, sour cream, and cheese Vinegar in salad dressing Alcoholic and fermented foods Coffee Oily, hot, salty, and heavy foods Egg yolks, nuts, hot spices, honey, and hot drinks",
      foodPlan: {
        vegetables: {
          best: [
            "Sweet and bitter vegetables",
            "Asparagus",
            "Broccoli",
            "Brussels sprouts",
            "Cabbage",
            "Radishes",
            "Cauliflower",
            "Celery",
            "Cucumber",
            "Green beans",
            "Green (sweet) peppers",
            "Leafy green vegetables",
            "Lettuce",
            "Mushrooms",
            "Okra",
            "Parsley",
            "Peas",
            "Potatoes",
            "Sprouts",
            "Squash",
            "Sweet potatoes",
            "Zucchini",
            "Carrot",
            "Spinach",
          ],
          moderation: [
            "Eggplant",
            "Onion",
            "Tomatoes",
            "Hot peppers",
            "Chilies",
            "Beets",
          ],
        },
        fruits: {
          best: [
            "Bananas",
            "Avocados",
            "Cherries",
            "Coconuts",
            "Figs",
            "Mangoes",
            "Melons",
            "Oranges",
            "Pears",
            "Pineapples",
            "Plums",
            "Prunes",
            "Raisins",
          ],
          moderation: [
            "Apricot",
            "Apples",
            "Berries",
            "Sour cherries",
            "Grapefruit",
            "Raw papaya",
            "Dark grapes",
            "Peaches",
            "Persimmon",
            "Pineapples",
          ],
        },
        grains: {
          best: ["Barley", "Oats", "Wheat", "White rice (preferably basmati)"],
          moderation: ["Brown rice", "Corn", "Millet", "Rye"],
        },
        dairy: {
          best: [
            "Butter",
            "Egg whites",
            "Ghee",
            "Milk",
            "Fruit sorbets (not sour)",
          ],
        },
        meats: {
          best: [
            "Chicken",
            "Shrimp",
            "Turkey",
            "River fish (all in small amounts)",
          ],
        },
        beans: {
          best: [
            "Chickpeas",
            "Mung beans",
            "Red lentils",
            "Tofu and other soybean products (not fermented)",
          ],
        },
        oils: {
          best: ["Olive", "Soy", "Sunflower", "Grapeseed oil"],
        },
        nutsAndSeeds: {
          best: ["Coconut", "Pumpkin seeds", "Sunflower seeds", "Flaxseeds"],
        },
        sweeteners: {
          best: ["All are acceptable except honey and molasses"],
        },
        herbsAndSpices: {
          inModeration: [
            "Cardamom",
            "Cilantro (green coriander)",
            "Cinnamon",
            "Coriander seed",
            "Dill",
            "Fennel",
            "Mint",
            "Saffron",
            "Turmeric",
            "Cumin",
            "Black pepper",
          ]
        }
      }
    },
    Kapha: {
      description:
        "Kaphas tend to have heavier, earthier bodies than other types, and tend to store watery substances like fluids and fat more readily. They are naturally calm and attached; A Kapha speaks slowly and melodically. They sometimes have watery dreams, and tend to have elimination that is thick and heavy.",
      qualities:
        "Heavy, slow, steady, solid, cold, soft, and oily. Kapha governs the structure of the body. It is the principle that holds the cells together and forms the muscle, fat, bone, and provides immunity. The primary function of Kapha is protection.Kaphas have a strong build and excellent stamina as well as smooth, radiant skin. They sleep soundly and have regular digestion. But when Kapha build to excess they can gain weight, retain fluid, and allergies manifest in the body. When imbalances, Kaphas may become overweight, sleep excessively, become lethargic, and suffer from asthma, diabetes, and depression.",
      physicalCharacteristics:
        "Kaphas tend to have heavier, earthier bodies than other types, and tend to store watery substances like fluids and fat more readily. They are naturally calm and attached; A Kapha speaks slowly and melodically. They sometimes have watery dreams, and tend to have elimination that is thick and heavy.",
      emotionalCharacteristics:
        "Kaphas are naturally calm, thoughtful, and loving. They have an inherent ability to enjoy life and are comfortable with routine. Kaphas are strong, loyal, patient, steady, and supportive. They love music, reading, and relaxing. When imbalanced, they tend to hold on to things, jobs, and relationships long after they are no longer present. They display excessive attachment. When imbalanced, Kaphas become stubborn and resist change.",
      stressResponse:
        "When they feel overwhelmed or stressed, their response is: “I don’t want to be involved.”",
      balanceTips: [
        "Wake early (before dawn), sleep less, and avoid daytime naps",
        "Engage in plenty of physical exercise daily",
        "Participate in activities that stimulate body and mind",
        "Incorporate excitement and variety in life",
        "Be willing to break away from stagnation and old habits",
        "Prefer warm and dry surroundings",
      ],
      favorableFoods:
        'Warm, light, and dry food is favorable, or cooked light meals. Kaphas do best with lightly cooked foods or raw fruits and vegetables. Any food that is spicy is good for Kaphas such as very hot Mexican or Indian food, especially in winter. Dry cooking methods (baking, broiling, grilling, sautéing) are preferable for Kaphas over moist cooking such as steaming, boiling, or poaching. Foods such as romaine lettuce, endive, or tonic water are good for stimulating the Kapha appetite, while preferred spices are cumin, fenugreek, sesame seed, and turmeric.',
      foodsToReduce:
        "Kaphas need to watch the consumption of too many sweet and fatty foods, and need to watch their salt consumption as well, as it can lead to fluid retention. They should avoid deep-fried foods. A typical Kapha tendency is to overeat: The main meal should be at the middle of the day, and only a light, dry meal in the evening. In general, Kaphas should avoid sugar, fats, and dairy products, skip chilled foods and drinks, and use ghee and oils in small amounts only.",
      foodPlan: {
        vegetables: {
          best: [
            "Asparagus",
            "Beets",
            "Broccoli",
            "Brussels sprouts",
            "Cabbage",
            "Carrots",
            "Cauliflower",
            "Celery",
            "Eggplant",
            "Garlic",
            "Leafy green vegetables",
            "Lettuce",
            "Mushrooms",
            "Okra",
            "Onions",
            "Peas",
            "Peppers",
            "Potatoes",
            "Radishes",
            "Spinach",
            "Sprouts",
          ],
          moderation: ["Cucumbers", "Sweet potatoes", "Tomatoes", "Zucchini"],
        },
        fruits: {
          best: [
            "Apples",
            "Apricots",
            "Berries",
            "Cherries",
            "Cranberries",
            "Papaya",
            "Pears",
            "Prunes",
            "Pomegranates",
            "Grapefruit",
          ],
          moderation: ["Dates", "Fresh figs", "Bananas", "Coconuts", "Mangoes"],
        },
        grains: {
          best: [
            "Barley",
            "Buckwheat",
            "Corn",
            "Millet",
            "Oats",
            "Rye",
            "Basmati rice",
          ],
          moderation: ["Rice", "Wheat"],
        },
        dairy: {
          best: [
            "Warm skim milk",
            "Small amounts of whole milk",
            "Eggs (not fried or cooked with butter)",
            "Goat’s milk",
            "Soy milk",
            "Camel milk",
          ],
          moderation: ["Egg yolks"],
        },
        meats: {
          best: ["Chicken", "Turkey (all in small amounts)", "Lean fish"],
          moderation: ["Shrimp", "Red meat"],
        },
        beans: {
          best: ["All legumes"],
          moderation: ["Kidney beans", "Tofu"],
        },
        oils: {
          best: [
            "Almond",
            "Sunflower",
            "Olive oil",
            "Grapeseed oil (all in small quantities)",
          ],
        },
        sweeteners: {
          inModeration: ["All in very small quantities"],
        },
        nutsAndSeeds: {
          best: ["Sunflower seeds", "Pumpkin seeds", "Flax seeds"],
        },
        herbsAndSpices: {
          inModeration: ["Cumin", "Fenugreek", "Sesame", "Ginger"],
        }
      }
    }
  };


  const handleSave = async () =>{

    try{
      const user = await account.get();
      console.log(user.name)
      console.log(user.email)
      console.log(doshaData[dosha].foodPlan)
      const promise = await databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
       {
        "username": user.name,
        "foodPlan":JSON.stringify(doshaData[dosha].foodPlan)
       }
      )
    }
    catch(error){
      console.log(error);
    }
  };
  const handleDownloadPDF = () => {
    const input = document.getElementById("dosha-info");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 210; // A4 size width in mm
      const pageHeight = 297; // A4 size height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save(`${dosha}-info.pdf`);
    });
  };
  return (
    <>
    <div
      id="dosha-info"
      className="w-full mx-auto p-6 bg-green-50 rounded-lg shadow-md"
    >
      {/* Your existing component content */}
      <div className="w-full mx-auto p-6 bg-green-50 rounded-lg shadow-md">
        <div className="mb-6">
          <div className="bg-green-100 text-green-800 rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-4 ">{dosha}</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <p>{doshaData[dosha].description}</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="rounded-lg p-4 bg-green-100 text-green-800">
            <h3 className="text-xl font-semibold mb-2">Qualities</h3>
            <p>{doshaData[dosha].qualities}</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="bg-green-100 text-green-800 rounded-lg p-4 ">
            <h3 className="text-xl font-semibold mb-2">
              Physical Characteristics
            </h3>
            <p>{doshaData[dosha].physicalCharacteristics}</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="bg-green-100 text-green-800 rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">
              Emotional Characteristics
            </h3>
            <p>{doshaData[dosha].emotionalCharacteristics}</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="bg-green-100 text-green-800 rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Stress Response</h3>
            <p>{doshaData[dosha].stressResponse}</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="bg-green-100 text-green-800 rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Balance Tips</h3>
            <ul className="list-disc pl-6">
              {doshaData[dosha].balanceTips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <div className="bg-green-100 text-green-800 rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Favorable Foods</h3>
            <ul className="list-disc pl-6">
              {doshaData[dosha].favorableFoods}
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <div className="bg-green-100 text-green-800 rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Foods to Reduce</h3>
            <ul className="list-disc pl-6">
              {doshaData[dosha].foodsToReduce}
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <div className="bg-green-100 text-green-800 rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Food Plan</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(doshaData[dosha].foodPlan).map(
                (category, index) => (
                  <div key={index}>
                    <h4 className="font-semibold mb-2">{category}</h4>
                    <ul className="list-disc pl-6">
                      {Object.keys(doshaData[dosha].foodPlan[category]).map(
                        (subCategory, index) => (
                          <li key={index}>
                            <span className="font-semibold">
                              {subCategory.charAt(0).toUpperCase() +
                                subCategory.slice(1)}
                              :
                            </span>{" "}
                            {doshaData[dosha].foodPlan[category][
                              subCategory
                            ].join(", ")}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )
              )}
            </div>
            {/* Add YouTube video section */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">
                Recommended YouTube Video
              </h3>
              {dosha === "Vata" && (
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/aXr3E-AqVKs"
                  title="Vata Dosha"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
              {dosha === "Pitta" && (
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/3EjPDMNeHfM"
                  title="Pitta Dosha"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
              {dosha === "Kapha" && (
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/1eGG58yYM54"
                  title="Kapha Dosha"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
          <button
            className="bg-blue-500 mt-3 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
            onClick={handleSave}
          >
            Save this to my profile
          </button>
        </div>
      </div>
      <button
        className="bg-blue-500 mt-3 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
        onClick={handleDownloadPDF}
      >
        Download as PDF
      </button>
    </div>
  </>

  );
};

export default DoshaInfo;
