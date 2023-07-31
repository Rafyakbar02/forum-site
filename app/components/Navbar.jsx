import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border border-gray-200">
      <div className="mx-auto p-4 flex items-center justify-between max-w-6xl">
        <Link href="/" className="font-bold text-2xl tracking-widest">
          diskusi
        </Link>
        <div className="flex gap-4 items-center">
          <Link
            href="/submit"
            className="bg-blue-700 px-3 py-2 text-white rounded-xl"
          >
            New Post
          </Link>
          <Link href="/login" className="hidden content-center">
            Login
          </Link>
          <Link href="/register" className="hidden content-center">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
