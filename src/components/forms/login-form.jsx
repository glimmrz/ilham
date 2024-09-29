"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { InputGroup } from "../input-group";
import { Heading } from "../heading";
import { postData } from "@/utils/api-calls";
import { useState } from "react";
import { notify } from "@/utils/toast";
import { setCookie } from "@/utils/cookie";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLoginForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await postData("login", data);
      if (res.error) {
        return notify(res.response.msg);
      }

      await Promise.all([
        setCookie(
          "ilm-session",
          res.response.session_token,
          res.response.expiryTime
        ),
        setCookie("ilm-partner", res.response.partner, res.response.expiryTime),
      ]);

      router.refresh();

      notify(res.response.msg);
    } catch (err) {
      notify(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Heading className="text-center">Welcome back!</Heading>
      <form className="mt-8 flex flex-col gap-4" onSubmit={handleLoginForm}>
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
        <Button
          icon="login"
          type="submit"
          disabled={isLoading}
          loading={isLoading}
        >
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
