import React from "react";

const Form = () => {
  return (
    <div className="bg-[#001935]  sm:gap-20 grid sm:grid-cols-12 pt-[96px] pb-[96px] px-4 lg:px-8">
      <div className="mb-8 sm:col-start-2 sm:col-span-2 lg:mb-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#00b8ff] mb-6">get in touch</h2>
        <p className="font-light text-[#00b8ff] text-lg sm:text-xl lg:text-2xl">to get started with Tumblr ads, we just need a few deets.</p>
      </div>
      <div className="w-full sm:col-start-5  sm:col-span-4 text-[#FFFFFF] flex flex-col">
        <label className="text-sm sm:text-base lg:text-lg font-bold mb-1">First Name</label>
        <input
          type="text"
          placeholder=""
          className="block appearance-none w-full text-[#FFFFFF] bg-[#001935] border-2 border-white hover:border-gray-500 px-4 py-3 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4"
        />
        <label className="text-sm sm:text-base lg:text-lg font-bold mb-1">Last Name</label>
        <input
          type="text"
          placeholder=""
          className="block appearance-none w-full text-[#FFFFFF] bg-[#001935] border-2 border-white hover:border-gray-500 px-4 py-3 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4"
        />
        <label className="text-sm sm:text-base lg:text-lg font-bold mb-1">Company</label>
        <input
          type="text"
          placeholder=""
          className="block appearance-none w-full text-[#FFFFFF] bg-[#001935] border-2 border-white hover:border-gray-500 px-4 py-3 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4"
        />
        <label className="text-sm sm:text-base lg:text-lg font-bold mb-1">Company Type</label>
        <select
          id="companyType"
          className="block appearance-none w-full text-[#FFFFFF] bg-[#001935] border-2 border-white hover:border-gray-500 px-4 py-3 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4"
        >
          <option className="bg-white text-black">-None-</option>
          <option className="bg-white text-black">Option 2</option>
          <option className="bg-white text-black">Option 3</option>
        </select>
        <label className="text-sm sm:text-base lg:text-lg font-bold mb-1">Industry</label>
        <select
          id="industry"
          className="block appearance-none w-full text-[#FFFFFF] bg-[#001935] border-2 border-white hover:border-gray-500 px-4 py-3 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4"
        >
          <option>-None-</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <label className="text-sm sm:text-base lg:text-lg font-bold mb-1">Website</label>
        <input
          type="text"
          placeholder=""
          className="block appearance-none w-full text-[#FFFFFF] bg-[#001935] border-2 border-white hover:border-gray-500 px-4 py-3 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4"
        />
        <label className="text-sm sm:text-base lg:text-lg font-bold mb-1">Email</label>
        <input
          type="text"
          placeholder=""
          className="block appearance-none w-full text-[#FFFFFF] bg-[#001935] border-2 border-white hover:border-gray-500 px-4 py-3 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4"
        />
        <label className="text-sm sm:text-base lg:text-lg font-bold mb-1">Phone</label>
        <input
          type="text"
          placeholder=""
          className="block appearance-none w-full text-[#FFFFFF] bg-[#001935] border-2 border-white hover:border-gray-500 px-4 py-3 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4"
        />
        <label className="text-sm sm:text-base lg:text-lg font-bold mb-1">Budget</label>
        <input
          type="text"
          placeholder=""
          className="block appearance-none w-full text-[#FFFFFF] bg-[#001935] border-2 border-white hover:border-gray-500 px-4 py-3 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4"
        />
        <label className="text-sm sm:text-base lg:text-lg font-bold mb-1">Message</label>
        <textarea
          placeholder=""
          className="block rows-5 appearance-none w-full text-[#FFFFFF] bg-[#001935] border-2 border-white hover:border-gray-500 px-4 py-3 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4"
        />
        <button className="w-full py-3 bg-[#FFFFFF] text-black rounded font-medium">
          Submit
        </button>
      </div>
      <div className="sm:col-span-2 sm:col-start-10 mt-10 sm:mt-0">
        <h3 className="text-lg sm:text-xl lg:text-2xl text-[#FFFFFF] font-bold mb-6">for quick inquiries</h3>
        <a href="mailto:brandlove@tumblr.com" className="text-sm sm:text-base lg:text-lg font-light text-[#FFFFFF]">brandlove@tumblr.com</a>
      </div>
    </div>
  );
};

export default Form;

