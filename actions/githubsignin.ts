"use server";
import { signIn } from "@/auth";

export async function githubsignin() {
  await signIn("github", { redirectTo: "/user/info" });
}
