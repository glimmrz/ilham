"use client";
import Link from "next/link";
import { useState } from "react";
import { CardTitle } from "../ui/card";
import { InputGroup } from "../input-group";
import { Button } from "../ui/button";

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <CardTitle className="text-center">Create an account.</CardTitle>
      <form className="mt-8 flex flex-col gap-4">
        <InputGroup
          placeholder="john doe"
          type="text"
          label="name / নাম"
          aria-label="enter your name"
          required
          name="name"
        />
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
          minLength={8}
        />
        <InputGroup
          placeholder="********"
          type="password"
          label="confirm Password / পাসওয়ার্ড নিশ্চিত করুন"
          aria-label="confirm your password"
          required
          name="confirmPassword"
          minLength={8}
        />
        <Button
          aria-label="create your account."
          type="submit"
          disabled={isLoading}
        >
          register
        </Button>
      </form>
      <span className="block text-mute mt-2">
        Already have an account?
        <Link href="/login" className="text-font font-bold hover:underline">
          {" "}
          Login.
        </Link>
      </span>
    </>
  );
}
