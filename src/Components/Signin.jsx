import React, { useState } from 'react';
import { account } from '../appwrite/config';
import { useNavigate } from 'react-router-dom';

export default function Signin({setIsLoggedIn}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email=="" || password==""){
        alert("invalid credentials")
    }
    else{
        login()
    }
    console.log(`Logged in with email: ${email} and password: ${password}`);
    // Add your login logic here

  };

  const login = async ()=>{
    try{
    const user = await account.createEmailPasswordSession(email,password)
    setIsLoggedIn(true)
    navigate("/Home")
    }
    catch(Error){
        console.log(Error)
    }
    
  }

  const handleRegister = () =>{
    navigate("/Register")
  }

  return (
  <>
    <div className="flex min-h-screen justify-center bg-gray-100 text-gray-900">
        <div className="m-0 flex max-w-screen-xl flex-1 justify-center bg-white shadow sm:m-10 sm:rounded-lg">
          <div className="p-6 sm:p-12 lg:w-1/2 xl:w-5/12">
            <div>
              <img
                src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
                className="mx-auto w-32"
              />
            </div>
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl font-extrabold xl:text-3xl">Sign In</h1>
              <div className="mt-8 w-full flex-1">
                <div className="flex flex-col items-center"></div>
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full rounded-lg border border-gray-200 bg-gray-100 px-8 py-4 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
                    type="email"
                    placeholder="Email"
                    value={email}
                onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="mt-5 w-full rounded-lg border border-gray-200 bg-gray-100 px-8 py-4 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
                    type="password"
                    placeholder="Password"
                    value={password}
                onChange={(e) => setPassword(e.target.value)}
                    
                  />
                  <button className="focus:shadow-outline mt-5 flex w-full items-center justify-center rounded-lg bg-indigo-500 py-4 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out hover:bg-indigo-700 focus:outline-none" onClick={handleSubmit}>
                    <svg
                      className="-ml-2 h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy={7} r={4} />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3"> Sign In </span>
                  </button>
                  <p className="mt-6 text-center text-xs text-gray-600">
                    I agree to abide by templatana's
                    <a
                      href="#"
                      className="border-b border-dotted border-gray-500"
                    >
                      {" "}
                      Terms of Service{" "}
                    </a>
                    and its
                    <a
                      href="#"
                      className="border-b border-dotted border-gray-500"
                    >
                      {" "}
                      Privacy Policy{" "}
                    </a>
                  </p>
                  <div className=" text-2xl font-semibold italic mt-5 px-8">
                    If not registered yet
                  </div>
                  <button className="focus:shadow-outline mt-5 flex w-full items-center justify-center rounded-lg bg-indigo-500 py-4 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out hover:bg-indigo-700 focus:outline-none" onClick={handleRegister}>
                    <svg
                      className="-ml-2 h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy={7} r={4} />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Register</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden flex-1 bg-white text-center lg:flex">
            <div
              className="m-12 w-full bg-contain bg-center bg-no-repeat xl:m-16"
              style={{
                backgroundImage:
                  // " url(./Pics/food.jpeg)",
                  'url("https://static.toiimg.com/photo/81995088.cms")',
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
