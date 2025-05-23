// actions/login.ts
"use server";

import { z } from "zod";
import { LoginSchema } from "@/schemas/loginSchema";

export async function login(values: z.infer<ReturnType<typeof LoginSchema>>) {
  const validate = LoginSchema().safeParse(values);
  if (!validate.success) {
    return { success: false, error: validate.error.errors[0].message };
  }

  // Return validated data for client to handle signIn
  return { success: true, values: validate.data };
}
