"use client";

import { useSession, signOut } from "@/core/auth/auth-client";
import { Button } from "@/shared/components/ui/button";

export function UserProfile() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col">
        <span className="text-sm font-medium">{session.user.name}</span>
        <span className="text-xs text-gray-500">{session.user.email}</span>
      </div>
      <Button variant="outline" size="sm" onClick={() => signOut()}>
        Sign Out
      </Button>
    </div>
  );
}
