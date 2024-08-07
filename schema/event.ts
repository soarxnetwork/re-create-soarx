import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const eventSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(2, {
    message: "Too short",
  }),
  date: z.date(),
  startTime: z.string(),
  endTime: z.string(),
  description: z.string().min(2, {
    message: "Too short",
  }),
  home_description: z.string().min(2, {
    message: "Too short",
  }),
  location: z.string().min(2, {
    message: "Too short",
  }),
  meeturl: z.string().optional(),
  venue: z.string().optional(),
  slug: z.string().min(2, {
    message: "Too short",
  }),
  imageUrl: z.string(),
  hostImage: z.string().optional(),
  hostName: z.string().optional(),
  hostLinkedinId: z.string().optional(),
  hostInstgramId: z.string().optional(),
  updatedAt: z.date().optional(),
  creatorId: z.string(),
  redirectionwhileRegister: z.boolean().optional(),
  RedirectionLink: z.string().optional()
});

export const eventInitialValues = {
  title: "",
  date: new Date(),
  description: "",
  location: "",
  imageUrl: "",
  creatorId: "",
  slug: "",
  hostImage: "",
  hostName: "",
  hostLinkedinId: "",
  hostInstgramId: "",
  redirectionwhileRegister: false,
  RedirectionLink: ""
};
export const eventFormResolver = zodResolver(eventSchema);
export type EventSchema = z.infer<typeof eventSchema>;
