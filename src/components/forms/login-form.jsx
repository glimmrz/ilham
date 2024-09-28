"use client";
import Link from "next/link";
import { CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { InputGroup } from "../input-group";

export function LoginForm() {
  return (
    <>
      <CardTitle className="text-center">Welcome back!</CardTitle>
      <form className="mt-8 flex flex-col gap-4">
        <InputGroup
          placeholder="example@email.com"
          type="email"
          label="Email address / ইমেইল"
          aria-label="enter your email address"
          required
          name="email"
        />
        <InputGroup
          placeholder="********"
          type="password"
          label="Password / পাসওয়ার্ড"
          aria-label="enter your password"
          required
          name="password"
        />
        <Button icon="login" type="submit">
          sign in
        </Button>
      </form>
      <span className="block text-mute mt-2">
        Don&apos;t have an account?
        <Link
          href="/register"
          className="text-font font-bold hover:underline decoration-1"
        >
          {" "}
          Sign up.
        </Link>
      </span>
    </>
  );
}
