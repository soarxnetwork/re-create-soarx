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
  graduationYear: z.string(),
  inCodingClub: z.string().optional(),
  stream: z.string().optional(),
  strenghtStem: z.string().optional(),
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
