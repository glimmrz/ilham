"use client";
import Link from "next/link";
import { useState } from "react";
import { CardTitle } from "../ui/card";
import { InputGroup } from "../input-group";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { notify } from "@/utils/toast";
import { postData } from "@/utils/api-calls";
import { FormModal } from "../form/form";
import { FormInput } from "../form/form-input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z
  .object({
    name: z.string().min(3, {
      message: "Name must be at least 3 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  // Handle register form submission
  const handleRegister = async (data) => {
    setIsLoading(true);

    try {
      const res = await postData("register", data);

      if (res.error) {
        return notify(res.response.msg);
      }

      router.push("/login");
      notify(res.response.msg);
    } catch (err) {
      notify(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <CardTitle className="text-center">Create an account.</CardTitle>
      <FormModal
        formLabel="register"
        form={form}
        loading={isLoading}
        disabled={isLoading}
        onSubmit={handleRegister}
      >
        <FormInput
          form={form}
          placeholder="john doe"
          label="name / নাম"
          required
          name="name"
        />
        <FormInput
          form={form}
          placeholder="example@email.com"
          label="Email address / ইমেইল"
          required
          name="email"
          type="email"
        />
        <FormInput
          form={form}
          placeholder="********"
          label="Password / পাসওয়ার্ড"
          required
          name="password"
          type="password"
        />
        <FormInput
          form={form}
          placeholder="********"
          label="confirm Password / পাসওয়ার্ড নিশ্চিত করুন"
          required
          name="confirmPassword"
          type="password"
        />
      </FormModal>
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
