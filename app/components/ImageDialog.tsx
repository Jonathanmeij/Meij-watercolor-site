"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn, urlFor } from "@/lib/utils";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Spinner from "./Spinner";

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
    currentImage: SanityImageSource;
    images: string[];
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}) {
    const [isLoading, setIsLoading] = useState(true);
    const [imageError, setImageError] = useState(false);
    const imageUrl = currentImage ? urlFor(currentImage)?.width(1000).url() : null;
    const dimensions = imageUrl ? getImageDimensionsFromUrl(imageUrl) : null;

    // Reset loading state when image changes
    useEffect(() => {
        if (isOpen && imageUrl) {
            setIsLoading(true);
            setImageError(false);
        }
    }, [isOpen, imageUrl]);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    const handleImageError = () => {
        setIsLoading(false);
        setImageError(true);
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="bg-transparent border-none p-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[95vw] max-h-[95vh] w-max h-max flex items-center justify-center">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute right-2 top-2 z-50 p-2 rounded-full bg-black/70 hover:bg-black/90 transition-colors backdrop-blur-sm shadow-lg"
                    aria-label="Close dialog"
                >
                    <X className="h-5 w-5 text-white" />
                </button>
                <VisuallyHidden>
                    <DialogTitle className="text-center text-2xl font-bold">
                        Afbeelding
                    </DialogTitle>
                </VisuallyHidden>
                {isLoading && (
                    <div className="flex items-center justify-center min-w-[200px] min-h-[200px]">
                        <Spinner />
                    </div>
                )}
                {imageUrl && dimensions && (
                    <Image
                        src={imageUrl}
                        alt="image"
                        width={dimensions.width}
                        height={dimensions.height}
                        className={cn(
                            "max-w-[95vw] max-h-[95vh] w-auto h-auto rounded-lg transition-all duration-500 ease-out origin-center",
                            isLoading ? "opacity-0 scale-95 absolute" : "opacity-100 scale-100",
                            imageError && "hidden"
                        )}
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                    />
                )}
                {imageError && (
                    <div className="flex items-center justify-center min-w-[200px] min-h-[200px] text-white bg-black/50 rounded-lg p-4">
                        <p>Failed to load image</p>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}

interface ImageProps {
    src: string;
    originalSrc: SanityImageSource;
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
        <div className="w-full">
            <button onClick={() => setIsOpen(true)} className="w-full">
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
