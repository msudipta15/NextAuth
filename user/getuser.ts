import { prisma } from "@/lib/db";

export async function getuserbyemail({ email }: { email: string }) {
  try {
    const user = await prisma.user.findFirst({
      where: { email: email },
    });

    return user;
  } catch {
    return null;
  }
}

export async function getuserbyid(id: string) {
  try {
    const user = await prisma.user.findFirst({
      where: { id: id },
    });

    return user;
  } catch {
    return null;
  }
}
