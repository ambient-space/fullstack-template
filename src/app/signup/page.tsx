"use client";

import { AuthForm } from "@/widgets/Auth/AuthForm";
import { useRouter } from "next/navigation";


export default function SignUpPage() {
  const router = useRouter();

  const handleSuccess = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8">
        <AuthForm mode="signup" onSuccess={handleSuccess} />
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/signin" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
