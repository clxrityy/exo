import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { ImageUrlBuilder } from "sanity";
import imageUrlBuilder from "@sanity/image-url";

interface GeneratePostImageProps {
    source: SanityImageSource;
    projectId: string | undefined;
    dataset: string | undefined;
}

/**
 * Generate a post image URL.
 * @param {GeneratePostImageProps} props - The `source`, `projectId`, and `dataset`.
 * @example
 * export default function Component() {
 *    
 *    const postImageUrl = generatePostImage({ source: post.mainImage, projectId, dataset })?.width(550).height(310).url();  
 *      
 *    return (
 *      <Image src={postImageUrl} alt={post.title} className="aspect-video rounded-xl" />
 *    )
 * }
 */

export function generateImage({ source, projectId, dataset }: GeneratePostImageProps): ImageUrlBuilder | null {

    return projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null;
}