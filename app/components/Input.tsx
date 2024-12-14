import React from "react";

const Input = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
    return (
        <input
            ref={ref}
            className=" p-2 px-3 border border-neutral-300 font-medium  rounded-md"
            {...props}
        />
    );
});
Input.displayName = "Input";

export default Input;
