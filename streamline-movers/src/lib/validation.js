import { z } from "zod";

export const step1Schema = z.object({
    moveSize: z.string({
        required_error: "Please select a move size",
    }),
});

export const step2Schema = z.object({
    movingFrom: z.string().min(6, "Please enter a valid postal code"),
    movingTo: z.string().min(6, "Please enter a valid postal code"),
    moveDate: z.string({
        required_error: "Please select a move date",
    }).refine((date) => new Date(date) > new Date(), {
        message: "Date must be in the future",
    }),
    urgency: z.enum(["urgent", "soon", "flexible", "browsing"], {
        required_error: "Please select an urgency level",
    }),
});

export const step3Schema = z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    phone: z.string().min(10, "Please enter a valid phone number").regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, "Invalid phone number format"),
    email: z.string().email("Please enter a valid email address"),
});

export const combinedSchema = step1Schema.and(step2Schema).and(step3Schema);