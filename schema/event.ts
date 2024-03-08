import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const eventSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(2, {
    message: "Too short",
  }),
  date: z.date(),
  description: z.string().min(2, {
    message: "Too short",
  }),
  location: z.string().min(2, {
    message: "Too short",
  }),
  slug: z.string().min(2, {
    message: "Too short",
  }),
  imageUrl: z.string(),
  updatedAt: z.date().optional(),
  creatorId: z.string(),
});

export const eventInitialValues = {
  title: "",
  date: new Date(),
  description: "",
  location: "",
  imageUrl: "",
  creatorId: "",
  slug: "",
};
export const eventFormResolver = zodResolver(eventSchema);
export type EventSchema = z.infer<typeof eventSchema>;
