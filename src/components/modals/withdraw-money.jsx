"use client";
import { useState } from "react";
import { Modal } from "./modal";
import { FormModal } from "../form/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormInput } from "../form/form-input";

const formSchema = z.object({
  amount: z.string().min(3, {
    message: "Amount must be at least 100",
  }),
});

export function WithdrawMoney() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
    },
  });

  const handleSubmit = async (data) => {
    console.log(data);
  };

  return (
    <Modal
      title="request withdrawal"
      description="Submit a withdrawal request here. Your requested amount will be sent to your account soon."
      triggerLabel="withdraw money"
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onOpen={() => setIsModalOpen(true)}
    >
      <FormModal
        form={form}
        onSubmit={handleSubmit}
        formLabel="submit"
        loading={isLoading}
        disabled={isLoading}
      >
        <FormInput form={form} name="amount" required type="number" />
      </FormModal>
    </Modal>
  );
}
