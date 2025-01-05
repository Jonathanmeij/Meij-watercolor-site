"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

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
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent>
                <DialogTitle>Image</DialogTitle>
                <div className="flex items-center justify-center">
                    <Image src={currentImage} width={500} height={500} alt="image" />
                </div>
            </DialogContent>
        </Dialog>
    );
}

interface ImageProps {
    src: string;
    width: number;
    height: number;
    alt: string;
    className?: string;
}

export function ImageDialogTrigger({ src, width, height, alt, className }: ImageProps) {
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
                />
            </button>
            <ImageDialog
                currentImage={src}
                images={[src]}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </div>
    );
}
