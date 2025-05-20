import { z } from "zod";

export function SignupSchema() {
  const signupSchema = z.object({
    fullname: z.string().min(2, { message: "Enter your full name" }).max(50),
    email: z.string().email({ message: "Enter a valid email" }).min(2, {
      message: "Enter a valid email",
    }),
    password: z
      .string()
      .min(2, { message: "Password must be more than 2 characters" })
      .max(10, { message: "Password must be less than 10 characters" }),
  });

  return signupSchema;
}
