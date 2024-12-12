import { Container } from "./container";
import Image from "next/image";

export default function ProcesSection() {
    return (
        <section className="bg-green-950 text-neutral-50 py-10 md:py-20">
            <Container size="sm" className="flex md:flex-row flex-col gap-6 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Hoe gaan we te werk?</h2>
                    <ol className="list-decimal pl-4">
                        <li>Neem contact met me op via WhatsApp of e-mail</li>
                        <li>
                            Overleggen of het een handgemaakte of digitale tekening wordt
                        </li>
                        <li>
                            Vraag je een goede liefst meerdere foto’s naar mee te mailen
                        </li>
                        <li>
                            N.a.v de foto’s en de complexiteit van de tekening bepaal ik
                            de prijs deze ligt tussen de 90 en 130€
                        </li>
                        <li>
                            Bij een digitale versie neem ik halverwege contact met je op
                            en kun je veranderingen aangeven
                        </li>
                        <li>
                            Ik probeer de tekening binnen 3 weken af te hebben, mocht er
                            iets meer haast bij zitten dan kan je dat altijd even
                            aangeven, meestal kan ik het dan wel iets naar voren halen
                        </li>
                    </ol>
                </div>
                <Image
                    src={"/images/Drawing.png"}
                    alt={"Man aan het tekenen"}
                    width="400"
                    height="400"
                    className="opacity-90"
                />
            </Container>
        </section>
    );
}

// Hoe gaan we te werk 1 neem contact met me op via WhatsApp of e-mail 2 we
//                 overleggen of het een handgemaakte of digitale tekening wordt 3k vraag je
//                 een goede liefst meerdere foto’s naar mee te mailen. 4 n.a.v de foto’s en
//                 de complexiteit van de tekening bepaal ik de prijs deze ligt tussen de 90
//                 en 130€ 5 bij een digitale versie neem ik halverwege contact met je op en
//                 kun je veranderingen aangeven 6 ik probeer de tekening binnen 3 weken af
//                 te hebben, mocht er iets meer haast bij zitten dan kan je dat altijd even
//                 aangeven, meestal kan ik het dan wel iets naar voren halen.
