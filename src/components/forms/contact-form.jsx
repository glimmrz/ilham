"use client";
import { useForm } from "react-hook-form";
import { FormModal } from "../form/form";
import { FormInput } from "../form/form-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormTextarea } from "../form/form-textarea";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  name: z.string().min(4, {
    message: "Password must be at least 4 characters.",
  }),
  phone: z.string().min(11, {
    message: "Password must be at least 11 characters.",
  }),
  message: z.string().min(28, {
    message: "Password must be at least 28 characters.",
  }),
});

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      phone: "",
      message: "",
    },
  });

  const handleSubmit = async () => {};

  return (
    <FormModal
      form={form}
      formLabel="send message"
      loading={isLoading}
      disabled={isLoading}
      onSubmit={handleSubmit}
    >
      <FormInput
        form={form}
        placeholder="John Doe"
        label="Name"
        required
        name="name"
      />
      <div className="grid md:grid-cols-2 gap-2 md:gap-4">
        <FormInput
          form={form}
          placeholder="example@email.com"
          label="email"
          required
          type="email"
          name="email"
        />
        <FormInput
          form={form}
          placeholder="+8801873-228902"
          label="phone"
          required
          type="tel"
          name="phone"
        />
      </div>
      <FormTextarea
        form={form}
        placeholder="Hello..."
        label="message"
        required
        type="textarea"
        name="message"
      />
    </FormModal>
  );
}
