import { zodResolver } from "@hookform/resolvers/zod";
import { select } from "@nextui-org/react";
import { z } from "zod";

export const JobFormSchema = z.object({
    id: z.string().optional(),
    title: z.string().min(2, {
        message: "Too short",
    }),
    description: z.string().min(2, {
        message: "Too short",
    }),

    location: z.string().min(2, {
        message: "Too short",
    }),
    aboutCompany: z.string().min(2, {
        message: "Too short",
    }),
    companyName: z.string().min(2, {
        message: "Too short",
    }),
    applyLink: z.string().min(2, {
        message: "Too short",
    }),
    salary: z.string().min(2, {
        message: "Too short",
    }),
    experience: z.string().min(2, {
        message: "Too short",
    }),
    lastDateToApply: z.string().optional(),
    slug: z.string().min(2, {
        message: "Too short",
    }),
    skills: z.string().min(2, {
        message: "Too short",
    }),
    qualificationRequired: z.string().min(2, {
        message: "Too short",
    }),
    imageUrl: z.string(),
    updatedAt: z.date().optional(),
    creatorId: z.string(),
});

export const JobFormInitialValues = {
    title: "",
    description: "",
    location: "",
    imageUrl: "",
    creatorId: "",
    slug: "",
    aboutCompany: "",
    companyName: "",
    applyLink: "",
    salary: "",
    experience: "",
    lastDateToApply: "",
    skills: "",
    qualificationRequired: "",
};
export const JobFormResolver = zodResolver(JobFormSchema);
export type JobSchema = z.infer<typeof JobFormSchema>;
