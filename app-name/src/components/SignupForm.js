import React from "react";

function SignupForm(props) {
  return (
    <section className="flex items-center justify-center flex-1 pt-12 pb-12 ">
      <section class="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full">
        <p class="text-gray-600 text-3xl">Create an account.</p>
        <form id="signUpBtn" className="flex flex-col">
          <div className="pt-3 mb-6 bg-gray-200 rounded">
            <label
              className="block mb-2 ml-3 text-sm font-bold text-gray-700"
              for="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 pb-3 text-gray-700 transition duration-500 bg-gray-200 border-b-4 border-gray-300 rounded focus:outline-none focus:border-red-900"
            />
          </div>
          <div className="pt-3 mb-6 bg-gray-200 rounded">
            <label
              className="block mb-2 ml-3 text-sm font-bold text-gray-700"
              for="lastName"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full px-3 pb-3 text-gray-700 transition duration-500 bg-gray-200 border-b-4 border-gray-300 rounded focus:outline-none focus:border-red-900"
            />
          </div>
          <div className="pt-3 mb-6 bg-gray-200 rounded">
            <label
              className="block mb-2 ml-3 text-sm font-bold text-gray-700"
              for="userName"
            >
              User Name
            </label>
            <input
              type="text"
              id="userName"
              className="w-full px-3 pb-3 text-gray-700 transition duration-500 bg-gray-200 border-b-4 border-gray-300 rounded focus:outline-none focus:border-red-900"
            />
          </div>
          <div className="pt-3 mb-6 bg-gray-200 rounded">
            <label
              className="block mb-2 ml-3 text-sm font-bold text-gray-700"
              for="email"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="w-full px-3 pb-3 text-gray-700 transition duration-500 bg-gray-200 border-b-4 border-gray-300 rounded focus:outline-none focus:border-red-900"
            />
          </div>
          <div className="pt-3 mb-6 bg-gray-200 rounded">
            <label
              className="block mb-2 ml-3 text-sm font-bold text-gray-700"
              for="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 pb-3 text-gray-700 transition duration-500 bg-gray-200 border-b-4 border-gray-300 rounded focus:outline-none focus:border-red-900"
            />
          </div>

          <div className="pt-3 mb-6 bg-gray-200 rounded">
            <label
              className="block mb-2 ml-3 text-sm font-bold text-gray-700"
              for="phone"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              className="w-full px-3 pb-3 text-gray-700 transition duration-500 bg-gray-200 border-b-4 border-gray-300 rounded focus:outline-none focus:border-red-900"
            />
          </div>

          <button
            className="py-2 font-bold text-white transition duration-200 bg-red-900 rounded shadow-lg hover:bg-red-800 hover:shadow-xl"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </section>
      
    </section>
    
  );
  

}

export default SignupForm;
