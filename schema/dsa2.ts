import { z } from "zod";

export const dsa2Schema = z.object({
  fullname: z.string().min(2, {
    message: "Too short",
  }),
  collegeEmail: z.string().email("Invalid email address"),
  collegeName: z.string().min(2, {
    message: "Too short",
  }),
  collegeLocation: z.string().min(2, {
    message: "Too short",
  }),
  graduationYear: z.enum(["2022", "2023", "2024", "2025", "2026"]),
  inCodingClub: z.string().min(2, {
    message: "Too short",
  }),
  stream: z.string().min(2, {
    message: "Too short",
  }),
  strenghtStem: z.string().min(2, {
    message: "Too short",
  }),
});
export type Dsa2Schema = z.infer<typeof dsa2Schema>;
export const defaultValuesDsa2: Dsa2Schema = {
  fullname: "",
  collegeEmail: "",
  collegeName: "",
  collegeLocation: "",
  graduationYear: "2022",
  inCodingClub: "",
  stream: "",
  strenghtStem: "",
};
