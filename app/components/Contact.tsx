"use client";

import { Container } from "./container";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import Spinner from "./Spinner";

const formSchema = z.object({
    name: z
        .string()
        .min(2, "Naam moet meer dan 2 letters hebben")
        .max(50, "Naam moet tussen 2 en 50 letters zijn"),
    email: z.string().email("Ongeldig emailadres"),
    message: z
        .string()
        .min(5, "Bericht moet langer zijn dan 5 letters.")
        .max(500, "Bericht moet tussen 5 en 500 letters zijn"),
});

export function Contact() {
    const [result, setResult] = useState("");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        setResult("sending");

        const formData = new FormData();

        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("message", values.message);

        formData.append("access_key", "9af4a666-a4cd-4165-a765-d1ee6e4e2220");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("success");
            form.reset();
        } else {
            setResult("error");
        }
    }

    return (
        <div>
            <Container size="xxxs" className="py-10 ">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <h2 className="text-3xl  font-bold mb-1">
                            Neem contact met me op!
                        </h2>
                        <p>
                            Heb je een vraag, wil je een tekening laten maken of wil je
                            gewoon even hallo zeggen? Vul dan het formulier in en ik neem
                            zo snel mogelijk contact met je op!
                        </p>

                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Naam" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Bericht</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Bericht" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {result === "success" && (
                            <p className="text-white bg-green-700 py-2 px-3 rounded-md">
                                Bedankt voor je bericht!
                            </p>
                        )}

                        {result === "error" && (
                            <p className="text-red-500">
                                Er is iets misgegaan. Probeer het later opnieuw.
                            </p>
                        )}

                        <Button type="submit" disabled={result === "sending"}>
                            {result === "sending" && <Spinner />}
                            {result === "sending" ? "Laden..." : "Verstuur"}
                        </Button>
                    </form>
                </Form>
                {/* <span>{result}</span> */}
            </Container>
        </div>
    );
}
