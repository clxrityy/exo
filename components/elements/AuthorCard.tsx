import { generateImage } from "@/util/image";
import { Author } from "@/util/types";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

interface AuthorCardProps {
    author: Author;
    projectId: string | undefined;
    dataset: string | undefined;
}

export function AuthorCard({ author, projectId, dataset }: AuthorCardProps) {

    const authorImageUrl = author.image ? generateImage({ source: author.image, projectId, dataset })?.width(200).height(200).url() : null;

    return (
        <div className="flex flex-col gap-5 items-center justify-between w-full">
            <Link href={`/authors/${author.slug.current}`} className="w-full">
                <div className="dark:bg-zinc-950/50 bg-zinc-50/20 py-5 px-10 rounded-xl shadow hover:shadow-lg transition-shadow focus:shadow-none dark:hover:scale-105 dark:transition-transform duration-150">
                    <div className="flex flex-col items-center justify-start gap-2">
                        <div className="flex flex-row items-center justify-start gap-2">

                            {
                                authorImageUrl && (
                                    <Image
                                        src={authorImageUrl}
                                        alt={author.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                )
                            }
                            <h3 className="font-bold">
                                {author.name}
                            </h3>

                            <span className="text-xs text-zinc-700 dark:text-zinc-500">
                                @{author.slug.current}
                            </span>
                        </div>
                        <div className="text-sm dark:text-zinc-400 text-zinc-600 no-underline">
                            {

                                Array.isArray(author.bio) && <PortableText value={author.bio} />
                            }
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}