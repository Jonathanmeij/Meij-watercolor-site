"use client";

import { useState } from "react";
import { Container } from "./container";
import Button from "./Button";
import Input from "./Input";
import { FormSection, Label } from "./Label";

export function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.currentTarget);

        formData.append("access_key", "9af4a666-a4cd-4165-a765-d1ee6e4e2220");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.currentTarget.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div>
            <Container size="sm" className="py-10 ">
                <form onSubmit={onSubmit} className="flex flex-col gap-3">
                    <h2 className="text-3xl  font-bold mb-1">Neem contact met me op!</h2>
                    <FormSection>
                        <Label>Naam</Label>
                        <Input type="text" name="name" required />
                    </FormSection>
                    <FormSection>
                        <Label>Email</Label>
                        <Input type="email" name="email" required />
                    </FormSection>

                    <FormSection>
                        <Label>Bericht</Label>
                        <textarea
                            className=" border p-2 px-3 border-neutral-300 rounded-md"
                            name="message"
                            required
                        ></textarea>
                    </FormSection>

                    <Button className="mt-1" type="submit">
                        Submit Form
                    </Button>
                </form>
                <span>{result}</span>
            </Container>
        </div>
    );
}
