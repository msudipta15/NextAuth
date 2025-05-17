"use client";

import { useRouter } from "next/navigation";

export function LoginComponent({ children }: any) {
  const router = useRouter();

  const onclick = () => {
    router.push("/auth/login");
  };

  return <span onClick={onclick}>{children}</span>;
}
