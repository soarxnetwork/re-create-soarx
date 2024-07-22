import { z } from "zod";
import validator from "validator";
import { zodResolver } from "@hookform/resolvers/zod";


export const userSchema = z.object({
  id: z.string(),
  email: z.string().email({
    message: "Invalid email",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long"
  }).optional(),
  confirmPassword: z.string().min(8).optional(),
  username: z.string().min(3, {
    message: "Username must be at least 3 characters long"
  }).optional(),
  profession: z.string(),
  phone: z.string().refine(validator.isMobilePhone, "Invalid phone number"),
    image: z.string().optional(),
  bgImage: z.string().optional(),
  summary: z.string().min(20, {
    message: "Summary must be at least 20 characters long"
  }).optional(),
  gender: z.string(),
  country: z.string(),
  city: z.string().min(2, {
    message: "City is required"
  }),
  college: z.string().min(1, {
    message: "College name is neccessary"
  }),
}).refine(data => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords do not match"
});


export const userInitialValues = {
  profession: "",
  username: "",
  gender: "",
  country: "",
  city: "",
  pincode:"",
  phone: "",
  image: "",
  bgImage: "",
  summary: "",
}
export const eventFormResolver = zodResolver(userSchema);
export type userSchemaProps = z.infer<typeof userSchema>;
