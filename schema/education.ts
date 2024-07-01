import { z } from "zod";


export const educationSchema = z.object({
    educationId: z.string().optional(),
    userId: z.string(),
    college_schoolName: z.string(),
    degree: z.string().optional(),
    fieldOfstudy: z.string().optional(),
    StartDate: z.date(),
    EndDate: z.date(),
    grade: z.number().min(0).max(100).nullable().optional(),
});

export type educationSchemaProps = z.infer<typeof educationSchema>;
