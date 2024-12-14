import { Contact } from "./Contact";
import { Container } from "./container";
import Image from "next/image";

export default function ContactSection() {
    return (
        <section className="bg-green-950 text-neutral-50 py-10 md:py-16">
            <Container size="sm" className="flex md:flex-row flex-col gap-6 items-center">
                <Contact />
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
