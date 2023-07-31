"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const EditButton = ({ id }) => {
  return (
    <button className="text-black hover:bg-gray-200 p-1 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        height="24px"
        onClick={`edit/${id}`}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          d="M364.13 125.25L87 403l-23 45 44.99-23 277.76-277.13-22.62-22.62zM420.69 68.69l-22.62 22.62 22.62 22.63 22.62-22.63a16 16 0 000-22.62h0a16 16 0 00-22.62 0z"
        />
      </svg>
    </button>
  );
};

const RemoveButton = ({ id }) => {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button className="text-black hover:bg-gray-200 p-1 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        height="25px"
        onClick={removeTopic}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          d="M368 368L144 144M368 144L144 368"
        />
      </svg>
    </button>
  );
};

const Post = ({ id, title, desc }) => {
  return (
    <div className="p-6 border border-gray-200 shadow-sm rounded-xl bg-white w-full">
      <div className="flex items-center mb-2 justify-between">
        <Link href="">
          <h5 className="font-bold sm:text-xl">{title}</h5>
        </Link>
        <div className="flex items-center gap-2">
          <EditButton id={id} />
          <RemoveButton id={id} />
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
