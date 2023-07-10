import React from "react";

const page = () => {
  return (
    <section className="p-4 flex flex-col m-auto w-2/4 max-w-6xl">
      <h1 className="mb-4 mx-auto font-bold">Create New Post</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          className="border border-gray rounded-lg px-2.5 py-1.5 w-full"
        />
      </div>
      <div className="mb-4">
        <textarea
          id=""
          cols="30"
          rows="5"
          placeholder="Text (Optional)"
          className="border border-gray rounded-lg px-2.5 py-1.5 w-full"
        ></textarea>
      </div>
      <a
        href="/"
        className="bg-blue-700 px-3 py-2 text-white rounded-xl mx-auto"
      >
        Submit
      </a>
    </section>
  );
};

export default page;
