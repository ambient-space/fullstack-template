"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "@/core/auth/auth-client";
import { UserProfile } from "@/widgets/Auth/UserProfile";

export default function Home() {
  const { data: session, isPending } = useSession();

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header className="row-start-1 w-full flex justify-end">
        {isPending ? (
          <div>Loading...</div>
        ) : session ? (
          <UserProfile />
        ) : (
          <div className="flex gap-4">
            <Link
              href="/signin"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Sign In
            </Link>
            <Link href="/signup" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md">
              Sign Up
            </Link>
          </div>
        )}
      </header>

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {session ? (
            <Link
              href="/dashboard"
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            >
              Go to Dashboard
            </Link>
          ) : (
            <Link
              href="/signin"
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            >
              Get Started
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}
