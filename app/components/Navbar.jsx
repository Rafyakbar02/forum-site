import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border border-gray-200">
      <div className="mx-auto p-4 flex items-center justify-between max-w-6xl">
        <a href="/" className="font-bold text-2xl tracking-widest">
          diskusi
        </a>
        <div className="flex gap-4 items-center">
          <a
            href="/submit"
            className="hidden bg-blue-700 px-3 py-2 text-white rounded-xl"
          >
            New Post
          </a>
          <a href="/login" className="flex content-center">
            Login
          </a>
          <a href="/register" className="flex content-center">
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
