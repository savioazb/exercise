import { api } from "@/lib/api";

import { AxiosError } from "axios";
import CardsList from "../components/CardsList";

async function getAllPosts() {
  try {
    const response = await api.post("/cards", {
      category: [],
      limit: 20,
      order: "ASC",
      order_by: "title",
      post_type: ["customers"],
    });
    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response.data);
    }
  }
}

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main>
      <div className="mb-8 flex flex-col gap-3 text-center sm:mb-16">
        <h1 className="font-alt text-xl font-bold sm:text-4xl">
          The most innovative companies use Talkdesk.
        </h1>
        <h2 className="text-sm sm:text-base">
          See how companies around the world use Talkdesk to provide exceptional
          customer experiences.
        </h2>
      </div>
      <CardsList postsInfo={posts} />
    </main>
  );
}
