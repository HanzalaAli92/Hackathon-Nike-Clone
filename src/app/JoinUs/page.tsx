"use client"
import Image from 'next/image';
import React, { useState } from 'react';


const JoinUs = () => {
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderSelect = (gender:string) => {
    setSelectedGender(gender);
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto mt-20 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg px-8 py-10">
          <div className="text-center mb-6">
            <Image
              src="/Images/jordan-logo.PNG"
              alt="Jordan Logo"
              width={500}
              height={500}
              className="w-24 mx-auto"
            />
            <h2 className="text-2xl font-bold mt-4">BECOME A NIKE MEMBER</h2>
            <p className="text-[#8D8D8D] mt-2">
              Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
            </p>
          </div>
          <form>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#8D8D8D] leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#8D8D8D] leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#8D8D8D] leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#8D8D8D] leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                placeholder="Date of Birth"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#8D8D8D] leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-[#8D8D8D] mt-2">Get a Nike Member Reward every year on your Birthday.</p>
            </div>
            <div className="mb-4">
              <select
                id="country"
                name="country"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#8D8D8D] leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">India</option>
                {/* Add more country options as needed */}
              </select>
            </div>
            <div className="mb-4 flex items-center justify-between space-x-2">
              <button
                type="button"
                onClick={() => handleGenderSelect('Male')}
                className={`px-6 py-2 ${selectedGender === 'Male' ? 'bg-indigo-500 text-white' : 'bg-white border border-[#8D8D8D] text-[#8D8D8D]'} rounded w-1/2`}
              >
                Male
              </button>
              <button
                type="button"
                onClick={() => handleGenderSelect('Female')}
                className={`px-6 py-2 ${selectedGender === 'Female' ? 'bg-indigo-500 text-white' : 'bg-white border border-[#8D8D8D] text-[#8D8D8D]'} rounded w-1/2`}
              >
                Female
              </button>
            </div>
            <div className="mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="signUpUpdates"
                  name="signUpUpdates"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="signUpUpdates" className="ml-2 block text-[#8D8D8D] font-medium">
                  Sign up for emails to get updates from Nike on products, offers, and your Member benefits.
                </label>
              </div>
            </div>
            <p className="text-[#8D8D8D] mb-4">
              By creating an account you agree to Nike.s <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Use</a>.
            </p>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                JOIN US
              </button>
            </div>
          </form>
          <div className="text-center mt-6">
            <p className="text-[#8D8D8D] font-medium">
              Already a Member?{' '}
              <a href="#" className="text-black font-bold hover:text-gray-800">
                Sign in.
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
