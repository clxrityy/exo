import { AuthorCard } from "@/components/elements/AuthorCard";
import { client } from "@/sanity/lib/client";
import { getAuthors } from "@/sanity/lib/queries";



export default async function Page() {
    const authors = await getAuthors();

    const {projectId, dataset} = client.config();

    return (
        <div className="flex flex-col items-center justify-center gap-10 w-full">
            <h2>
                Browse by author
            </h2>
            <div className="container mx-auto min-h-screen max-w-2xl p-8 flex flex-col gap-8 w-full">
                <ul className="grid grid-flow-auto gap-6 w-full">
                    {authors.map((author) => (
                        <li key={author._id}>
                            <AuthorCard author={author} projectId={projectId} dataset={dataset}  />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}