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
