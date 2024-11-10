import { PortableText } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { Header } from "@/components/layout/post/Header";
import { generateImage } from "@/util/image";
import { Post } from "@/util/types";

const { projectId, dataset } = client.config();

export const revalidate = 60;

const options = { next: { revalidate: 30 } };
const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

export default async function Page({
    params
}: { params: Promise<{ slug: string }> }) {


    const post = await client.fetch<Post>(POST_QUERY, await params, options);
    const postImageUrl = post.mainImage ? generateImage({ source: post.mainImage, projectId, dataset })?.width(550).height(310).url() : null;

    return (
        <div className="container mx-auto min-h-screen max-w-2xl p-8 flex flex-col gap-10">
            <div className="flex flex-col justify-between gap-4">
                {
                    postImageUrl && (
                        <Image src={postImageUrl} alt={post.title} className="aspect-video rounded-xl"
                            width={550} height={310} />
                    )
                }
                <p className="font-bold text-sm text-gray-300">
                    Published: <span className="font-mono tracking-tightest">{new Date(post.publishedAt).toLocaleDateString()}</span>
                </p>
                <Header title={post.title} author={post.author} />
                <div className="flex flex-col justify-between gap-5">
                    <div className="flex flex-col gap-2 items-start justify-center">
                        {
                            Array.isArray(post.body) && <PortableText listNestingMode="html" value={post.body} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}