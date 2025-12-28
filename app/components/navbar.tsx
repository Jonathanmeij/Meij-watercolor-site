import Link from "next/link";
import { Container } from "./container";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogClose, DialogTitle } from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import Logo from "@/components/Logo";
import Image from "next/image";

const links = [
    { href: "/aanbod", label: "Aanbod" },
    { href: "/blogs", label: "Blogs" },
    { href: "/overmij", label: "Over mij" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar({ className }: { className?: string }) {
    return (
        <nav className={`w-screen text-white ${className}`}>
            <Container
                size="sm"
                className="flex py-6 items-center justify-between w-full"
            >
                <Link href="/" aria-label="Home">
                    <Logo />
                </Link>
                <div className=" gap-4 font-medium hidden md:flex tracking-wide">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href}>
                            {link.label}
                        </Link>
                    ))}
                </div>
                <MobileMenu />
            </Container>
        </nav>
    );
}

function MobileMenu() {
    return (
        <div className="md:hidden">
            <Dialog>
                <DialogTrigger>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </DialogTrigger>
                <DialogContent>
                    <div className="relative">
                        <div className="absolute top-[50%]  left-[20%] sm:left-[5%] w-[400px] h-[400px] rounded-full opacity-20 rotate-90 transform -translate-x-1/2 overflow-hidden">
                            <Image
                                src="/images/splash.jpg"
                                alt="Watercolor splash"
                                className="object-cover"
                                fill
                                style={{ filter: "hue-rotate(100deg)" }}
                            />
                        </div>
                        <div className="flex justify-between h-min items-center">
                            <DialogTitle className="text-2xl font-semibold">
                                <Logo />
                            </DialogTitle>
                            <DialogClose className="rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-500 dark:ring-offset-neutral-950 dark:focus:ring-neutral-300 dark:data-[state=open]:bg-neutral-800 dark:data-[state=open]:text-neutral-400">
                                <X className="size-6" />
                                <span className="sr-only">Close</span>
                            </DialogClose>
                        </div>
                        <div className="flex text-xl  h-min py-8 flex-col gap-1">
                            {links.map((link, index) => (
                                <DialogClose key={link.href} asChild>
                                    <Link
                                        className={
                                            "py-3 px-4 border-b border-neutral-200/70 " +
                                            (index === 0 ? "border-t" : "")
                                        }
                                        href={link.href}
                                    >
                                        {link.label}
                                    </Link>
                                </DialogClose>
                            ))}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
