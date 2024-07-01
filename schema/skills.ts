import { z } from "zod";

export const skillsSchema = z.object({
    userId: z.string(),
    technicalSkills: z.array(z.string()).optional(),
    softSkills: z.array(z.string()).optional(),
    AreasOfInterest: z.array(z.string()).optional(),
});


export type skillsSchemaProps = z.infer<typeof skillsSchema>;