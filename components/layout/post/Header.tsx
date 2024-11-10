import { getAuthor } from "@/sanity/lib/queries";
import { Author } from "@/util/types";
import Link from "next/link";

interface HeaderProps {
    title: string;
    author: {
        _ref: string;
        _type: string;
    }
}


export async function Header({ title, author }: HeaderProps) { 

    const authorObj: Author = await getAuthor(author._ref);

    return (
        <header className="py-14 px-4 text-center border-b">
            <div className="flex flex-col gap-4 items-center justify-stretch">
                <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold">{title}</h2>
                <p className="flex justify-end w-full mr-10">
                    <Link href={`/authors/${authorObj.slug.current}`}>
                        @{authorObj.name}
                    </Link>
                </p>
            </div>
        </header>
    );
}