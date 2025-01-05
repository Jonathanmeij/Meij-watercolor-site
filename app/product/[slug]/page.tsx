import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import { Container } from "@/app/components/container";
import Navbar from "@/app/components/navbar";
import ContactSection from "@/app/components/ContactSection";
import Link from "next/link";
import Image from "next/image";

const POST_QUERY = `*[
    _type == "product"
    && defined(slug.current) && slug.current == $slug][0]`;

// const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
    projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null;

export default async function PostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const post = await client.fetch<SanityDocument>(POST_QUERY, await params);
    const postImageUrl = post.image
        ? urlFor(post.image)?.width(550).height(550).url()
        : null;
    const images: string[] = post.paginaFotos
        ? post.paginaFotos.map((image: SanityImageSource) => {
              return urlFor(image)?.width(550).height(550).url();
          })
        : [];

    return (
        <div className=" min-h-screen bg-amber-50/50">
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
                            // <ImageDialogTrigger
                            //     src={postImageUrl}
                            //     alt={post.title}
                            //     width={500}
                            //     height={500}
                            // />
                            <Image
                                src={postImageUrl}
                                width={500}
                                height={500}
                                alt={post.title}
                            />
                        )}
                    </div>
                    <div className="grid grid-cols-1 items-center gap-6  sm:grid-cols-2">
                        {images[0] && (
                            // <ImageDialogTrigger
                            //     src={images[0]}
                            //     alt={post.title}
                            //     className=" order-last sm:order-first"
                            //     width={500}
                            //     height={500}
                            // />
                            <Image
                                src={images[0]}
                                width={500}
                                height={500}
                                alt={post.title}
                            />
                        )}

                        <div className="space-y-4">
                            <h2 className="text-3xl  font-bold">
                                {post.title} laten maken?
                            </h2>

                            {Array.isArray(post.stappenPlan) && (
                                <PortableText
                                    components={{
                                        list: {
                                            bullet: ({ children }) => (
                                                <ul className="mt-xl">{children}</ul>
                                            ),
                                            number: ({ children }) => (
                                                <ol className="list-decimal list-inside space-y-1 ">
                                                    {children}
                                                </ol>
                                            ),
                                        },
                                    }}
                                    value={post.stappenPlan}
                                />
                            )}
                        </div>
                    </div>
                </Container>
                <ContactSection />
                {images.length > 2 && (
                    <Container size={"sm"}>
                        <h2 className="text-3xl font-bold mb-8">Meer {post.title}</h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {images
                                .filter((_, i) => i > 1)
                                .map(
                                    (image, index) =>
                                        image && (
                                            // <ImageDialogTrigger
                                            //     key={index}
                                            //     src={image}
                                            //     alt={post.title}
                                            //     width={500}
                                            //     height={500}
                                            // />
                                            <Image
                                                key={index}
                                                src={image}
                                                width={500}
                                                height={500}
                                                alt={post.title}
                                                loading="lazy"
                                            />
                                        )
                                )}
                        </div>
                    </Container>
                )}
            </main>
        </div>
    );
}
