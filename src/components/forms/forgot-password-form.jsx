"use client";
import { useState } from "react";
import { FormModal } from "../form/form";
import { Heading } from "../heading";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormInput } from "../form/form-input";
import Link from "next/link";
import { errorNotification, successNotification } from "@/utils/toast";
import { postData } from "@/utils/api-calls";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = async (data) => {
    setIsLoading(true);
    try {
      const res = await postData("forgot-password", data);
      if (res.error) {
        return errorNotification(res.response.msg);
      }

      successNotification(res.response.msg);
    } catch (err) {
      errorNotification(err.message);
    } finally {
      setIsLoading(false);
    }
  };

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
