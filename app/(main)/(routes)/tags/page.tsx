import { Tag } from "@/components/elements/Tag";
import { getTags } from "@/sanity/lib/queries"

export default async function Page() {

    const tags = await getTags();

    return (
        <div className="flex flex-col items-center justify-center gap-10 w-full">
            <h2 className="text-3xl font-bold">
                Browse by tags
            </h2>
            <div className="container mx-auto min-h-screen max-w-2xl flex flex-col gap-8">
                <ul className="grid grid-flow-auto gap-8">
                    {
                        tags.map((tag) => (
                            <li key={tag._id}>
                                <Tag tag={tag} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}