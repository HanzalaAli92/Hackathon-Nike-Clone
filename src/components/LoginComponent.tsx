import Image from 'next/image';
import React from 'react';

const LoginComponent = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-20">
      <div className="bg-white shadow-lg rounded-lg px-8 py-10">
        <div className="text-center mb-6">
          <Image src="/Images/nike-logo.jpeg" alt="Nike Logo" className="w-24 mx-auto" />
          <h2 className="text-2xl font-bold mt-4 text-black">YOUR ACCOUNT FOR EVERYTHING NIKE</h2>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-black font-bold mb-2">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-black font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="keepSignedIn"
                name="keepSignedIn"
                className="h-4 w-4 text-black focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="keepSignedIn" className="ml-2 block text-black font-medium">
                Keep me signed in
              </label>
            </div>
            <a href="#" className="inline-block align-baseline font-bold text-sm text-black hover:text-gray-800">
              Forgotten your password?
            </a>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              SIGN IN
            </button>
          </div>
        </form>
        <div className="text-center mt-6">
          <p className="text-black font-medium">
            Not a Member?{' '}
            <a href="#" className="text-black font-bold hover:text-gray-800">
              Join Us.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
