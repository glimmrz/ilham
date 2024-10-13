"use client";
import { postData } from "@/utils/api-calls";
import { Modal } from "./modal";
import { useState } from "react";
import { notify } from "@/utils/toast";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormModal } from "../form/form";
import { FormInput } from "../form/form-input";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  phone: z.string().min(9, {
    message: "Phone number must be at least 9 characters.",
  }),
  city: z.string({
    message: "Please enter city name.",
  }),
  email: z
    .string()
    .email({
      message: "Please enter a valid email address.",
    })
    .optional(),
});

export function AddAddress() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const handleSubmit = async (data) => {
    setIsLoading(true);

    try {
      const res = await postData("address", data);

      if (res.error) {
        return notify(res.response.msg);
      }

      notify(res.response.msg);
      router.refresh();
    } catch (err) {
      notify(err.message);
    } finally {
      setIsModalOpen(false);
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="add new address"
      description="Add new address here. you can modify them later."
      triggerLabel="add address"
      triggerIcon="plus"
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onOpen={() => setIsModalOpen(true)}
    >
      <FormModal
        form={form}
        loading={isLoading}
        disabled={isLoading}
        onSubmit={handleSubmit}
        formLabel="save address"
        icon="save"
      >
        <FormInput
          form={form}
          name="name"
          placeholder="john doe"
          label="name / নাম"
          required
        />
        <FormInput
          form={form}
          name="address"
          placeholder="house no - 18, road no - 3, marine drive, chittagong"
          label="addreess / ঠিকানা"
          required
        />
        <div className="grid grid-cols-2 gap-2">
          <FormInput
            form={form}
            name="city"
            placeholder="chittagong"
            label="city / শহর"
            required
          />
          <FormInput
            form={form}
            name="email"
            placeholder="example@email.com"
            label="email / ইমেইল"
            type="email"
          />
        </div>
        <FormInput
          form={form}
          name="phone"
          placeholder="01XXXXXXXXX"
          label="phone number / মোবাইল নম্বর"
          required
        />
      </FormModal>
    </Modal>
  );
}
