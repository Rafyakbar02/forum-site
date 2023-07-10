import React from "react";
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";

const page = () => {
  return (
    <section className="p-4 flex flex-col m-auto w-3/4 max-w-xl">
      <h1 className="mb-4 mx-auto font-bold">Create New Post</h1>
      <TextInput placeholder={"Title"} />
      <TextArea />
      <div className="flex flex-row gap-4 mx-auto">
        <a href="/" className="px-3 py-2 text-white rounded-xl bg-gray-700">
          Cancel
        </a>
        <a href="/" className="bg-blue-700 px-3 py-2 text-white rounded-xl">
          Submit
        </a>
      </div>
    </section>
  );
};

export default page;
