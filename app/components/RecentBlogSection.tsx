import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { Container } from "./container";
import { BlogCard } from "./BlogCard";
import Link from "next/link";

const RECENT_BLOGS_QUERY = `*[
    _type == "blog"
    && defined(slug.current)
    && defined(publishedAt)
  ] | order(publishedAt desc) [0...3]`;

const options = { next: { revalidate: 3600 } };

export async function RecentBlogSection() {
    const blogs = await client.fetch<SanityDocument[]>(
        RECENT_BLOGS_QUERY,
        {},
        options
    );

    if (blogs.length === 0) {
        return null;
    }

    return (
        <Container size="sm" className="py-16">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-4xl font-bold">Recente Blogs</h2>
                <Link
                    href="/blogs"
                    className="text-green-950 hover:underline font-medium"
                >
                    Bekijk alle blogs →
                </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog) => (
                    <BlogCard key={blog._id} document={blog} />
                ))}
            </div>
        </Container>
    );
}

