import { SignupForm } from "@/components/auth/signupform";

export default function Page(){
    return <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-purple-900" >
        <SignupForm/>
    </div>
}