"use server";

import { SignupSchema } from "@/schemas/signupschema";
import { z } from "zod";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/db";

export async function signup(values: z.infer<ReturnType<typeof SignupSchema>>) {
  const validate = SignupSchema().safeParse(values);
  if (!validate.success) {
    return { error: "Invalid Input" };
  }
  const { email, password, fullname } = validate.data;
  const hashpassword = await bcrypt.hash(password, 10);

  const existing_user = await prisma.user.findFirst({
    where: { email: email },
  });

  if (existing_user) {
    return { error: "Email already exists !" };
  }

  await prisma.user.create({
    data: {
      name: fullname,
      email: email,
      password: hashpassword,
    },
  });

  return { success: "Sign up successfull" };
}
