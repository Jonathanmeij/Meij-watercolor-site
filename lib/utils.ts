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

/**
 * Validates and safely generates an image URL from a Sanity image source.
 * Returns the URL string if valid, or null if the source is invalid.
 * 
 * @param source - The Sanity image source to validate and convert
 * @param fallbackUrl - Optional fallback URL to use if validation fails
 * @returns The validated image URL or fallback URL, or null if both fail
 */
export function getSafeImageUrl(
    source: SanityImageSource | null | undefined,
    fallbackUrl?: string
): string | null {
    // Check if source exists and is valid
    if (!source) {
        return fallbackUrl || null;
    }

    // Try to generate the URL
    try {
        const builder = urlFor(source);
        if (!builder) {
            return fallbackUrl || null;
        }

        const url = builder.url();
        
        // Validate that we got a proper URL string
        if (typeof url === "string" && url.length > 0) {
            return url;
        }

        return fallbackUrl || null;
    } catch (error) {
        console.error("Error generating image URL:", error);
        return fallbackUrl || null;
    }
}

/**
 * Validates if a Sanity image source is valid and can generate a URL.
 * 
 * @param source - The Sanity image source to validate
 * @returns true if the source is valid and can generate a URL, false otherwise
 */
export function isValidImageSource(source: SanityImageSource | null | undefined): boolean {
    if (!source) {
        return false;
    }

    try {
        const builder = urlFor(source);
        if (!builder) {
            return false;
        }

        const url = builder.url();
        return typeof url === "string" && url.length > 0;
    } catch {
        return false;
    }
}
