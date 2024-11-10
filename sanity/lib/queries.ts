import { Author, Post, Tag } from "@/util/types";
import { client } from "./client";

export async function getPosts() {
    const query =`
    *[_type == "post"] {
        title,
        slug,
        publishedAt,
        mainImage,
        author,
        preview,
        _id,
        tags
    }`;

    /**
     * const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;
     */

    const data: Post[] = await client.fetch(query);

    return data;
}

export async function getAuthor(id: string) {
    const query = `*[_type == "author" && _id == $id][0]`;

    const data = await client.fetch(query, { id });

    return data;
}

export async function getAuthors() {
    const query = `*[_type == "author"]{
        name,
        slug,
        _id,
        bio,
        image,
        _createdAt,
    }`;

    const data = await client.fetch(query);

    return data as Author[];
}

export async function getAuthorBySlug(slug: string) {
    const query = `*[_type == "author" && slug.current == $slug][0]{
        name,
        slug,
        image,
        bio,
        _id,
        }`;

    const data = await client.fetch(query, { slug });

    return data as Author;
}

export async function getPostsByAuthor(id: string) {
    const query = `*[_type == "post" && author._ref == $id]{
        author,
        title,
        slug,
        publishedAt,
        mainImage,
        preview,
        _id
    }`;

    const data = await client.fetch(query, { id });

    return data as Post[];
}

export async function getTags() {
    const query = `*[_type == "tag"]{
        title,
        _id,
        slug,
        icon
    }`;

    const data = await client.fetch(query);

    return data as Tag[];
}

export async function getPostCountByTagTitle(title: string) {
    const query = `*[_type == "post" && tag.title == ${title}]`;

    const data = await client.fetch(query);

    return data.length as number;
}