import PostList from "./components/PostList";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function Home() {
  const { topics } = await getTopics();

  return (
    <div className="m-4 max-w-2xl md:mx-auto">
      <PostList topics={topics} />
    </div>
  );
}
