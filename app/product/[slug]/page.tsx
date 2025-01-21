import { PortableText, type SanityDocument } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import { Container } from "@/app/components/container";
import Navbar from "@/app/components/navbar";
import ContactSection from "@/app/components/ContactSection";
import Link from "next/link";
import Image from "next/image";
import { ImageDialogTrigger } from "@/app/components/ImageDialog";
import { urlFor } from "@/lib/utils";

const ALL_SLUGS_QUERY = `*[
    _type == "product" && defined(slug.current)
  ].slug.current
  `;

export async function generateStaticParams() {
    const slugs: string[] = await client.fetch(ALL_SLUGS_QUERY);

    return slugs.map((slug) => ({
        slug,
    }));
}

const POST_QUERY = `*[
    _type == "product"
    && defined(slug.current) && slug.current == $slug][0]`;

export const revalidate = 99999;

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
        <div className="min-h-screen bg-amber-50/50 relative overflow-hidden">
            <div className="absolute -top-[50px] sm:top-[120px] left-[96%] sm:left-[5%] w-[300px] h-[300px] rounded-full opacity-10 lg:opacity-20 rotate-45 transform -translate-x-1/2 overflow-hidden">
                <Image
                    src="/images/splash.jpg"
                    alt="Watercolor splash"
                    className="object-cover"
                    fill
                    style={{ filter: "hue-rotate(100deg)" }}
                />
            </div>
            <div className="absolute top-[16%] left-[5%] sm:left-[97%] size-[400px] rounded-full opacity-10 lg:opacity-15 -rotate-90 transform -translate-x-1/2 overflow-hidden">
                <Image
                    src="/images/splash.jpg"
                    alt="Watercolor splash"
                    fill
                    className="object-cover"
                    style={{ filter: "hue-rotate(70deg)" }}
                />
            </div>

            <main className="relative z-10">
                <Navbar className="!text-green-950 " />
                <Container size={"sm"} className="pt-0 space-y-6">
                    <div className="pt-1 -mb-3">
                        <Link href="/" className="hover:underline">
                            ← Terug naar overzicht
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 items-center">
                        <div className="w-full">
                            <h1 className="md:text-4xl text-3xl font-bold mb-4">
                                {post.title}
                            </h1>
                            <div className="prose">
                                {Array.isArray(post.description) && (
                                    <PortableText value={post.description} />
                                )}
                            </div>
                        </div>
                        {postImageUrl && (
                            <ImageDialogTrigger
                                src={postImageUrl}
                                width={550}
                                height={550}
                                alt={post.title}
                                className="rounded-xl"
                                originalSrc={post.image}
                            />
                        )}
                    </div>
                    <div className="grid grid-cols-1 items-center gap-6  sm:grid-cols-2">
                        {images[0] && (
                            <ImageDialogTrigger
                                src={images[0]}
                                width={550}
                                height={550}
                                alt={post.title}
                                className="rounded-xl"
                                originalSrc={post.paginaFotos[0]}
                            />
                        )}

                        <div className="space-y-4">
                            <h2 className="md:text-4xl text-3xl  font-bold">
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
                        <h2 className="md:text-4xl text-3xl font-bold mb-8">
                            Meer {post.title}
                        </h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {images
                                .filter((_, i) => i > 1)
                                .map(
                                    (image, index) =>
                                        image && (
                                            <ImageDialogTrigger
                                                key={index}
                                                src={image}
                                                width={550}
                                                height={550}
                                                alt={post.title}
                                                loading="lazy"
                                                className="rounded-xl"
                                                originalSrc={post.paginaFotos[index + 2]}
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
