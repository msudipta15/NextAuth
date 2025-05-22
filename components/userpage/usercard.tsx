"use server";

import { auth } from "@/auth";

export async function UserCard() {
  const session = await auth();

  return (
    <div>
      <div className="text-center">Hello {session?.user?.name}</div>
    </div>
  );
}
