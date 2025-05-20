"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export function SignupForm() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");

  const router = useRouter();

  function handlesubmit() {
    alert(`email: ${email} name: ${name} password: ${password}`);
  }

  return (
    <div className="bg-white flex flex-col gap-6 min-w-[350px] min-h-[400px] max-h-full max-w-full px-8 py-6 rounded-lg  justify-center ">
      <div className="text-center">
        <h1 className="text-3xl text-slate-900 font-bold">🔐 Auth</h1>
      </div>

      <div className="flex flex-col gap-1">
        <Label>Full Name</Label>
        <Input
          onChange={(e) => setname(e.target.value)}
          placeholder="Enter your name"
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label>Email</Label>
        <Input
          onChange={(e) => setemail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label>Password</Label>
        <Input
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      <div>
        <Button
          onClick={() => handlesubmit()}
          variant={"default"}
          className="w-full"
        >
          sign Up
        </Button>
      </div>
      <div className=" w-full flex justify-center gap-x-2 ">
        <Button variant={"outline"} size={"lg"}>
          <FcGoogle />
        </Button>
        <Button variant={"outline"} size={"lg"}>
          <FaGithub />
        </Button>
      </div>
      <div className="text-center text-gray-700">
        <span>Already have an account ,</span>
        <span
          onClick={() => router.push("/auth/login")}
          className="text-blue-800 cursor-pointer "
        >
          Sign In
        </span>
      </div>
    </div>
  );
}
