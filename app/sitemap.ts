import { MetadataRoute } from "next";
import { client } from "@/sanity/client";

const BLOGS_QUERY = `*[
    _type == "blog"
    && defined(slug.current)
    && defined(publishedAt)
  ] | order(publishedAt desc) {
    "slug": slug.current,
    publishedAt
  }`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const blogs = await client.fetch<Array<{ slug: string; publishedAt: string }>>(
        BLOGS_QUERY,
        {},
        { next: { revalidate: 3600 } }
    );

    const blogEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
        url: `https://meijline.nl/blog/${blog.slug}`,
        lastModified: new Date(blog.publishedAt),
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [
        {
            url: "https://meijline.nl",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: "https://meijline.nl/aanbod",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://meijline.nl/blogs",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://meijline.nl/overmij",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            url: "https://meijline.nl/contact",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
        ...blogEntries,
    ];
}
