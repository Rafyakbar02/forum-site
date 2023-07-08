import Post from "./components/Post";

export default function Home() {
  return (
    <section className="p-4 flex flex-wrap flex-col gap-4 justify-center">
      <a
        href="/submit"
        className="bg-blue-700 px-3 py-2 text-white rounded-xl max-w-sm"
      >
        New Post
      </a>
      <Post />
      <Post />
    </section>
  );
}
