import type { Metadata } from "next";
import "./globals.css";
import { Alegreya } from "next/font/google";

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
        <html lang="en">
            <body className={`${alegreya.className} antialiased`}>{children}</body>
        </html>
    );
}
