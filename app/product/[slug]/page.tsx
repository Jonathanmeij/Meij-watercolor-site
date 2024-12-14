import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import { Container } from "@/app/components/container";
import Navbar from "@/app/components/navbar";
import ProcesSection from "@/app/components/ProcesSection";
import Image from "next/image";
import { Contact } from "@/app/components/Contact";
import Link from "next/link";

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
    const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
    const postImageUrl = post.image
        ? urlFor(post.image)?.width(550).height(550).url()
        : null;
    const images: string[] = post.paginaFotos
        ? post.paginaFotos.map((image: SanityImageSource) => {
              return urlFor(image)?.width(550).height(550).url();
          })
        : [];

    return (
        <div className=" min-h-screen">
            <main>
                <Navbar className="!text-green-950 " />
                <Container size={"sm"} className="pt-0 space-y-6">
                    <div className="py-6">
                        <Link href="/" className="hover:underline">
                            ← Terug naar overzicht
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 items-center">
                        <div className="w-full">
                            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                            <div className="prose">
                                {Array.isArray(post.description) && (
                                    <PortableText value={post.description} />
                                )}
                            </div>
                        </div>
                        {postImageUrl && (
                            <Image
                                src={postImageUrl}
                                alt={post.title}
                                className=" rounded-xl"
                                width="500"
                                height="500"
                            />
                        )}
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {images[0] && (
                            <Image
                                src={images[0]}
                                alt={post.title}
                                className="rounded-xl "
                                width="500"
                                height="500"
                            />
                        )}
                        {images[1] && (
                            <Image
                                src={images[1]}
                                alt={post.title}
                                className="rounded-xl "
                                width="500"
                                height="500"
                            />
                        )}
                    </div>
                </Container>
                <ProcesSection title={post.title} />
                <Contact />
                {images.length > 2 && (
                    <Container size={"sm"}>
                        <h2 className="text-3xl font-bold mb-8">Meer {post.title}</h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {images
                                .filter((_, i) => i > 1)
                                .map((image, index) => (
                                    <Image
                                        key={index}
                                        src={image}
                                        alt={post.title}
                                        className="rounded-xl"
                                        width="500"
                                        height="500"
                                    />
                                ))}
                        </div>
                    </Container>
                )}
            </main>
        </div>
    );
}
