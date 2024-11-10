import type { Tag as TagType } from "@/util/types";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { generateImage } from "@/util/image";
import Image from "next/image";
import { getPostCountByTagTitle } from "@/sanity/lib/queries";

interface PostTagProps {
    tag: TagType;
}

const { projectId, dataset } = client.config();

export function PostTag({ tag }: PostTagProps) {

    const tagImageUrl = tag.icon ? generateImage({ source: tag.icon, projectId, dataset })?.width(25).height(25).url() : null;

    return (
        <Badge variant={"outline"}>
            <Link href={`/tags/${tag.slug.current}`} className="flex flex-row items-center justify-center gap-1">
                {
                    tagImageUrl && (
                        <Image
                            src={tagImageUrl}
                            alt={tag.title}
                            width={25}
                            height={25}
                            className="rounded-full"
                        />
                    )
                }
                {tag.title}
            </Link>
        </Badge>
    )
}

export async function Tag({ tag }: PostTagProps) {

    const posts = await getPostCountByTagTitle(tag.title);

    const tagImageUrl = tag.icon ? generateImage({ source: tag.icon, projectId, dataset })?.width(25).height(25).url() : null;

    return (
        <div className="flex flex-col items-center justify-center gap-1 bg-zinc-100/50 dark:bg-zinc-950/50 py-2 rounded-lg shadow">
            <Link href={`/tags/${tag.slug.current}`} className="flex flex-col items-center justify-center gap-1">
                <div className="flex flex-row items-center justify-center gap-2">
                    {
                        tagImageUrl && (
                            <Image
                                src={tagImageUrl}
                                alt={tag.title}
                                width={25}
                                height={25}
                                className="rounded-md"
                            />
                        )
                    }
                    <h3 className="text-lg font-semibold">
                        {tag.title}
                    </h3>
                </div>
                <p className="text-zinc-700 dark:text-zinc-500 text-xs">
                    #{tag.slug.current}
                </p>
            </Link>
            <p className="text-sm text-zinc-400">
                <span className="font-mono">
                {posts - 1}</span> posts
            </p>
        </div>
    )
}