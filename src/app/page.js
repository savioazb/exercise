import { getPosts } from "@/lib/api";
import CardsList from "../components/CardsList";

export default async function Home() {
  const posts = await getPosts();

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
