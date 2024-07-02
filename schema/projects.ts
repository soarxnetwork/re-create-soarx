import { z } from 'zod';

export const projectsSchema = z.object({
        id: z.string().optional(),
        userId: z.string(),
        ProjectName: z.string(),
        ProjectLink: z.string(),
        SummaryOfProject: z.string(),
        SkillsUsed: z.array(z.string()).optional(),
        
    });

export type projectsSchemaProps = z.infer<typeof projectsSchema>;