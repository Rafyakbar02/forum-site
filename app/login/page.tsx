import Link from "next/link";

const page = () => {
  return (
    <form className="flex flex-col m-auto sm:w-[750px] sm:mx-auto gap-4 my-2 p-6 shadow border border-gray-200 rounded-3xl">
      <h1 className="text-center text-2xl">Masuk Akun</h1>
      <input
        type="text"
        placeholder="email@kamu.com"
        className="border border-gray rounded-lg px-2.5 py-1.5 w-full"
      />
      <input
        type="password"
        placeholder="Password"
        className="border border-gray rounded-lg px-2.5 py-1.5 w-full"
      />
      <Link
        href="/"
        className="bg-green-500 px-3 py-2 text-white rounded-xl mx-auto"
      >
        Login
      </Link>
    </form>
  );
};

export default page;
