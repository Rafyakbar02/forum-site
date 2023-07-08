import React from "react";

const page = () => {
  return (
    <section className="p-4 gap-4">
      <h1 className="mb-4">Create New Post</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          className="border border-gray rounded-lg px-2.5 py-1.5 w-6/12"
        />
      </div>
      <div className="mb-4">
        <textarea
          id=""
          cols="30"
          rows="5"
          placeholder="Text (Optional)"
          className="border border-gray rounded-lg px-2.5 py-1.5 w-6/12"
        ></textarea>
      </div>
      <a href="/" className="bg-blue-700 px-3 py-2 text-white rounded-xl">
        Submit
      </a>
    </section>
  );
};

export default page;
