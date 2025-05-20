import { LoginSchema } from "@/schemas/loginSchema";
import { z } from "zod";

export async function login(values: z.infer<ReturnType<typeof LoginSchema>>) {
  const validate = LoginSchema().safeParse(values);
  if (!validate.success) {
    return { error: "Invalid Input" };
  }

  return { success: "Succesfull !" };
}
