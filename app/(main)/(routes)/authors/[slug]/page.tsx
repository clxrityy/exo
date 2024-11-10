import { client } from "@/sanity/lib/client";
import { getAuthorBySlug, getPostsByAuthor } from "@/sanity/lib/queries";
import { generateImage } from "@/util/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
import dynamic from "next/dynamic";

const { projectId, dataset } = client.config();

const PostPreviewCard = dynamic(() => import('@/components/elements/PostPreviewCard').then(mod => mod.PostPreviewCard), {
    ssr: true,
});

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;

    const author = await getAuthorBySlug(slug);

    const posts = await getPostsByAuthor(author._id);

    const authorImageUrl = author.image ? generateImage({
        source: author.image,
        projectId,
        dataset
    })?.width(50).height(50).url() : null;

    return (
        <div className="flex flex-col items-center justify-start gap-10 w-full">
            <div className="flex flex-col items-center justify-center gap-6 border-b pb-5 dark:border-zinc-600 w-full">
                <div className="flex flex-row items-center justify-center gap-2">
                    {
                        authorImageUrl && (
                            <Image
                                src={authorImageUrl}
                                alt={author.name}
                                width={50}
                                height={50}
                                className="rounded-full"
                            />
                        )
                    }
                    <h1 className="font-bold">
                        {author.name}
                    </h1>
                </div>
                <div className="dark:text-zinc-300 text-sm">
                    {Array.isArray(author.bio) && <PortableText value={author.bio} />}
                </div>
            </div>
            <ul className="grid grid-flow-auto gap-5">
                {posts.length >= 0 ? posts.map((post) => (
                    <li key={post._id}>
                        <PostPreviewCard post={post} projectId={projectId} dataset={dataset} />
                    </li>
                )) : (
                    <p className="text-2xl">
                        No posts found.
                    </p>
                )}
            </ul>
        </div>
    );
}