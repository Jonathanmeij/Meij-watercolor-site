import React from "react";

const Label = React.forwardRef<
    HTMLLabelElement,
    React.LabelHTMLAttributes<HTMLLabelElement>
>((props, ref) => {
    return <label ref={ref} className="text-neutral-500" {...props} />;
});

Label.displayName = "Label";

const FormSection = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex flex-col gap-1 ">{children}</div>;
};

export { Label, FormSection };
