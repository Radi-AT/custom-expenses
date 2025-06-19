import Image from "next/image";
import { Loader2 } from "lucide-react";
import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full bg-[#2f323f] lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#c49f3b]">Welcome Back</h1>
          <p className="text-lg mb-8 text-[#c49f3b]">
            Please sign in to continue managing your expenses.
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignIn path="/sign-in" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin h-6 w-6 text-[#c49f3b]" />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full bg-[#64647c] hidden lg:flex items-center justify-center">
        <Image src="/icon.svg" alt="Logo" width={100} height={100} />
      </div>
    </div>
  );
}
