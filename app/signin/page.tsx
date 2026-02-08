import type { Metadata } from "next";
import { SignInClient } from "./signin-client";

export const metadata: Metadata = {
  title: "Sign in | Alphabase®",
  description: "Sign in to Sara AI or the Alphabase EHR Platform.",
};

export default function SignInPage() {
  return <SignInClient />;
}

