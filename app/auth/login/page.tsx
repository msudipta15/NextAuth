import { SigninForm } from "@/components/auth/signinform";

export default function Page(){
  return <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-purple-900" >
    <SigninForm/>
  </div>
}