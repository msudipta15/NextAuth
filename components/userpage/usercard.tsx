"use server";

import { auth } from "@/auth";

import Image from "next/image";
import { LogoutButton } from "../auth/logout";

export async function UserCard() {
  const session = await auth();

  return (
    <div>
      {session?.user?.image && (
        <div className="flex justify-center mb-2 ">
          <Image
            src={session?.user?.image}
            height={150}
            width={150}
            alt="user_avatar"
            className="rounded-full"
          />
        </div>
      )}
      <div className="text-center text-slate-700 text-lg font-medium">
        {session?.user?.email}
      </div>
      <div className="text-center text-slate-700 text-3xl font-medium">
        {session?.user?.name}
      </div>
      <div className="p-4">
        <LogoutButton />
      </div>
    </div>
  );
}
