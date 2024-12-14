import React from "react";

const Button = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
    return (
        <button
            ref={ref}
            className={
                "px-4 py-2 shadow-sm bg-green-950 text-white rounded-md " + className
            }
            {...props}
        />
    );
});
Button.displayName = "Button";

export default Button;
