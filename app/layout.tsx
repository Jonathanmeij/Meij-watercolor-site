import type { Metadata } from "next";
import "./globals.css";
import { Alegreya } from "next/font/google";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const alegreya = Alegreya({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Meijline",
    description: "Huisportretten en uitgeprinte tekeningen door Jaap van der Meij",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${alegreya.className} antialiased`}>
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <Analytics />
            <body>
                {children}
                <Footer />
            </body>
        </html>
    );
}
