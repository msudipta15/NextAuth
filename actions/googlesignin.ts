"use server";
import { signIn } from "@/auth";

export async function googlesignin() {
  await signIn("google", { redirectTo: "/user/info" });
}
