"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const EditForm = ({ id, title, description, komunal, user }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newKomunal, setNewKomunal] = useState(komunal);
  const [newUser, setNewUser] = useState(user);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription, newKomunal, newUser }),
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
    <PlainForm
      heading={"Edit Diskusi"}
      handleSubmit={handleSubmit}
      title={newTitle}
      setTitle={setNewTitle}
      description={newDescription}
      setDescription={setNewDescription}
      komunal={komunal}
      setKomunal={setNewKomunal}
      user={user}
      setUser={setNewUser}
      submitButtonValue={"Edit"}
    />
  );
};

const NewForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [komunal, setKomunal] = useState("");
  const [user, setUser] = useState("");

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
        body: JSON.stringify({ title, description, komunal, user }),
      });

      if (res.ok) {
        router.refresh();
        router.push("/");
      } else {
        throw new Error("Failer to create a post");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PlainForm
      heading={"Buat Diskusi Baru"}
      handleSubmit={handleSubmit}
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
      komunal={komunal}
      setKomunal={setKomunal}
      user={user}
      setUser={setUser}
      submitButtonValue={"Post"}
    />
  );
};

const PlainForm = ({
  heading,
  handleSubmit,
  title,
  setTitle,
  description,
  setDescription,
  komunal,
  setKomunal,
  user,
  setUser,
  submitButtonValue,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col m-auto sm:w-[750px] sm:mx-auto gap-4 my-2 p-6 shadow border border-gray-200 rounded-3xl"
    >
      <h1 className="text-center text-2xl">{heading}</h1>
      <div className="grid grid-cols-2 gap-2">
        <input
          onChange={(e) => setKomunal(e.target.value)}
          value={komunal}
          type="text"
          placeholder="Mau post dimana"
          className="border border-gray rounded-lg px-2.5 py-1.5"
        />
        <input
          onChange={(e) => setUser(e.target.value)}
          value={user}
          type="text"
          placeholder="Siapa yang nge-post?"
          className="border border-gray rounded-lg px-2.5 py-1.5"
        />
      </div>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Title"
        className="border border-gray rounded-lg px-2.5 py-1.5 w-full"
      />
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        id=""
        cols={30}
        rows={5}
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
          {submitButtonValue}
        </button>
      </div>
    </form>
  );
};

export { NewForm, EditForm };
