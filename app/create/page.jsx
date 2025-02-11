"use client";
import React from "react";
import { useState } from "react";
const CreatePage = () => {
  const [val, setVal] = useState([]);
  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
  };
  const handleChange = (e, i) => {
    const inputdata = [...val];
    inputdata[i] = e.target.value;
    setVal(inputdata);
  };

  const handleDelete = (i) => {
    const deleteVal = [...val];
    deleteVal.splice(i, 1);
    setVal(deleteVal);
  };
  return (
    <>
      <section class="bg-gray-50 ">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          {/* <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
          Flowbite    
      </a> */}
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Create an event
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Event Name
                  </label>
                  <input
                    type="text"
                    name="event"
                    id="email"
                    class="bg-gray-50 border-2 border-gray-300  text-gray-900 sm:text-sm rounded-lg   w-11/12 p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Event name"
                    required=""
                  />
                </div>
                <div>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    onClick={() => handleAdd()}
                  >
                    Add Collaborators
                  </button>
                  <button className=" bg:gray-50 hover:bg-gray-200 rounded p-1"></button>

                  {val.map((data, i) => {
                    return (
                      <>
                        <input
                          type="email"
                          //   name="email"
                          id="email"
                          value={data}
                          class="bg-gray-50 mt-2 border-dashed border-2 border-gray-300  text-gray-900 sm:text-sm rounded-lg   w-10/12 p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="name@company.com"
                          required=""
                          onChange={(e) => handleChange(e, i)}
                        />
                        <button
                          className="rounded p-2 bg-gray-50 hover:bg-gray-300 ms-2"
                          onClick={() => handleDelete(i)}
                        >
                          ❌
                        </button>
                      </>
                    );
                  })}
                </div>
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Create an event
                </button>

                {/* <button
                  type="submit"
                  class="w-full  bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreatePage;
