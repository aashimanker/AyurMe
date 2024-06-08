import React , {useState} from 'react'
import { account } from '../appwrite/config';
import {useNavigate} from "react-router-dom";

function Register() {

    const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name=="" || password=="" || email==""){
        alert("Please enter correct details")
    }
    else{
        register()
        navigate("/Signin")
    }
    console.log(`Submitted: ${email}, ${name}, ${password}`);
    // Add your registration logic here
  };

  const register = async() =>{
    try{
        const user = await account.create('unique()',email,password,name)
        console.log(user)
    }
    catch(error){
        console.log(error)
    }
  }

  const handleLogIn = async() =>{
    navigate("/Signin")
  }
  return (
    <>
        <div className="h-full bg-gray-400 dark:bg-gray-900">
  {/* Container */}
  <div className="mx-auto">
    <div className="flex justify-center px-6 py-12">
      {/* Row */}
      <div className="w-full xl:w-3/4 lg:w-11/12 flex">
        {/* Col */}
        <div
          className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/1279763992/photo/healthy-food-for-lower-cholesterol-and-heart-care-shot-on-wooden-table.jpg?s=1024x1024&w=is&k=20&c=VZKwtYDHf_wFK6-J3mE68Q_uqGuXiJP5nZzFiby44Bo=")'
          }}
        />
        {/* Col */}
        <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
          <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">
            Create an Account!
          </h3>
          <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
            <div className="mb-4 ">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                  htmlFor="Name"
                >
                 Name
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="Name"
                  type="text"
                  placeholder="Name"
                  value={name}
              onChange={(e) => setName(e.target.value)}
              required
                />
              </div>
            </div>
            <div className="mb-4 ">
            <div className="mb-4 md:mr-2 md:mb-0">
              <label
                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                required
                value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            </div>
            <div className="mb-4  ">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="text-xs italic text-red-500">
                  Please choose a password.
                </p>
              </div>
              
            </div>
            <div className="mb-6 text-center">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSubmit}
              >
                Register Account
              </button>
            </div>
            <hr className="mb-6 border-t" />
            <div className="text-center">
              <a
                className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                onClick={handleLogIn}
              >
                Already have an account? Login!
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
  )
}

export default Register