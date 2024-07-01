import { user } from "@nextui-org/react";
import { z } from "zod";

export const experienceSchema = z.object({
    id: z.string().optional(),
    userId: z.string(),
    Jobtitle: z.string().min(2, {
        message: "Too short",
    }),
    company: z.string().min(2, {
        message: "Too short",
    }),
    location: z.string().min(2, {
        message: "Too short",
    }),
    StartDate: z.date(),
    EndDate: z.date().optional().nullable(),
    currentlyWorking: z.boolean(),
    EmploymentType: z.string().min(2, {
        message: "Too short",
    }),

    });

export type experienceSchemaProps = z.infer<typeof experienceSchema>;