"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PostSetting from "./PostSetting";

const Post = ({ id, title, desc }) => {
  const router = useRouter();
  return (
    <div className="w-full p-6 bg-white rounded-3xl flex flex-col gap-3 shadow border border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <div className="h-9 w-9 bg-gray-200 rounded-full"></div>
          <div className="flex-auto text-gray-700 flex flex-col">
            <Link href="" className="font-light text-xs inline-block">
              Teknologi
            </Link>
            <Link href="" className="inline-block">
              tomyjay
            </Link>
          </div>
        </div>
        <PostSetting router={router} id={id} />
      </div>
      <h5 className="text-2xl">
        <Link href="">{title}</Link>
      </h5>
      <p className="text-gray-700 font-light">{desc}</p>
    </div>
  );
};

export default Post;
