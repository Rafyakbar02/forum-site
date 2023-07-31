import React from "react";
import Post from "./Post";

const Posts = ({ topics }) => {
  return (
    <section className="flex flex-col gap-4">
      {topics.map((t) => (
        <Post key={t._id} id={t._id} title={t.title} desc={t.description} />
      ))}
    </section>
  );
};

export default Posts;
