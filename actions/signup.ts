import { SignupSchema } from "@/schemas/signupschema";
import { z } from "zod";

export async function login(values: z.infer<ReturnType<typeof SignupSchema>>) {
  const validate = SignupSchema().safeParse(values);
  if (!validate.success) {
    return { error: "Invalid Input" };
  }

  return { success: "Succesfull !" };
}
