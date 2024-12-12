/* eslint-disable @next/next/no-img-element */
// const options = { next: { revalidate: 3600 } };
import { client } from "@/sanity/client";
import { Container } from "./components/container";
import Navbar from "./components/navbar";
import { SanityDocument } from "next-sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

const options = { next: { revalidate: 120 } };

const POSTS_QUERY = `*[
    _type == "product"
    && defined(slug.current)
  ]`;

export default async function IndexPage() {
    return (
        <>
            <div className="paper-bg header-mask">
                <Header />
                <WelcomeSection />
            </div>
            <ProductSection />
        </>
    );
}

function Header() {
    return (
        <div className="relative">
            <Navbar className="absolute top-0 z-50" />
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 space-y-2 -translate-y-1/2
 z-10"
            >
                <h1 className="text-4xl font-bold text-white max-w-md text-center ">
                    Huisportretten en uitgeprinte tekeningen
                </h1>
                <p className="text-white text-center text-lg">
                    Waterverf en digitale illustraties door Jaap
                </p>
            </div>
            <div className="header-mask overflow-hidden">
                <img
                    alt="Watercolor painting of a bridge"
                    src={"/images/headerPicture.png"}
                    className="object-cover w-full h-[30rem] scale-150 sm:scale-100"
                />
                <div className="absolute top-0 bg-gradient-to-b to-black/50  via-30% via-black/50 from-black/80 h-full w-full"></div>
            </div>
        </div>
    );
}

function WelcomeSection() {
    return (
        <Container
            className=" py-10 md:py-20 flex gap-8 items-center md:flex-row flex-col"
            size={"sm"}
        >
            <div>
                <h1 className="text-4xl font-bold mb-8">Hoi ik ben Jaap</h1>
                <p>
                    Ben je op zoek naar een uniek en persoonlijk cadeau dat écht indruk
                    maakt? Dan ben je hier aan het juiste adres! Ik creëer op maat
                    gemaakte tekeningen, zoals prachtige huisportretten of gedetailleerde
                    illustraties van winkels en bedrijfspanden. Heb je iets anders in
                    gedachten? Geen probleem! Denk bijvoorbeeld aan een tekening van je
                    boot, een doop- of belijdenistekst gecombineerd met een illustratie
                    van je kerk, of een ander bijzonder idee. Wat jouw wens ook is, ik
                    zorg ervoor dat het speciaal en helemaal op maat wordt gemaakt.
                    Daarnaast maak ik ook muurtekeningen! Kies een bestaand ontwerp of
                    laat er een speciaal voor jou ontwerpen. Samen zorgen we voor een
                    unieke en persoonlijke creatie die helemaal bij jou past. Laat je
                    inspireren en neem gerust contact op samen maken we jouw cadeau of
                    kunstwerk onvergetelijk!
                </p>
            </div>
            <Image
                src={"/images/profiel.png"}
                alt="Jaap"
                width={300}
                height={300}
                className="rounded-2xl shadow-lg"
            />
        </Container>
    );
}

async function ProductSection() {
    const products = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
    return (
        <Container size="sm" className=" sm:mt-0">
            <h1 className="text-4xl   font-bold mb-8">Producten</h1>
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

    console.log(document);

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
