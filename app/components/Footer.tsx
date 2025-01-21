import { Instagram, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-green-950  text-white py-20">
            <div className="container mx-auto px-4">
                <nav className="mb-6">
                    <ul className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <li>
                            <Link href="/" className="hover:underline">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/aanbod" className="hover:underline">
                                Aanbod
                            </Link>
                        </li>
                        <li>
                            <Link href="/overmij" className="hover:underline">
                                Over mij
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:underline">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex justify-center space-x-4 mb-4">
                    <a
                        href="https://www.instagram.com/meijline"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-300"
                    >
                        <Instagram size={24} />
                        <span className="sr-only">Instagram</span>
                    </a>
                    <a
                        href="mailto:your.email@example.com"
                        className="hover:text-green-300"
                    >
                        <Mail size={24} />
                        <span className="sr-only">Email</span>
                    </a>
                </div>
                <p className="text-center mb-4">KVK: 96193395</p>
                <div className="text-center text-sm">
                    &copy; 2025 Meijline. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
