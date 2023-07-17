import React from "react";
import Post from "./Post";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const Posts = async () => {
  const { topics } = await getTopics();

  return (
    <section className="p-4 flex flex-wrap flex-col gap-4 justify-center m-auto sm:w-2/3 max-w-3xl">
      {topics.map((t) => (
        <Post title={t.title} desc={t.description} />
      ))}
    </section>
  );
};

export default Posts;
