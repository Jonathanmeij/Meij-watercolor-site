import Link from "next/link";
import { Container } from "./container";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogClose, DialogTitle } from "@radix-ui/react-dialog";
import { X } from "lucide-react";

const links = [
    { href: "/about", label: "Aanbod" },
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
                <h1 className="text-2xl font-semibold">Meij watercolor</h1>
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
                    <div>
                        <div className="flex justify-between h-min items-center">
                            <DialogTitle className="text-2xl font-semibold">
                                Meij watercolor
                            </DialogTitle>
                            <DialogClose className="rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-500 dark:ring-offset-neutral-950 dark:focus:ring-neutral-300 dark:data-[state=open]:bg-neutral-800 dark:data-[state=open]:text-neutral-400">
                                <X className="size-6" />
                                <span className="sr-only">Close</span>
                            </DialogClose>
                        </div>
                        <div className="flex text-xl  h-min py-8 flex-col gap-1">
                            {links.map((link, index) => (
                                <Link
                                    className={
                                        "py-3 px-4 border-b border-neutral-200/70 " +
                                        (index === 0 ? "border-t" : "")
                                    }
                                    key={link.href}
                                    href={link.href}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
