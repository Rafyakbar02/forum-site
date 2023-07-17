import React from "react";

const Post = ({ title, desc }) => {
  return (
    <div className="p-6 border border-gray-200 shadow-sm rounded-xl bg-white">
      <a href="">
        <h5 className="font-bold mb-2 text-xl">{title}</h5>
      </a>
      <p className="hidden gap-4 text-sm text-gray-600 mb-2">
        <a href="">tomyjay</a>
        <a href="">Technology</a>
      </p>
      <p className="text-sm">{desc}</p>
    </div>
  );
};

export default Post;
