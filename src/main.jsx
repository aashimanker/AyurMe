import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Register from './Components/Register.jsx'
import Dashboard from './Components/Dashboard.jsx'
import Signin from './Components/Signin.jsx'



// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//      <Route path = "/" element={<Signin/>}/>
//     <Route path="/Home" element={<Home/>}/>
//     <Route path = "/Register" element={<Register/>}/>
//     <Route path="/Dashboard" element={<Dashboard/>}/>
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}
    <App/>
  </React.StrictMode>,
)
