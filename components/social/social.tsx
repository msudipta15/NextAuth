"use client";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { githubsignin } from "@/actions/githubsignin";

export function Social() {
  return (
    <div className="w-full flex gap-x-2 px-4 py-2 justify-between items-center">
      <Button variant={"outline"} size={"lg"} className="w-1/2">
        <FcGoogle />
      </Button>
      <Button
        onClick={() => githubsignin()}
        variant={"outline"}
        size={"lg"}
        className="w-1/2"
      >
        <FaGithub />
      </Button>
    </div>
  );
}
