"use client";

import { deleteuser } from "@/actions/delete";
import { Button } from "../ui/button";
import { Session } from "next-auth";

export function DeleteComponent({ session }: { session: Session }) {
  return (
    <div className=" flex justify-center mt-2">
      <Button onClick={() => deleteuser({ session })} variant={"destructive"}>
        Delete Account
      </Button>
    </div>
  );
}
