"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AuthForm } from "@/widgets/Auth/AuthForm";

function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  const handleSuccess = () => {
    router.push(callbackUrl);
  };

  return (
    <div className="max-w-md w-full space-y-8 p-8">
      <AuthForm mode="signin" onSuccess={handleSuccess} />
      <div className="text-center">
        <p className="text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Suspense
        fallback={
          <div className="max-w-md w-full space-y-8 p-8">
            <div className="text-center">Loading...</div>
          </div>
        }
      >
        <SignInForm />
      </Suspense>
    </div>
  );
}
