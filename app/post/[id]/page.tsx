import Post from "../../components/Post";
import getTopicById from "../../getTopicsById";

export default async function page({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description, komunal, user } = topic;

  return (
    <section className="sm:w-[750px] sm:mx-auto my-2">
      <Post
        id={id}
        title={title}
        desc={description}
        komunal={komunal}
        user={user}
      />
    </section>
  );
}
