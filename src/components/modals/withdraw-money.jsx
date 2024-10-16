"use client";
import { useState } from "react";
import { Modal } from "./modal";
import { FormModal } from "../form/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormInput } from "../form/form-input";
import { notify } from "@/utils/toast";
import { postData } from "@/utils/api-calls";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  amount: z.string().min(3, {
    message: "Amount must be at least 100",
  }),
});

export function WithdrawMoney() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
    },
  });

  const handleSubmit = async (data) => {
    setIsLoading(true);
    try {
      const res = await postData("withdrawal", data);
      if (res.error) {
        return notify(res.response.msg);
      }

      notify(res.response.msg);
      setIsModalOpen(false);
      router.refresh();
    } catch (err) {
      notify(err.message);
    } finally {
      setIsLoading(false);
    }
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
