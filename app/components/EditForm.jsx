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
      className="flex flex-col m-auto sm:w-[750px] sm:mx-auto gap-4 my-2 p-6 shadow border border-gray-200 rounded-3xl"
    >
      <h1 className="text-center text-2xl">Edit Postingan</h1>
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        type="text"
        placeholder="Title"
        className="border border-gray rounded-lg px-2.5 py-1.5 w-full"
      />
      <textarea
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        id=""
        cols="30"
        rows="5"
        placeholder="Text (Optional)"
        className="border border-gray rounded-lg px-2.5 py-1.5 w-full"
      ></textarea>
      <div className="flex flex-row gap-4 mx-auto">
        <Link href="/" className="px-3 py-2 text-white rounded-xl bg-gray-600">
          Batal
        </Link>
        <button
          type="submit"
          className="bg-green-500 px-3 py-2 text-white rounded-xl"
        >
          Edit
        </button>
      </div>
    </form>
  );
};

export default EditForm;
