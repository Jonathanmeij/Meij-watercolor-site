import Link from "next/link";
import { Container } from "./container";

export default function Navbar({ className }: { className?: string }) {
    return (
        <nav className={`w-screen text-white ${className}`}>
            <Container className="flex py-6 items-center justify-between w-full">
                <h1 className="text-2xl font-semibold">Meij watercolor</h1>
                <div className="flex gap-4 font-medium  tracking-wide">
                    <Link href="/about">Aanbod</Link>
                    <Link href="/posts">Tekening in opdracht</Link>
                    <Link href="/contact">Over mij</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </Container>
        </nav>
    );
}
