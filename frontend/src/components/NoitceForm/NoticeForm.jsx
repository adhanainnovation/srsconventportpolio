import React from "react";

// Add this file agian //

const NoticeForm = () => {
  return (
    <div className="min-h-screen justify-center items-center mx-20">
      <div className="  bg-gray-100 px-4 py-40">
        <h1 className="text-2xl font-semibold font-serif mb-6 ">Title</h1>
        <input
          type="text"
          placeholder="Title"
          className="border-1 w-50 border-black p-2 rounded-xl "
        />

        <h1 className="text-2xl font-semibold font-serif mb-6 mt-5 ">
          Description
        </h1>
        <textarea
          name=""
          id=""
          placeholder="Description"
          className="border-1 w-50 border-black p-2 rounded-xl   "
        ></textarea>
        <br />
        <button className="text-semibold border-1 pl-10 pr-10 pb-2 pt-2 mt-2 bg-red-700 text-white rounded-xl ">
          Add
        </button>
      </div>
    </div>
  );
};

export default NoticeForm;
