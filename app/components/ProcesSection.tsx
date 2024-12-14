import { Contact } from "./Contact";
import { Container } from "./container";
import Image from "next/image";

export default function ContactSection({ title }: { title: string }) {
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

function IconAndText({ children }: { children: React.ReactNode }) {
    return <div className="flex gap-2 items-center">{children}</div>;
}

function MailIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-5 text-white"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
        </svg>
    );
}
