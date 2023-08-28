"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full sm:w-[750px] sm:mx-auto bg-white text-black rounded-3xl p-6 flex justify-between items-center shadow border border-gray-200">
      <div className="flex gap-8 items-center">
        <Link href="/" className="text-2xl font-black">
          diskusi
        </Link>
        <h1 className="text-sm">Komunal</h1>
        <Link href="/submit" className="text-sm">
          Buat Diskusi
        </Link>
      </div>
      {pathname !== "/login" ? (
        <Link href={"/login"} className="text-sm">
          Masuk
        </Link>
      ) : null}
    </nav>
  );
};

export default Navbar;
