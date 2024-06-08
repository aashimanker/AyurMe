import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./style_main.css"

function LandingPage() {
    const navigate = useNavigate();
    const handleSubmit = ()=>{
        navigate("/Signin");
    }
  return (
    <>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style_main.css" />
    <title>Transitioning Background with Content in Box</title>
    <div className="Section_top">
      <div className="box">
        <div className="content">
          <h1>Welcome to the Path of Wellness</h1>
          <h2>Embrace the Wisdom of Ayurveda for Holistic Health</h2>
          <button onClick={handleSubmit} className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg focus:outline-none transition-colors duration-500 ease-in-out'>SIGN IN</button>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default LandingPage