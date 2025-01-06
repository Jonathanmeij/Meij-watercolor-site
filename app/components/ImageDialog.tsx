"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn, urlFor } from "@/lib/utils";
import { DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

export default function ImageDialog({
    currentImage,
    isOpen,
    setIsOpen,
}: {
    currentImage: string;
    images: string[];
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}) {
    const imageUrl = currentImage ? urlFor(currentImage)?.width(1000).url() : null;

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="bg-transparent border-none p-2">
                <div className="relative">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute right-4 top-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                    >
                        <X className="h-6 w-6 text-white" />
                    </button>
                    <DialogTitle className="text-center text-2xl font-bold">
                        Afbeelding
                    </DialogTitle>
                    {imageUrl && (
                        <Image
                            src={imageUrl}
                            alt="image"
                            fill
                            className="object-contain h-min w-min"
                        />
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}

interface ImageProps {
    src: string;
    originalSrc: string;
    width?: number;
    height?: number;
    alt: string;
    className?: string;
    style?: React.CSSProperties;
    loading?: "eager" | "lazy";
}

export function ImageDialogTrigger({
    src,
    width,
    height,
    alt,
    className,
    style,
    originalSrc,
    loading,
}: ImageProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>
                <Image
                    src={src}
                    width={width}
                    height={height}
                    alt={alt}
                    className={cn("rounded-xl", className)}
                    style={style}
                    loading={loading}
                />
            </button>
            <ImageDialog
                currentImage={originalSrc}
                images={[src]}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </div>
    );
}
