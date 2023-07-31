"use client";

import React from "react";
import { useRouter } from "next/navigation";

const RemoveBtn = ({ id }) => {
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="text-black cursor-pointer"
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
  );
};

export default RemoveBtn;
