"use client";
import { useState } from "react";
import { FormModal } from "../form/form";
import { Heading } from "../heading";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormInput } from "../form/form-input";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const handleSubmit = async (data) => {};
  return (
    <>
      <Heading className="text-center mb-2">reset password</Heading>
      <FormModal
        form={form}
        formLabel="send reset link"
        loading={isLoading}
        disabled={isLoading}
        onSubmit={handleSubmit}
      >
        <FormInput
          form={form}
          name="email"
          label="email address"
          placeholder="example@email.com"
          required
          type="email"
        />
      </FormModal>
      <span className="block text-mute mt-2">
        Go back to{" "}
        <Link
          href="/login"
          className="text-font font-bold hover:underline decoration-1"
        >
          login.
        </Link>
      </span>
    </>
  );
}
