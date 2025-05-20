import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Social } from "../social/social";
import { Backbutton } from "./backbutton";
import { LoginForm } from "./signinform";

export function LoginCardWrapper() {
  return (
    <div className="w-[400px] ">
      <Card>
        <CardHeader className="text-center">
          <CardTitle>
            <h1 className="text-4xl text-slate-900 font-semibold drop-shadow-md">
              🔐 Auth
            </h1>
          </CardTitle>
          <CardDescription>Welcome back</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter>
          <Social />
        </CardFooter>
        <CardFooter>
          <Backbutton text="Don't have an account ?" href="/auth/signup" />
        </CardFooter>
      </Card>
    </div>
  );
}
