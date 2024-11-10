import { Hero } from "@/components/elements/Hero";
import { PostPreviewCard } from "@/components/elements/PostPreviewCard";
import { client } from "@/sanity/lib/client";
import { getPosts } from "@/sanity/lib/queries";
import { Post } from "@/util/types";
import { BookDashed } from "lucide-react";

const { projectId, dataset } = client.config();

export default async function Home() {

  const posts: Post[] = await getPosts();

  return (
    <div className="flex flex-col items-center justify-center gap-20 w-full">
      <Hero />
      <div className="container mx-auto min-h-screen max-w-2xl p-8 flex flex-col gap-8">
        <header className="border-b text-center mb-5 pb-4 dark:border-b-white/40 drop-shadow">
          <h1 id="feed" className="font-arch-black uppercase text-xl md:text-2xl lg:text-3xl flex flex-row items-center gap-2">
            Feed <BookDashed />
          </h1>
        </header>
        <ul className="grid grid-flow-auto gap-5">
          {posts.map((post: Post) => (
            <li key={post.slug.current}>
              <PostPreviewCard projectId={projectId} dataset={dataset} post={post} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
