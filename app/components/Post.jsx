import React from "react";
import Link from "next/link";

const Post = ({ title, desc }) => {
  return (
    <div className="p-6 border border-gray-200 shadow-sm rounded-xl bg-white">
      <Link href="">
        <h5 className="font-bold mb-2 text-xl">{title}</h5>
      </Link>
      <p className="hidden gap-4 text-sm text-gray-600 mb-2">
        <Link href="">tomyjay</Link>
        <Link href="">Technology</Link>
      </p>
      <p className="text-sm">{desc}</p>
    </div>
  );
};

export default Post;
