"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const EditForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });
      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
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
        Edit Post
      </h1>
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        type="text"
        placeholder="Title"
        className="border border-gray rounded-lg px-2.5 py-1.5 w-full mb-4"
      />
      <textarea
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
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
          Update
        </button>
      </div>
    </form>
  );
};

export default EditForm;
