import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { account } from '../appwrite/config.js'
import Navbar from './Navbar.jsx'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard.jsx'
import './Homepage.css'


// Mini-project\src\css_files\Homepage.css
function Home() {
    useEffect(()=>{
        console.log(account)
    },[])

    
  return (
    <>
    <div className=''>
     <div className="main">
      
     <div class="test mt-5 bg-green-100 p-4 rounded-lg shadow-2xl">
    <h2 class="text-xl font-bold text-green-800 mb-2">Nourish Your Body, Mind, and Spirit</h2>
    <p class="text-green-700 mb-4">
        Our Ayurvedic diet plans are designed to increase your Prana (Life Force), Ojas (Vitality), and build Vyadhi Kshmatva (Immunity). With each meal, you’re not just eating; you’re aligning yourself with the rhythms of nature and your body’s unique constitution.
    </p>
    <h2 class="text-xl font-bold text-green-800 mb-2">Tailored to You</h2>
    <p class="text-green-700 mb-4">
        Every individual is unique, and so should be their diet. Our approach takes into account your Prakriti (Constitutional Type), ensuring that the foods you eat are perfect for your dosha, promoting digestion, preventing diseases, and maintaining overall health and wellness.
    </p>
    <h2 class="text-xl font-bold text-green-800 mb-2">Daily Rituals for Lifelong Vitality</h2>
    <p class="text-green-700 mb-4">
        Start your day with a warm embrace of water, awakening your digestion and preparing you for a breakfast that sustains. Enjoy a hearty lunch when the sun blesses your Agni (digestive fire) with its peak strength, and conclude with a light dinner that respects your body’s natural cycle for restful sleep. <br />
        <span class="block">Join Us on the Journey to Optimal Health</span>
        <span class="block">Begin your Ayurvedic journey today. Embrace a diet that's not just about eating right, it's about living right.</span>
    </p>
</div>

      <ul className="cards">
        <li className="cards_item">
          <div className="card">
            <div className="card_image"><img src="https://i.postimg.cc/bJKJjz8y/An-Ayurvedic-Guide-to-Healthy-Hair.jpg" alt="Dosha Calculator" /></div>
            <div className="card_content1">
              <h2 className="card_title">DOSHA CALCULATOR</h2>
              <p className="card_text">know what dosha you may have</p>
              <Link className="btn card_btn" to="/DoshaQuiz">
                calculate
              </Link>
            </div>
          </div>
        </li>
        <li className="cards_item">
          <div className="card">
            <div className="card_image"><img src="https://i.postimg.cc/QtZwLPwL/Wallmonkeys-FOT-23150920-24-WM101070-Food-Pyramid-Pie-Chart-Peel-and-Stick-Wall-Decals-H-x-24-in-W.jpg" alt="Calorie Analyzer" /></div>
            <div className="card_content1">
              <h2 className="card_title">CALORIE ANALYZER</h2>
              <p className="card_text">analyze the calories of the food you eat</p>
              <Link className="btn card_btn"
              to="/NutritionAnalyzer"
              >analyze</Link>
            </div>
          </div>
        </li>
        <li className="cards_item">
          <div className="card">
            <div className="card_image"><img src="https://i.postimg.cc/8kM2nQbq/Masala-Zone.jpg" alt="Find Recipes" /></div>
            <div className="card_content1">
              <h2 className="card_title">FIND RECIPES</h2>
              <p className="card_text">search for the Indian food you want to cook today</p>
              <Link className="btn card_btn"
              to="/RecipeSearch"
              >find</Link>
            </div>
          </div>
        </li>
      </ul>
      <h3 className="made_by text-green-600 font-semibold text-lg mt-4">happy health ♡</h3>

    </div>
    </div>
    </>
  )
}

export default Home