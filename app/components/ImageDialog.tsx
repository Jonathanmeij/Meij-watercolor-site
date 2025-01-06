"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn, urlFor } from "@/lib/utils";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

function getImageDimensionsFromUrl(url: string) {
    const match = url.match(/-(\d+)x(\d+)\./);
    if (match) {
        return {
            width: parseInt(match[1]),
            height: parseInt(match[2]),
        };
    }
    return null;
}

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
    const imageUrl = currentImage ? urlFor(currentImage)?.url() : null;
    const dimensions = imageUrl ? getImageDimensionsFromUrl(imageUrl) : null;

    console.log("imageUrl", imageUrl);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="bg-transparent border-none p-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative flex items-center justify-center">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute right-4 top-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                    >
                        <X className="h-6 w-6 text-white" />
                    </button>
                    <VisuallyHidden>
                        <DialogTitle className="text-center text-2xl font-bold">
                            Afbeelding
                        </DialogTitle>
                    </VisuallyHidden>
                    {imageUrl && dimensions && (
                        <Image
                            src={imageUrl}
                            alt="image"
                            width={dimensions.width}
                            height={dimensions.height}
                            className="max-h-[90vh] w-auto h-auto"
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
