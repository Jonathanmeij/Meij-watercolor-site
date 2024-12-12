import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import { Container } from "@/app/components/container";
import Navbar from "@/app/components/navbar";

const POST_QUERY = `*[
    _type == "product"
    && defined(slug.current) && slug.current == $slug][0]`;

// const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
    projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const post = await client.fetch<SanityDocument>(POST_QUERY, params, options);
    const postImageUrl = post.image
        ? urlFor(post.image)?.width(550).height(310).url()
        : null;

    return (
        <div>
            <Navbar className="text-neutral-900" />
            <main>
                <Container size={"sm"} className="">
                    <Link href="/" className="hover:underline">
                        ← Back to posts
                    </Link>
                    {postImageUrl && (
                        <img
                            src={postImageUrl}
                            alt={post.title}
                            className="aspect-video rounded-xl"
                            width="550"
                            height="310"
                        />
                    )}
                    <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
                    <div className="prose">
                        <p>
                            Published: {new Date(post.publishedAt).toLocaleDateString()}
                        </p>
                        {Array.isArray(post.body) && <PortableText value={post.body} />}
                    </div>
                </Container>
            </main>
        </div>
    );
}
