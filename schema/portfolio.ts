import { z } from "zod";

export const portfolioSchema = z.object({
    userId: z.string(),
    WebsiteUrl: z.string().optional().nullable(),
    GithubUrl: z.string().optional().nullable(),
    LinkedInUrl: z.string().optional().nullable(),
    });

export type portfolioSchemaProps = z.infer<typeof portfolioSchema>;