import { Fragment } from "react";
import Link from "next/link";
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

const PostSetting = ({ router, id }) => {
  return (
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
          <div className="p-1 flex flex-col">
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={`${
                    active ? "bg-blue-500 text-white" : ""
                  } p-2 text-left flex items-center text-sm gap-3 rounded-lg`}
                  href={`/edit/${id}`}
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
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-blue-500 text-white" : ""
                  } p-2 text-left flex items-center text-sm gap-3 rounded-lg`}
                  onClick={() => removeTopic({ router, id })}
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
  );
};

export default PostSetting;
