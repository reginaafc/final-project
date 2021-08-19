import React from "react";

function LoginForm(props) {
  return (
    <section className="min-h-screen flex flex-col">
      <div className="flex flex-1 items-center justify-center">
        <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
          <form className="text-center">
            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
              Login
            </h1>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                for="email"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-red-900 transition duration-500 px-3 pb-3"
              />
            </div>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                for="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-red-900 transition duration-500 px-3 pb-3"
              />
            </div>
            <div className="py-2">
            <button className="bg-red-900 hover:bg-red-800 text-white font-bold py-2 w-60 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Login</button>
            </div>
          </form>
          <div className="text-center mt-12">
            <span>Don't have an account?</span>
            <a
              href="/signUp"
              class="font-light text-md text-red-600 underline font-semibold hover:text-red-800"
            >
              Create One
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
