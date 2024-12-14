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
    // const [result, setResult] = useState("");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    // const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     setResult("Sending....");
    //     const formData = new FormData(event.currentTarget);

    //     formData.append("access_key", "9af4a666-a4cd-4165-a765-d1ee6e4e2220");

    //     const response = await fetch("https://api.web3forms.com/submit", {
    //         method: "POST",
    //         body: formData,
    //     });

    //     const data = await response.json();

    //     if (data.success) {
    //         setResult("Form Submitted Successfully");
    //         event.currentTarget.reset();
    //     } else {
    //         console.log("Error", data);
    //         setResult(data.message);
    //     }
    // };

    return (
        <div>
            <Container size="xxxs" className="py-10 ">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <h2 className="text-3xl  font-bold mb-1">
                            Neem contact met me op!
                        </h2>

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

                        <Button type="submit">Submit Form</Button>
                    </form>
                </Form>
                {/* <span>{result}</span> */}
            </Container>
        </div>
    );
}
