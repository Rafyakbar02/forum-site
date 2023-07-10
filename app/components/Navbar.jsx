import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="mx-auto p-4 flex items-center justify-between max-w-6xl">
        <a href="" className="font-bold text-lg tracking-widest">
          diskusi
        </a>
        <div className="flex gap-4 items-center">
          <a
            href="/submit"
            className="bg-blue-700 px-3 py-2 text-white rounded-xl"
          >
            New Post
          </a>
          <a href="" className="flex content-center">
            Login
          </a>
          <a href="" className="flex content-center">
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
