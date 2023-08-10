import Link from "next/link";
import React from "react";

function SignIn() {
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign in</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
            alt="key pic"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input
              className=" mb-6 w-full px-4  py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              type="email"
              id="email"
              placeholder="Email address"
            />
            <div className="relative mb-6">
              <input
                className="w-full px-4  py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                type="text"
                id="password"
                placeholder="Password"
              />
            </div>

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg"></div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg "
            >
              Sign in
            </button>

            <div className="my-4 items-center before:border-t flex before:flex-1 before:border-gray-300 after:border-t  after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>

            {/* SIGN IN WITH GOOGLE */}

            {/* AICI O SA VINA UN ALT COMP SPER CA PANA SAMBATA SA TERMIN CU AUTENTIFICAREA */}
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
