"use client";

import { UserCard } from "@/components/userpage/usercard";

export default function Page() {
  return (
    <div className="w-full h-screen flex justify-center items-center  bg-gradient-to-r from-purple-500 to-purple-900">
      <div className="w-[400px] h-[450px] bg-white flex flex-col justify-center rounded-lg">
        <UserCard />
      </div>
    </div>
  );
}
