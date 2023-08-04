"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, Transition } from "@headlessui/react";

const removeTopic = async ({ router, id }) => {
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
{
  /*
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
*/
}

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
        <Menu as="div" className="relative inline-block">
          <div>
            <Menu.Button className="text-sm font-medium text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height="20px"
              >
                <circle
                  cx="256"
                  cy="256"
                  r="32"
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                />
                <circle
                  cx="416"
                  cy="256"
                  r="32"
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                />
                <circle
                  cx="96"
                  cy="256"
                  r="32"
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                />
              </svg>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right rounded-lg bg-white shadow border border-gray-200 outline-none">
              <div className="p-1 flex flex-col gap-2">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-blue-500 text-white" : ""
                      } p-2 text-left flex items-center text-sm gap-3 rounded-lg`}
                      onClick={() => router.push(`/edit/${id}`)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        height="15px"
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
                      Edit
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-blue-500 text-white" : ""
                      } p-2 text-left flex items-center text-sm gap-3 rounded-lg`}
                      onClick={() => removeTopic(router, id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        height="15px"
                      >
                        <path
                          d="M432 144l-28.67 275.74A32 32 0 01371.55 448H140.46a32 32 0 01-31.78-28.26L80 144"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="32"
                        />
                        <rect
                          x="32"
                          y="64"
                          width="448"
                          height="80"
                          rx="16"
                          ry="16"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="32"
                        />
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="32"
                          d="M312 240L200 352M312 352L200 240"
                        />
                      </svg>
                      Hapus
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <h5 className="text-2xl">
        <Link href="">{title}</Link>
      </h5>
      <p className="text-gray-700 font-light">{desc}</p>
    </div>
  );
};

export default Post;
