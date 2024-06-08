import React,{ useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Navbar from './Components/Navbar';
import Signin from './Components/Signin';
import Register from './Components/Register';
import LandingPage from './Pages/LandingPage';
import DoshaQuiz from './Components/DoshaQuiz';
import NutritionAnalyzer from './Components/NutritionAnalyzer';
import RecipeSearch from './Components/RecipeSearch';
import About from './Components/About';


function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
    <Router>
      <div>
        {isLoggedIn && <Navbar setIsLoggedIn = {setIsLoggedIn}/>} {/* Render Navbar only if isLoggedIn is true */}
        {console.log(isLoggedIn)}
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/Signin" element={<Signin setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/DoshaQuiz" element={<DoshaQuiz/>}/>
          <Route path="/NutritionAnalyzer" element={<NutritionAnalyzer/>}/>
          <Route path="/RecipeSearch" element={<RecipeSearch/>}/>
          {/* <Route path="/Dashboard" element={<Dashboard/>}/> */}
          <Route path="/About" element={<About/>}/>
          {/* Add more routes for other components */}
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
