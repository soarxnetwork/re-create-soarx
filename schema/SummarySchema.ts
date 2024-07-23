import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const SummarySchema = z.object({
    id: z.string(),
    email: z.string(),
    summary: z.string().min(20, {message: "Summary must be atleast 20 words long"})
})

export type SummaryProp = z.infer<typeof SummarySchema>