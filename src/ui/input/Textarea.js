import React from "react";

const Textarea = ({ label, value, ...props }) => {
  return (
    <>
      <label htmlFor="" className="mb-2 ml-2 font-semibold">
        {label}
      </label>
      <textarea
        value={value}
        type="text"
        className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...props}
      />
    </>
  );
};

export  {Textarea};
