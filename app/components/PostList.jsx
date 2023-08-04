import React from "react";
import Post from "./Post";

const Posts = ({ topics }) => {
  return (
    <section className="flex flex-col sm:w-[750px] sm:mx-auto gap-2 my-2">
      {topics.map((t) => (
        <Post key={t._id} id={t._id} title={t.title} desc={t.description} />
      ))}
    </section>
  );
};

export default Posts;
