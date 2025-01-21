import { Container } from "./components/container";
import Navbar from "./components/navbar";
import Image from "next/image";
import { ProductSection } from "./components/ProductSection";
import headerPicture from "../public/images/headerPicture.png";
import Link from "next/link";
import { Contact } from "./components/Contact";

export default async function IndexPage() {
    return (
        <div className="bg-amber-50/[50%]">
            <div className="paper-bg header-mask ">
                <Header />
                <WelcomeSection />
            </div>
            <ProductSection />
            <div className="bg-green-950 text-white py-16">
                <Container size="xs">
                    <Contact />
                </Container>
            </div>
        </div>
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
                <h1 className="text-4xl font-bold text-white max-w-lg text-center  ">
                    Op maat gemaakte tekeningen en muurschilderingen
                </h1>
            </div>
            <div className="header-mask overflow-hidden">
                <Image
                    alt="Watercolor painting of a bridge"
                    src={headerPicture}
                    className="object-cover w-full h-[25rem] scale-150 sm:scale-100"
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
                <h2 className="text-4xl font-bold mb-4">Hoi ik ben Jaap</h2>
                <p>
                    Leuk dat je mijn website gevonden hebt! Ben je op zoek naar een uniek
                    en persoonlijk cadeau dat écht indruk maakt? Dan ben je hier aan het
                    juiste adres! Ik creëer op maat gemaakte tekeningen, zoals prachtige
                    huisportretten of gedetailleerde illustraties van winkels en
                    bedrijfspanden. Heb je iets anders in gedachten? Geen probleem! Denk
                    bijvoorbeeld aan een tekening van je boot, een doop- of
                    belijdenistekst gecombineerd met een illustratie van je kerk, of een
                    ander bijzonder idee. Wat jouw wens ook is, ik zorg ervoor dat het
                    speciaal en helemaal op maat wordt gemaakt. Daarnaast maak ik ook
                    muurtekeningen! Kies een bestaand ontwerp of laat er een speciaal voor
                    jou ontwerpen. Samen zorgen we voor een unieke en persoonlijke creatie
                    die helemaal bij jou past. Laat je inspireren en neem gerust contact
                    op samen maken we jouw cadeau of kunstwerk onvergetelijk!
                </p>
                <Link
                    className="bg-green-950 text-white px-4 rounded-lg py-2 mt-4 inline-block"
                    href="/contact"
                >
                    Contact opnemen
                </Link>
            </div>
            <Image
                src={"/images/Profiel.png"}
                alt="Jaap van der Meij en zijn vrouw"
                width={300}
                height={300}
                className="rounded-2xl shadow-lg"
            />
        </Container>
    );
}
