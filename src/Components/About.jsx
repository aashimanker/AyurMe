import React from 'react'
import "./About.css"

function About() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>About Us</title>
      <link rel="stylesheet" href="about1.css" />
      <main>
        <section className="about-image">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2023/5/311973644/OF/YH/UJ/112376604/ayurvedic-immunity-booster.jpg"
            alt="Company Image"
          />
        </section>
        <section className="about-boxes">
          <h2>What is AyurMe?</h2>
          <div className="about-box">
            <p className="para">
              Ayurveda, originating over 3,000 years ago in India, is a holistic
              system known as the "science of life," aiming to balance mind,
              body, and spirit. It promotes harmony with nature and oneself,
              aiming to prevent illness, heal the sick, and preserve life by
              balancing the three doshas: Vata, Pitta, and Kapha. Ayurvedic
              herbs are renowned for their healing properties, improving
              vitality, purifying the body, boosting mental health, aiding
              digestion, and aiding in weight management. AyurMe is a
              contemporary application of Ayurvedic principles, focusing on
              personalized wellness routines tailored to individual needs,
              incorporating diet, lifestyle, and herbal remedies.
            </p>
          </div>
          <h2>All About AyurMe</h2>
          <div className="about-box">
            <h3>Indian recepies</h3>
            <p className="content">
              From the fragrant biryanis of the North to the spicy curries of
              the South, Indian cuisine is a mosaic of flavors that tantalizes
              the taste buds. Our collection is a tribute to the diversity and
              richness of Indian food, offering recipes that cater to beginners
              and seasoned cooks alike. <br />
            </p>
            <h4>What You'll Find Here</h4>
            <p className="content">
              {" "}
              Easy-to-Follow Recipes: Each recipe comes with a detailed list of
              ingredients and step-by-step preparation procedures, making
              cooking a breeze. Variety for Every Meal: Whether you're looking
              for a quick breakfast, a hearty lunch, or a sumptuous dinner,
              we’ve got you covered. <br />
              Health and Nutrition: We believe in the power of home-cooked
              meals. Our recipes are not just delicious but also balanced and
              nutritious. A Taste of Tradition <br />
              For those who love the authenticity of traditional Indian cooking,
              our collection includes classic recipes that have been passed down
              through generations. Experience the true essence of Indian flavors
              right from your kitchen.{" "}
            </p>{" "}
            <p />
          </div>
          <br />
          <div className="about-box">
            <h3>Calorie Calculator</h3>
            <p className="content">
              {" "}
              Track Your Calories with Ease <br />
              Embark on a journey of mindful eating with our comprehensive
              calorie calculator, designed specifically for the rich and diverse
              array of Indian food items. Whether you’re a fitness enthusiast,
              someone on a specific diet plan, or just curious about the
              nutritional content of your meals, our calculator is here to
              assist you.{" "}
            </p>
            <h4>What our calorie calculator offers?</h4>
            <p className="content">
              Detailed Nutritional Information: <br />
              Get insights into not just the calories, but also the
              macronutrients like carbs, proteins, and fats in each dish. <br />
              Customizable Portions: <br /> Whether it's a single serving or a
              family-sized meal, adjust the portion sizes to get accurate
              calorie counts. <br />
            </p>
          </div>
          <br />
          <div className="about-box">
            <h3>Dosha Analyzer</h3>
            <p className="content">
              {" "}
              Ayurvedic Dosha Calculator! <br />
              Embark on a journey of self-discovery with our Ayurvedic Dosha
              calculator. Ayurveda, the ancient Indian science of life, teaches
              that health is maintained by the balance of three fundamental
              bodily bio-elements known as Doshas: Vata, Pitta, and Kapha. Our
              calculator is designed to help you understand your predominant
              Dosha based on your physical and emotional attributes.{" "}
            </p>
            <h4>How It Works?</h4>
            <p className="content">
              Simple Questionnaire: Fill out a straightforward form about your
              body conditions and habits. <br />
              Instant Analysis: Our calculator processes your responses to
              determine your dominant Dosha. <br />
              Benefits of Knowing Your Dosha <br />
              Improved Well-being: Aligning your diet and lifestyle with your
              Dosha can enhance your overall health. <br />
              Customized Diet Plans: Eat the right foods that suit your body
              type to feel energized and rejuvenated. <br />
            </p>
          </div>
          <br />
          <div className="about-box1">
            <h4>Join Our Community</h4>
            <p>
              {" "}
              We believe in the power of collective wisdom. Share your
              experiences, learn from others, and become part of a community
              that supports each other's journey towards a balanced life.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default About