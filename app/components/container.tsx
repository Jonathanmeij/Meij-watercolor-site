import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const containerVariants = cva("w-full mx-auto", {
    variants: {
        size: {
            default: " max-w-screen-2xl",
            sm: "max-w-screen-lg",
            xs: "max-w-screen-md",
            xxs: "max-w-screen-sm",
            xxxs: "max-w-lg",
        },
        padding: {
            default: "p-6",
            none: "p-0",
        },
        height: {
            default: "",
            screen: "min-h-[calc(100vh-100px)]",
        },
    },
    defaultVariants: {
        size: "default",
        padding: "default",
        height: "default",
    },
});

export interface ContainerProps
    extends React.ButtonHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof containerVariants> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
    ({ className, size, height, padding, ...props }, ref) => {
        return (
            <div
                className={containerVariants({ size, padding, height, className })}
                ref={ref}
                {...props}
            />
        );
    }
);

Container.displayName = "Container";

export { Container };
