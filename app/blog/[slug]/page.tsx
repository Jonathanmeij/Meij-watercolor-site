import { PortableText, type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { Container } from "@/app/components/container";
import Navbar from "@/app/components/navbar";
import ContactSection from "@/app/components/ContactSection";
import Link from "next/link";
import Image from "next/image";
import { ImageDialogTrigger } from "@/app/components/ImageDialog";
import { urlFor } from "@/lib/utils";

const ALL_SLUGS_QUERY = `*[
    _type == "blog" && defined(slug.current)
  ].slug.current
  `;

export async function generateStaticParams() {
    const slugs: string[] = await client.fetch(ALL_SLUGS_QUERY);

    return slugs.map((slug) => ({
        slug,
    }));
}

const BLOG_QUERY = `*[
    _type == "blog"
    && defined(slug.current) && slug.current == $slug][0]`;

export const revalidate = 3600;

export default async function BlogPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const blog = await client.fetch<SanityDocument>(BLOG_QUERY, await params);

    if (!blog) {
        return (
            <div className="min-h-screen bg-amber-50/50">
                <Navbar className="!text-green-950" />
                <Container size={"sm"} className="pt-20">
                    <h1 className="text-4xl font-bold mb-4">Blog niet gevonden</h1>
                    <Link href="/blogs" className="hover:underline">
                        ← Terug naar blogs
                    </Link>
                </Container>
            </div>
        );
    }

    const blogImageUrl = blog.image
        ? urlFor(blog.image)?.width(800).height(450).url()
        : null;

    const publishedDate = blog.publishedAt
        ? new Date(blog.publishedAt).toLocaleDateString("nl-NL", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
        : null;

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
                <Navbar className="!text-green-950" />
                <Container size={"sm"} className="pt-0 space-y-6">
                    <div className="pt-1 -mb-3">
                        <Link href="/blogs" className="hover:underline">
                            ← Terug naar blogs
                        </Link>
                    </div>

                    <article className="space-y-6">
                        <div>
                            <h1 className="md:text-4xl text-3xl font-bold mb-4">
                                {blog.title}
                            </h1>
                            {publishedDate && (
                                <p className="text-neutral-600 mb-4">{publishedDate}</p>
                            )}
                        </div>

                        {blogImageUrl && (
                            <div className="flex justify-center w-full">
                                <div className="w-full max-w-5xl">
                                    <ImageDialogTrigger
                                        src={blogImageUrl}
                                        width={800}
                                        height={450}
                                        alt={blog.title}
                                        className="rounded-xl w-full"
                                        originalSrc={blog.image}
                                    />
                                </div>
                            </div>
                        )}

                        <div className="max-w-3xl mx-auto">
                            {Array.isArray(blog.content) && (
                                <PortableText
                                    value={blog.content}
                                    components={{
                                        block: {
                                            h1: ({ children }) => (
                                                <h1 className="text-4xl font-bold text-green-950 mb-6 mt-8">
                                                    {children}
                                                </h1>
                                            ),
                                            h2: ({ children }) => (
                                                <h2 className="text-3xl font-bold text-green-950 mb-4 mt-6">
                                                    {children}
                                                </h2>
                                            ),
                                            h3: ({ children }) => (
                                                <h3 className="text-2xl font-bold text-green-950 mb-3 mt-4">
                                                    {children}
                                                </h3>
                                            ),
                                            h4: ({ children }) => (
                                                <h4 className="text-xl font-bold text-green-950 mb-2 mt-3">
                                                    {children}
                                                </h4>
                                            ),
                                            normal: ({ children }) => (
                                                <p className="text-neutral-700 mb-4 leading-relaxed">
                                                    {children}
                                                </p>
                                            ),
                                            blockquote: ({ children }) => (
                                                <blockquote className="border-l-4 border-green-950 pl-4 italic text-neutral-600 my-4">
                                                    {children}
                                                </blockquote>
                                            ),
                                        },
                                        list: {
                                            bullet: ({ children }) => (
                                                <ul className="list-disc ml-6 mb-4 space-y-2">
                                                    {children}
                                                </ul>
                                            ),
                                            number: ({ children }) => (
                                                <ol className="list-decimal ml-6 mb-4 space-y-2">
                                                    {children}
                                                </ol>
                                            ),
                                        },
                                        listItem: {
                                            bullet: ({ children }) => (
                                                <li className="text-neutral-700">
                                                    {children}
                                                </li>
                                            ),
                                            number: ({ children }) => (
                                                <li className="text-neutral-700">
                                                    {children}
                                                </li>
                                            ),
                                        },
                                        marks: {
                                            strong: ({ children }) => (
                                                <strong className="font-semibold text-neutral-900">
                                                    {children}
                                                </strong>
                                            ),
                                            em: ({ children }) => (
                                                <em className="italic">{children}</em>
                                            ),
                                            link: ({ children, value }) => {
                                                const href = value?.href || "#";
                                                return (
                                                    <a
                                                        href={href}
                                                        className="text-green-950 underline hover:text-green-800"
                                                        target={
                                                            href.startsWith("http") ? "_blank" : undefined
                                                        }
                                                        rel={
                                                            href.startsWith("http")
                                                                ? "noopener noreferrer"
                                                                : undefined
                                                        }
                                                    >
                                                        {children}
                                                    </a>
                                                );
                                            },
                                            code: ({ children }) => (
                                                <code className="text-green-950 bg-amber-100 px-1 py-0.5 rounded text-sm font-mono">
                                                    {children}
                                                </code>
                                            ),
                                        },
                                        types: {
                                            image: ({ value }) => {
                                                const imageUrl = value?.asset
                                                    ? urlFor(value.asset)
                                                        ?.width(800)
                                                        .height(450)
                                                        .url()
                                                    : null;
                                                if (!imageUrl) return null;
                                                return (
                                                    <div className="flex justify-center w-full my-6">
                                                        <div className="w-full max-w-5xl">
                                                            <ImageDialogTrigger
                                                                src={imageUrl}
                                                                width={800}
                                                                height={450}
                                                                alt={value?.alt || "Blog image"}
                                                                className="rounded-xl w-full"
                                                                originalSrc={value.asset}
                                                            />
                                                        </div>
                                                    </div>
                                                );
                                            },
                                        },
                                    }}
                                />
                            )}
                        </div>
                    </article>
                </Container>
                <ContactSection />
            </main>
        </div>
    );
}

