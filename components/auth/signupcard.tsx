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
import { SignupForm } from "./signupform";

export function SignupCardWrapper() {
  return (
    <div className="w-[400px] ">
      <Card>
        <CardHeader className="text-center">
          <CardTitle>
            <h1 className="text-4xl text-slate-900 font-semibold drop-shadow-md">
              🔐 Auth
            </h1>
          </CardTitle>
          <CardDescription>Welcome to Auth</CardDescription>
        </CardHeader>
        <CardContent>
          <SignupForm />
        </CardContent>
        <CardFooter>
          <Social />
        </CardFooter>
        <CardFooter>
          <Backbutton text="Already have an account ?" href="/auth/login" />
        </CardFooter>
      </Card>
    </div>
  );
}
