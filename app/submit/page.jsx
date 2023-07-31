"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failer to create a post");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 flex flex-col m-auto w-full sm:w-3/4 max-w-xl"
    >
      <h1 className="mb-8 mt-4 mx-auto font-bold text-2xl sm:text-3xl">
        Create New Post
      </h1>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Title"
        className="border border-gray rounded-lg px-2.5 py-1.5 w-full mb-4"
      />
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        id=""
        cols="30"
        rows="5"
        placeholder="Text (Optional)"
        className="border border-gray rounded-lg px-2.5 py-1.5 w-full mb-4"
      ></textarea>
      <div className="flex flex-row gap-4 mx-auto">
        <Link href="/" className="px-3 py-2 text-white rounded-xl bg-gray-700">
          Cancel
        </Link>
        <button
          type="submit"
          className="bg-blue-700 px-3 py-2 text-white rounded-xl"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default page;
