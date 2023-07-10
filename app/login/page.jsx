import React from "react";

const page = () => {
  return (
    <section className="p-4 flex flex-col m-auto w-3/4 max-w-xl">
      <h1 className="mb-4 mx-auto font-bold">Login</h1>
      <TextInput placeholder={"Email"} />
      <TextInput placeholder={"Password"} />
      <a
        href="/"
        className="bg-blue-700 px-3 py-2 text-white rounded-xl mx-auto"
      >
        Login
      </a>
    </section>
  );
};

export default page;
