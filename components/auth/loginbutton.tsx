"use client";

import { useRouter } from "next/navigation";

export function LoginComponent({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const onclick = () => {
    router.push("/auth/login");
  };

  return <span onClick={onclick}>{children}</span>;
}
