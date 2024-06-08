import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { account } from '../appwrite/config'
import { useNavigate } from 'react-router-dom'
import logo from "../Logo/logo.jpg"

function Navbar({setIsLoggedIn}) {

    const navigate = useNavigate()
    const onLogout = async ()=>{
        try{
            const user = account.deleteSession('current')
            setIsLoggedIn(false)
            navigate("/")
            
          }
          catch(error){
            console.log(error)
          }
    }
  return (
  
  <header className="shadow sticky z-50 top-0">
                <nav className="bg-gray-800 border-gray-200 px-4 lg:px-6 py-2.5">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <Link to="/" className="flex items-center">
                            <img
                                src={logo}
                                className="mr-2 h-12"
                                alt="Logo"
                            />
                        </Link>
                        <div className="flex items-center lg:order-2">
                            <Link
                                to="/"
                                className="text-white  hover:bg-orange-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                onClick={onLogout}
                            >
                                Log out
                            </Link>
                            <Link
                                to="/Home"
                                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Get started
                            </Link>
                        </div>
                        <div
                            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                            id="mobile-menu-2"
                        >
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <NavLink
                                    to="/Home"
                                        className={({isActive}) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-orange-700":"text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                    to="/about"
                                        className={({isActive}) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-orange-700":"text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                    to="/dashboard"
                                        className={({isActive}) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-orange-700":"text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Dashboard
                                    </NavLink>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
  )
}

export default Navbar