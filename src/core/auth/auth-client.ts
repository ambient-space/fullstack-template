import { createAuthClient } from "better-auth/react";

const isWindowDefined = typeof window !== "undefined";

export const authClient = createAuthClient({
  baseURL: isWindowDefined ? window.location.origin : process.env.BETTER_AUTH_URL || "http://localhost:3000",
});

export const { signIn, signUp, signOut, useSession, getSession } = authClient;
