import Post from "./components/Post";

export default function Home() {
  return (
    <section className="p-4 flex flex-wrap flex-col gap-4 justify-center m-auto sm:w-2/3 max-w-3xl">
      <Post />
      <Post />
    </section>
  );
}
