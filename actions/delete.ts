"use server";

import { prisma } from "@/lib/db";
import { Session } from "next-auth";
import { redirect } from "next/navigation";

export async function deleteuser({ session }: { session: Session }) {
  const id = session?.user?.id;

  if (!id) {
    return null;
  }

  await prisma.user.delete({
    where: { id: id },
  });

  await prisma.account.delete({
    where: { id: id },
  });

  redirect("/");
}
