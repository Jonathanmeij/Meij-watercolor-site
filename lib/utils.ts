import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import imageUrlBuilder from "@sanity/image-url";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const { projectId, dataset } = client.config();
export const urlFor = (source: SanityImageSource) =>
    projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null;

// Helper function to safely get image URL, returns null if image is invalid
export const getImageUrl = (source: SanityImageSource, width?: number, height?: number): string | null => {
    if (!source || typeof source !== 'object') {
        return null;
    }
    
    // Check if source has the required asset property
    const sourceObj = source as { asset?: unknown; _ref?: unknown };
    if (!sourceObj.asset && !sourceObj._ref) {
        return null;
    }
    
    try {
        const builder = urlFor(source);
        if (!builder) {
            return null;
        }
        
        let finalBuilder = builder;
        if (width) {
            finalBuilder = finalBuilder.width(width);
        }
        if (height) {
            finalBuilder = finalBuilder.height(height);
        }
        
        return finalBuilder.url();
    } catch (error) {
        console.error('Error generating image URL:', error);
        return null;
    }
};
