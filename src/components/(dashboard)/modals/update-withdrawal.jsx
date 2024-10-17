"use client";
import { Modal } from "@/components/modals/modal";
import { useState } from "react";
import { FormModal } from "../../form/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSelect } from "@/components/form/form-select";
import { putData } from "@/utils/api-calls";
import { notify } from "@/utils/toast";
import { useRouter } from "next/navigation";

const paymentStatus = [
  {
    name: "pending",
    value: "pending",
  },
  {
    name: "paid",
    value: "paid",
  },
  {
    name: "rejected",
    value: "cancelled",
  },
];

const formSchema = z.object({
  status: z.enum(["pending", "paid", "cancelled"], {
    required_error: "Please select a withdrawal status.",
  }),
});

export function UpdateWithdrawal({ withdrawal }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      status: withdrawal?.status,
    },
  });

  async function handleSubmit(data) {
    setIsLoading(true);

    try {
      const res = await putData(`withdrawal/${withdrawal?._id}`, data);

      if (res.error) {
        return notify(res.response.msg);
      }

      notify("Withdrawal status updated successfully.");
      router.refresh();
      setIsModalOpen(false);
    } catch (err) {
      notify(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Modal
      title="withdrawal status"
      description="Update withdrawal details."
      triggerIcon="edit"
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onOpen={() => setIsModalOpen(true)}
      className="rounded-full"
      triggerSize="icon"
    >
      <FormModal
        form={form}
        onSubmit={handleSubmit}
        formLabel="save"
        loading={isLoading}
        disabled={isLoading}
      >
        <FormSelect
          form={form}
          name="status"
          label="Withdrawal status"
          placeholder="current status"
          options={paymentStatus}
        />
      </FormModal>
    </Modal>
  );
}
