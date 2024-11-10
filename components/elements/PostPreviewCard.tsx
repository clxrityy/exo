import { Author, Post } from "@/util/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { generateImage } from "@/util/image";
import { getAuthor } from "@/sanity/lib/queries";

interface PostPreviewCardProps {
    post: Post;
    projectId: string | undefined;
    dataset: string | undefined;
}

export async function PostPreviewCard({ post, projectId, dataset }: PostPreviewCardProps) {

    const author: Author = await getAuthor(post.author._ref);

    const postImageUrl = post.mainImage ? generateImage({ source: post.mainImage, projectId, dataset })?.width(550).height(310).url() : null;

    return (
        <Card className="dark:bg-zinc-900/75 rounded-xl shadow-lg bg-zinc-50/75 px-4 py-2">
            <CardHeader>
                <CardTitle className="small-header">
                    <Link href={`/feed/${post.slug.current}`}>
                        {post.title}
                    </Link>
                </CardTitle>
                <CardDescription>
                    {post.preview}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                    {
                        postImageUrl && (
                            <Image src={postImageUrl} alt={post.title} width={550} height={310} className="aspect-video rounded-xl" />
                        )
                    }
                </div>
            </CardContent>
            <CardFooter className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2 w-full">
                <p className="text-sm">
                    <span className="font-mono font-bold dark:text-gray-300">
                        {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                </p>
                <Link href={`/authors/${author.slug.current}`}>
                    <p className="font-bold">
                        @{author.name}
                    </p>
                </Link>
            </CardFooter>
        </Card>
    );
}