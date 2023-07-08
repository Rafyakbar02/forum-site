import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="mx-auto p-4 flex items-center justify-between">
        <a href="" className="font-bold text-lg tracking-widest">
          diskusi
        </a>
        <div className="flex gap-4">
          <a href="">Login</a>
          <a href="">Register</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
