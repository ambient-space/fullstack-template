"use client";

import { useState } from "react";
import { signIn, signUp } from "@/core/auth/auth-client";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";

interface AuthFormProps {
  mode?: "signin" | "signup";
  onSuccess?: () => void;
}

export function AuthForm({ mode = "signin", onSuccess }: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      if (mode === "signup") {
        await signUp.email({
          email,
          password,
          name,
        });
      } else {
        await signIn.email({
          email,
          password,
        });
      }
      onSuccess?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-center">{mode === "signin" ? "Sign In" : "Sign Up"}</h2>
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
      </div>

      {mode === "signup" && (
        <div>
          <Input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
      )}

      <div>
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>

      <div>
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Loading..." : mode === "signin" ? "Sign In" : "Sign Up"}
      </Button>
    </form>
  );
}
