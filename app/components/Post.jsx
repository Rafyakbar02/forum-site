import React from "react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import EditBtn from "./EditBtn";

const Post = ({ id, title, desc }) => {
  return (
    <div className="p-6 border border-gray-200 shadow-sm rounded-xl bg-white">
      <div className="flex items-center mb-2 justify-between">
        <Link href="">
          <h5 className="font-bold text-xl">{title}</h5>
        </Link>
        <div className="flex items-center gap-2">
          <Link href={`edit/${id}`}>
            <EditBtn />
          </Link>
          <RemoveBtn id={id} />
        </div>
      </div>
      <p className="hidden gap-4 text-sm text-gray-600 mb-2">
        <Link href="">tomyjay</Link>
        <Link href="">Technology</Link>
      </p>
      <p className="text-sm">{desc}</p>
    </div>
  );
};

export default Post;
