import React from "react";

const page = () => {
  return (
    <section className="p-4 flex flex-col m-auto w-3/4 max-w-xl">
      <h1 className="mb-4 mx-auto font-bold">Create New Post</h1>
      <TextInput placeholder={"Enter first name"} />
      <TextInput placeholder={"Enter last name"} />
      <TextInput placeholder={"Enter Email"} />
      <TextInput placeholder={"Enter Password"} />
      <TextInput placeholder={"Confirm Password"} />
    </section>
  );
};

export default page;
