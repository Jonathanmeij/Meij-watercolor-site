import { SanityDocument } from "next-sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlFor } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
    document: SanityDocument;
}

export function BlogCard({ document }: BlogCardProps) {
    const blogImageUrl = document.image
        ? urlFor(document.image)?.width(550).height(310).url()
        : "/images/placeholder.svg";

    const publishedDate = document.publishedAt
        ? new Date(document.publishedAt).toLocaleDateString("nl-NL", {
              year: "numeric",
              month: "long",
              day: "numeric",
          })
        : null;

    return (
        <Link
            href={"/blog/" + document.slug.current}
            className="bg-white shadow-lg rounded-lg p-4 group hover:shadow-xl transition-all flex flex-col"
        >
            <Image
                src={blogImageUrl || "/images/placeholder.svg"}
                alt={document.title}
                width={550}
                height={310}
                className="w-full object-cover rounded mb-4"
            />
            <h2 className="text-xl font-bold mt-2 group-hover:underline">
                {document.title}
            </h2>
            {document.shortDescription && (
                <p className="text-neutral-600 mt-2 flex-grow">
                    {document.shortDescription}
                </p>
            )}
            {publishedDate && (
                <p className="text-sm text-neutral-500 mt-4">{publishedDate}</p>
            )}
        </Link>
    );
}

