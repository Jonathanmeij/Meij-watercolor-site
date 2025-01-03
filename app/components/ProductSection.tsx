import { SanityDocument } from "next-sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import { Container } from "./container";
import Image from "next/image";

const options = { next: { revalidate: 120 } };

const POSTS_QUERY = `*[
    _type == "product"
    && defined(slug.current)
  ]`;

export async function ProductSection() {
    const products = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
    return (
        <Container size="sm" className=" sm:mt-0">
            <h1 className="text-4xl   font-bold mb-6">Producten</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {products.map((product) => (
                    <ProductCard key={product.title} document={product} />
                ))}
            </div>
        </Container>
    );
}

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
    projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null;

function ProductCard({ document }: { document: SanityDocument }) {
    const postImageUrl = document.image
        ? urlFor(document.image)?.width(550).height(310).url()
        : "/images/placeholder.svg";

    return (
        <a
            href={"/product/" + document.slug.current}
            className="bg-white shadow-lg rounded-lg p-4 group hover:shadow-xl transition-all"
        >
            <Image
                src={postImageUrl || "/images/placeholder.svg"}
                alt={document.title}
                width={550}
                height={500}
                className="w-full object-cover rounded"
            />
            <h1 className="text-xl font-bold mt-2 group-hover:underline">
                {document.title}
            </h1>
            <p>{document.korteBeschrhijving}</p>
        </a>
    );
}
