import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const blogSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(2, {
    message: "Too short",
  }),
  imageUrl: z.string(),
  content: z.string(),
  creatorId: z.string(),
  updatedAt: z.date().optional(),
});

export const blogInitialValues = {
  title: "",
  imageUrl: "",
  content: "",
  creatorId: "",
};

export const blogFormResolver = zodResolver(blogSchema);

export type BlogSchema = z.infer<typeof blogSchema>;
