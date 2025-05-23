"use client";

import { Button } from "../ui/button";
import { logout } from "@/actions/logout";

export function LogoutButton() {
  return (
    <div className="flex justify-center">
      <Button variant={"default"} size={"lg"} onClick={() => logout()}>
        Log out
      </Button>
    </div>
  );
}
