import React from "react";
import TextInput from "../components/TextInput";
import Link from "next/link";

const page = () => {
  return (
    <form className="p-4 flex flex-col m-auto w-3/4 max-w-xl">
      <h1 className="m-8 mx-auto font-bold text-3xl">Registration</h1>
      <TextInput type={"text"} placeholder={"First Name"} />
      <TextInput type={"text"} placeholder={"Last Name"} />
      <TextInput type={"text"} placeholder={"Email"} />
      <TextInput type={"password"} placeholder={"Create Password"} />
      <TextInput type={"password"} placeholder={"Confirm Password"} />
      <Link
        href="/"
        className="bg-blue-700 px-3 py-2 text-white rounded-xl mx-auto mb-8"
      >
        Register
      </Link>
    </form>
  );
};

export default page;
