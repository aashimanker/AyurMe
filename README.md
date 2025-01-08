# AyurMe

AyurMe is a holistic web application designed to provide personalized Ayurvedic dietary and health recommendations. The platform combines the wisdom of Ayurveda with modern technology to offer a seamless user experience.

---

## Features

1. **User Authentication**  
   Securely manage user accounts, allowing for registration, login, and account management functionalities.

2. **Recipe Management**  
   - Search, view, save, and share recipes.
   - Access detailed information such as ingredients, preparation steps, cooking time, and nutritional content.

3. **Diet Recommendation System**  
   - Recommend diets based on Ayurvedic principles.
   - Tailor suggestions to user preferences, dietary restrictions, and health goals.

4. **Nutritional Analyzer**  
   - Analyze the nutritional content of recipes.
   - Calculate macronutrient and micronutrient quantities based on the ingredients.

5. **User Profile and Preferences**  
   - Set up user profiles with dietary preferences, allergies, and health conditions.
   - Personalize recipe recommendations and diet plans.

6. **Integration with External APIs**  
   - Utilize Spoonacular for recipes and Nutritionix for nutritional data.
   - Ensure access to comprehensive recipe data and nutritional information.

7. **Responsive Design**  
   - Ensure compatibility across desktops, tablets, and mobile devices.
   - Provide a seamless and intuitive user experience.

---

## Dosha Quiz Functionality

AyurMe includes a Dosha Quiz to determine the user’s dominant dosha (Kapha, Pitta, or Vata) based on their characteristics and preferences. Here's how it works:

1. **Definition of Dosha Characteristics**  
   Each dosha (Kapha, Pitta, Vata) has predefined characteristics stored in an object.

2. **Characteristics Counting**  
   - User answers are stored in an object.
   - The system checks each answer against dosha characteristics and increments the count for matching doshas.

3. **Finding the Dominant Dosha**  
   - Determine which dosha has the highest count.
   - Update the result dynamically based on the user's responses.

4. **Setting the Result**  
   The dominant dosha is displayed to the user, along with personalized recommendations.

---

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **External APIs**: Edamam Nutrition Analysis API
- **Styling**: Tailwind CSS

---

## Installation Guide

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/ayurme.git
   ```

2. **Navigate to the project directory**  
   ```bash
   cd ayurme
   ```

3. **Install dependencies**  
   ```bash
   npm install
   ```

4. **Start the development server**  
   ```bash
   npm start
   ```

5. **Backend Setup**  
   - Ensure you have Node.js installed.
   - Navigate to the backend directory and install dependencies.
     ```bash
     cd backend
     npm install
     ```
   - Start the backend server.
     ```bash
     npm start
     ```

6. **Environment Variables**  
   Create a `.env` file in the root directory and add your API keys and other configuration details.

---

## Usage

1. Register or log in to your account.
2. Take the Dosha Quiz to determine your dominant dosha.
3. Search for recipes and analyze their nutritional content.
4. View personalized diet plans and recommendations.
5. Save and share recipes with others.

---

## Contributing Guidelines

We welcome contributions! Follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push:
   ```bash
   git push origin feature-name
   ```
4. Ensure Your Code is Well-Documented
Include clear and concise comments for any new functionality, and update documentation if necessary.

5. Follow Coding Standards
Make sure your code adheres to the project's coding conventions and passes all tests before submission.

6. Collaborate with Reviewers
Be open to feedback and make necessary changes to your Pull Request (PR) based on the maintainers' suggestions.

7. Celebrate Your Contribution!
Once your PR is approved and merged, your contribution will become part of the project. 🎉

Thank you for taking the time to contribute to Queens Coffee! Together, we can make this project even better.
