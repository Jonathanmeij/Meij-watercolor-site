import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { Container } from "@/app/components/container";
import Navbar from "@/app/components/navbar";
import ContactSection from "@/app/components/ContactSection";
import { BlogCard } from "@/app/components/BlogCard";
import Image from "next/image";

const BLOGS_QUERY = `*[
    _type == "blog"
    && defined(slug.current)
    && defined(publishedAt)
  ] | order(publishedAt desc)`;

const options = { next: { revalidate: 3600 } };

export const revalidate = 3600;

export default async function BlogsPage() {
    const blogs = await client.fetch<SanityDocument[]>(BLOGS_QUERY, {}, options);

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
                    <div className="pt-1">
                        <h1 className="text-4xl font-bold mb-6">Blogs</h1>
                        {blogs.length === 0 ? (
                            <p className="text-neutral-600">
                                Er zijn nog geen blogs beschikbaar.
                            </p>
                        ) : (
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {blogs.map((blog) => (
                                    <BlogCard key={blog._id} document={blog} />
                                ))}
                            </div>
                        )}
                    </div>
                </Container>
                <ContactSection />
            </main>
        </div>
    );
}

