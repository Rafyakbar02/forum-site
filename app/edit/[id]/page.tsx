"use client";

import { EditForm } from "../../components/Form";
import getTopicById from "../../getTopicsById";

const page = async ({ params }) => {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description, komunal, user } = topic;

  return (
    <EditForm
      id={id}
      title={title}
      description={description}
      komunal={komunal}
      user={user}
    />
  );
};

export default page;
