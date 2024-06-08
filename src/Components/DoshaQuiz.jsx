import React, { useState } from "react";
import DoshaInfo from "./DoshaInfo";
const DoshaQuiz = () => {
    
  const [answers, setAnswers] = useState({});
  const [doshaResult, setDoshaResult] = useState("");

  const handleAnswerChange = (event, questionId) => {
    setAnswers({
      ...answers,
      [questionId]: event.target.value,
    }); 
    
  
  };
  const questions = [
    {
      id: 1,
      text: "Which best describes your anatomy?",
      answers: [
        { dosha: "Vata", characteristic: "thin" },
        { dosha: "Pitta", characteristic: "average" },
        { dosha: "Kapha", characteristic: "big" },
      ],
      image_url:
        "https://ultracarepro.in/wp-content/uploads/2018/06/514521044.jpg",
    },
    {
      id: 2,
      text: "How would you describe your body weight?",
      answers: [
        { dosha: "Vata", characteristic: "low" },
        { dosha: "Pitta", characteristic: "average" },
        { dosha: "Kapha", characteristic: "overweight" },
      ],
      image_url:
        "https://c.ndtvimg.com/2021-03/m9kqc43g_weight_625x300_04_March_21.jpg",
    },
    {
      id: 3,
      text: "What is the condition of your skin?",
      answers: [
        { dosha: "Vata", characteristic: "dry, rough, cool, brownish" },
        {
          dosha: "Pitta",
          characteristic: "soft, oily, warm, bright, red, yellow",
        },
        { dosha: "Kapha", characteristic: "thick, oily, cool, pale, white" },
      ],
      image_url:
        "https://media.istockphoto.com/id/1134026335/photo/asian-women-are-going-to-use-a-facial-foam-to-wash-cosmetics-off-the-face.jpg?s=2048x2048&w=is&k=20&c=gHrHbx9f73VNjSLhCce-pTTOjTTJL4JJbxocPOBqyxo=",
    },
    {
      id: 4,
      text: "Describe your hair.",
      answers: [
        { dosha: "Vata", characteristic: "black, dry, curled" },
        {
          dosha: "Pitta",
          characteristic: "soft, oily, blond, premature greying, red",
        },
        { dosha: "Kapha", characteristic: "strong, oily, wavy, well-formed" },
      ],
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpig0N6f9FBFD6kzLKWnooh7TCF7ZS67D-kimm69eCvg&s",
    },
    {
      id: 5,
      text: "How would you describe your teeth?",
      answers: [
        {
          dosha: "Vata",
          characteristic: "protruding, gaps, crooked, receding gums",
        },
        {
          dosha: "Pitta",
          characteristic: "average size, soft or bleeding gums",
        },
        { dosha: "Kapha", characteristic: "strong, white, full, well-formed" },
      ],
      image_url:
        "https://media.istockphoto.com/id/519704410/photo/toddler-with-toothbrush.jpg?s=2048x2048&w=is&k=20&c=OIUnM4gMsLowl0oxawRKHSd2YpeaKSZYARqiRkt4z_M=",
    },
    {
      id: 6,
      text: "What are the characteristics of your eyes?",
      answers: [
        { dosha: "Vata", characteristic: "small, dry, active, brown, black" },
        {
          dosha: "Pitta",
          characteristic: "sharp, penetrating, green, gray, yellow",
        },
        {
          dosha: "Kapha",
          characteristic: "large, attractive, blue, strong lashes",
        },
      ],
      image_url:
        "https://cdn-prod.medicalnewstoday.com/content/images/articles/321/321712/brown-eye.jpg",
    },
    {
      id: 7,
      text: "How would you describe your appetite?",
      answers: [
        { dosha: "Vata", characteristic: "irregular" },
        { dosha: "Pitta", characteristic: "good, lively, excessive" },
        { dosha: "Kapha", characteristic: "dull, balanced" },
      ],
      image_url:
        "https://media.istockphoto.com/id/1385400389/photo/portrait-of-smiling-latin-lady-holding-spoon-and-plate.jpg?s=2048x2048&w=is&k=20&c=D0G65FhPb9rddvmgffOW1AsZjBTi2Ek4qTkqkksSZyI=",
    },
    {
      id: 8,
      text: "Are you inclined to certain types of illnesses?",
      answers: [
        { dosha: "Vata", characteristic: "nervous disorders, pain" },
        { dosha: "Pitta", characteristic: "heat, infection, inflammation" },
        { dosha: "Kapha", characteristic: "excess fluid, mucus" },
      ],
      image_url:
        "https://media.istockphoto.com/id/1360229262/photo/sad-child-suffering-from-the-flu.jpg?s=2048x2048&w=is&k=20&c=CrZCVnJPfT-0sSnc-U59Xz3k3Thyh0061PoRy7doe50=",
    },
    {
      id: 9,
      text: "How thirsty are you usually?",
      answers: [
        { dosha: "Vata", characteristic: "variable" },
        { dosha: "Pitta", characteristic: "excessive" },
        { dosha: "Kapha", characteristic: "somewhat" },
      ],
      image_url:
        "https://images.unsplash.com/photo-1624948465121-96e87ae34a87?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 10,
      text: "How physically active are you?",
      answers: [
        { dosha: "Vata", characteristic: "very active" },
        { dosha: "Pitta", characteristic: "average" },
        { dosha: "Kapha", characteristic: "lethargic" },
      ],
      image_url:
        "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 11,
      text: "Describe your spirit.",
      answers: [
        { dosha: "Vata", characteristic: "restless, curious" },
        { dosha: "Pitta", characteristic: "aggressive, intelligent" },
        { dosha: "Kapha", characteristic: "quiet, slow, accommodating" },
      ],
      image_url:
        "https://media.istockphoto.com/id/1182206019/photo/energetic-positive-young-mixed-race-lady-stretching-body.jpg?s=2048x2048&w=is&k=20&c=O2L8kFo1yZ_e5XdbcyPw40qOpKIHy9-ulqt8hbB9B7I=",
    },
    {
      id: 12,
      text: "What negative emotions do you experience frequently?",
      answers: [
        {
          dosha: "Vata",
          characteristic: "scary, uncertain, anxiously restless",
        },
        { dosha: "Pitta", characteristic: "aggressive, irritable, jealous" },
        { dosha: "Kapha", characteristic: "complacent" },
      ],
      image_url:
        "https://media.istockphoto.com/id/1281210009/photo/depressed-asian-woman-in-deep-many-thoughts-having-problem-with-over-thinking.jpg?s=2048x2048&w=is&k=20&c=sFvIflmdbrHUDgGGvm0WoyODetOpGbmlcZwoqVIX9q0=",
    },
    {
      id: 13,
      text: "How would you describe your faith or belief?",
      answers: [
        { dosha: "Vata", characteristic: "wavering" },
        { dosha: "Pitta", characteristic: "resolute" },
        { dosha: "Kapha", characteristic: "steady, loyal" },
      ],
      image_url:
        "https://plus.unsplash.com/premium_photo-1682097440558-16f332f4528a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 14,
      text: "How is your memory?",
      answers: [
        {
          dosha: "Vata",
          characteristic: "good short-term, bad long-term memory",
        },
        { dosha: "Pitta", characteristic: "good" },
        { dosha: "Kapha", characteristic: "slow but persistent" },
      ],
      image_url:
        "https://media.istockphoto.com/id/1093665028/photo/brunette-student-girl-sitting-on-green-grass-in-park.jpg?s=1024x1024&w=is&k=20&c=n7eTqiB-HlL0QkZ8_Fu5AuAoUuMxq1I1YSUtpqLuTYE=",
    },
    {
      id: 15,
      text: "What type of dreams do you usually have?",
      answers: [
        {
          dosha: "Vata",
          characteristic: "of flying, jumping, running, scared",
        },
        {
          dosha: "Pitta",
          characteristic: "fiery, angry, passionate, colourful",
        },
        {
          dosha: "Kapha",
          characteristic: "water, from the sea, swimming",
        },
      ],
      image_url:
        "https://sleepycat.in/wp-content/uploads/2023/08/0dc4d5771cc9a13378fa6ea13293a7a8.jpg",
    },
    {
      id: 16,
      text: "How do you sleep?",
      answers: [
        { dosha: "Vata", characteristic: "little, interrupted" },
        { dosha: "Pitta", characteristic: "little, but sound" },
        { dosha: "Kapha", characteristic: "severe,persistent,excessive" },
      ],
      image_url:
        "https://media.istockphoto.com/id/1505093660/photo/young-arabic-man-sleeping-in-bed-at-home-at-night-people-bedtime-and-rest-concept.jpg?s=2048x2048&w=is&k=20&c=PQtwqtqD49XXHyhyj9b3G5-jwlfU9AWbe6f3qpc_Sng=",
    },
    {
      id: 17,
      text: "How is your pulse?",
      answers: [
        { dosha: "Vata", characteristic: "little, interrupted" },
        { dosha: "Pitta", characteristic: "little, but sound" },
        { dosha: "Kapha", characteristic: "severe,persistent,excessive" },
      ],
      image_url:
        "https://t3.ftcdn.net/jpg/01/63/99/04/360_F_163990416_ZPGpp53PzyywU87iGEC7CJr4LCQ4Cnbc.jpg",
    },
  ];

  const calculateDosha = () => {
    // Define dosha characteristics
    const doshas = {
      Vata: {
        characteristics: [
          "thin",
          "irregular",
          "dry, rough, cool, brownish",
          "black, dry, curled",
          "protruding, gaps, crooked, receding gums",
          "small, dry, active, brown, black",
          "nervous disorders, pain",
          "variable",
          "dry, hard, constipation",
          "very active",
          "restless, curious",
          "scary, uncertain, anxiously restless",
          "wavering",
          "good short-term, bad long-term memory",
          "of flying, jumping, running, scared",
          "little, interrupted",
          "little, interrupted",
        ],
      },
      Pitta: {
        characteristics: [
          "average",
          "good",
          "soft, oily, warm, bright, red, yellow",
          "soft, oily, blond, premature greying, red",
          "average size, soft or bleeding gums",
          "sharp, penetrating, green, gray, yellow",
          "heat, infection, inflammation",
          "excessive",
          "soft, greasy, loose",
          "average",
          "aggressive, intelligent",
          "aggressive, irritable, jealous",
          "resolute",
          "good",
          "fiery, angry, passionate, colourful",
          "little, but sound",
          "little, but sound",
        ],
      },
      Kapha: {
        characteristics: [
          "big",
          "dull",
          "thick, oily, cool, pale, white",
          "strong, oily, wavy, well-formed",
          "strong, white, full, well-formed",
          "large, attractive, blue, strong lashes",
          "excess fluid, mucus",
          "somewhat",
          "bulky, greasy, heavy, slow",
          "lethargic",
          "quiet, slow, accommodating",
          "complacent",
          "steady, loyal",
          "slow but persistent",
          "water, from the sea, swimming, romantic",
          "severe, persistent, excessive",
          "severe, persistent, excessive",
        ],
      },
    };

    // Count occurrences of characteristics in user answers
    const characteristicCounts = {};
    for (const [questionId, answer] of Object.entries(answers)) {
      for (const dosha of Object.keys(doshas)) {
        if (doshas[dosha].characteristics.includes(answer)) {
          characteristicCounts[dosha] = (characteristicCounts[dosha] || 0) + 1;
        }
      }
    }

    // Find dosha with the most frequent characteristics
    let maxDosha = "Kapha"; // Default to Kapha if all counts are 0
    let maxCount = 0;
    for (const [dosha, count] of Object.entries(characteristicCounts)) {
      if (count > maxCount) {
        maxCount = count;
        maxDosha = dosha;
      }
    }

    setDoshaResult(maxDosha);
  };

  const handleSubmit = () => {
    calculateDosha();
  };

  const handleReset = () => {
    setAnswers({});
    setDoshaResult("");

    // Clear radio inputs
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach((input) => {
      input.checked = false;
    });
  };
  return (
   <>
    <div className="flex justify-center items-center bg-green-50">
        <div>
          <h1 className="text-2xl font-bold mb-4 text-green-600">Ayurvedic Dosha Quiz</h1>
          {questions.map((question) => (
            <div
              key={question.id}
              className="rounded-xl overflow-hidden flex shadow hover:shadow-md max-w-xl bg-green-900  text-white cursor-pointer mb-4 justify-center items-center "
            >
              <div className="w-7/12 pl-3 p-3 text-text1 flex flex-col justify-center">
                <p className="text-base mb-2 font-bold s">{question.text}</p>
                <div className="flex flex-col mt-2">
                  {question.answers.map((answer) => (
                    <label
                      key={answer.dosha}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={answer.characteristic}
                        onChange={(event) =>
                          handleAnswerChange(event, question.id)
                        }
                      />
                      <span>{answer.characteristic}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="lg:flex flex w-5/12 p-2">
                <img
                  src={question.image_url}
                  className="rounded-xl object-cover w-full h-full"
                  alt="Nature"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {doshaResult ? (
        <div className="flex justify-center bg-green-50">
          <button
            className="bg-green-900 text-green-100 py-2 px-4 rounded-md hover:bg-red-600 transition-colors duration-300"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      ) : (
        <div className="flex justify-center bg-green-50">
          <button
           disabled={Object.keys(answers).length !== questions.length}
           className={`bg-green-800 text-green-100 py-2 px-4 rounded-md ${
            Object.keys(answers).length !== questions.length
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-600 transition-colors duration-300"
          }`}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      )}
      {doshaResult && (
        <div className="mt-4 ">
          <div className="flex justify-center items-center bg-green-50">
            <p className="font-semibold">Calculated Dosha: {doshaResult}</p>
          </div>
          <div>
            <DoshaInfo dosha={doshaResult} />
          </div>
        </div>
      )}
    </>
  );
};

export default DoshaQuiz;
