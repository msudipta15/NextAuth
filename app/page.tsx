import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginComponent } from "@/components/auth/loginbutton";

const font = Poppins({
  subsets: ["latin"],
  weight: "700",
});

export default function Home() {


  return (
    <main className="flex h-screen flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-purple-900">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl text-white font-semibold drop-shadow-md",
            font.className
          )}
        >
          🔐 Auth
        </h1>
        <p className="text-lg text-white font-Poppins">
          A Simple authentication service
        </p>
        <div>
          <LoginComponent>
            <Button variant={"outline"} size={"lg"}>
              Sign In
            </Button>
          </LoginComponent>
        </div>
      </div>
    </main>
  );
}
