import Link from "next/link";
import { Container } from "../components/container";
import Navbar from "../components/navbar";
import Image from "next/image";

export default async function AanbodPage() {
    return (
        <div className="bg-amber-50/[50%] min-h-screen">
            <Navbar className="!text-green-950 " />
            <Container size={"sm"} className="pt-0 space-y-6 pb-0 ">
                <div className="py-6">
                    <Link href="/" className="hover:underline">
                        ← Terug naar home
                    </Link>
                </div>
            </Container>
            <Container size={"sm"} className="pt-0 space-y-6 ">
                <div className="flex flex-col md:flex-row  gap-6 items-center">
                    <div>
                        <h1 className="text-4xl font-bold mb-6">Over mij</h1>
                        <div className=" space-y-2">
                            <p>
                                Hoi, ik ben Jaap van der Meij, 51 jaar, en tekenen is al
                                mijn hele leven mijn grote passie. Samen met een aantal
                                enthousiaste creatievelingen heb ik Urban Sketchers Leiden
                                opgericht. Eén keer per maand trekken we de stad in om de
                                prachtige Leidse straten en gebouwen vast te leggen.
                            </p>
                        </div>
                    </div>

                    <Image
                        src="/images/Overmij.png"
                        alt="Jaap van der Meij aan het tekenen"
                        width={300}
                        height={400}
                        className="rounded-xl"
                    />
                </div>
                <div className="flex flex-col-reverse md:flex-row  gap-6 items-center">
                    <Image
                        src="/images/Overmij2.png"
                        alt="Jaap van der Meij aan het tekenen"
                        width={300}
                        height={400}
                        className="rounded-xl"
                    />
                    <p>
                        Wat ik het allerliefste doe, is het maken van huisportretten en
                        illustraties van winkels en bedrijfspanden. Ik kan urenlang
                        helemaal opgaan in een tekening, oog voor detail is mijn kracht.
                        Regelmatig kreeg ik de vraag om panden te tekenen, en zo ontstond
                        het idee om mijn eigen website te starten. Inmiddels sta ik
                        ingeschreven bij de Kamer van Koophandel en ben ik klaar om jouw
                        unieke project tot leven te brengen.
                    </p>
                </div>
            </Container>
        </div>
    );
}
