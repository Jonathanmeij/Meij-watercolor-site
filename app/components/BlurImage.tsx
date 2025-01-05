import { getBlurData } from "@/lib/blur-generator";
import Image, { ImageProps } from "next/image";
import { forwardRef } from "react";

const BlurImage = forwardRef<HTMLImageElement, ImageProps>(
    async ({ src, ...props }, ref) => {
        const { base64 } = await getBlurData(src as string);

        return (
            // eslint-disable-next-line jsx-a11y/alt-text
            <Image
                {...props}
                src={src}
                ref={ref}
                blurDataURL={base64}
                placeholder="blur"
            />
        );
    }
);

BlurImage.displayName = "BlurImage";

export default BlurImage;
