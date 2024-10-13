"use client";
import { Modal } from "@/components/modals/modal";
import { useState } from "react";
import { FormModal } from "../../form/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "@/components/form/form-input";
import { FormSelect } from "@/components/form/form-select";

const statuses = [
  {
    name: "pending",
    value: "pending",
  },
  {
    name: "processing",
    value: "processing",
  },
  {
    name: "courier",
    value: "courier",
  },
  {
    name: "delivered",
    value: "delivered",
  },
];

const paymentStatus = [
  {
    name: "pending",
    value: "pending",
  },
  {
    name: "paid",
    value: "confirmed",
  },
];

const formSchema = z.object({
  address: z.string().min(8, {
    message: "Address must be at least 8 characters.",
  }),
  status: z.string({
    required_error: "Please select an order status.",
  }),
});

export function UpdateOrder({ order }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: order?.address,
      status: order?.status,
      paymentStatus: order?.paymentStatus,
    },
  });

  async function handleSubmit(data) {}

  return (
    <Modal
      title="add new address"
      description="Add new address here. you can modify them later."
      triggerLabel="update"
      triggerIcon="edit"
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onOpen={() => setIsModalOpen(true)}
    >
      <FormModal form={form} onSubmit={handleSubmit} formLabel="save">
        <FormInput form={form} name="address" label="delivery address" />
        <FormSelect
          form={form}
          name="paymentStatus"
          label="payment status"
          placeholder="payment status"
          options={paymentStatus}
        />
        <FormSelect
          form={form}
          name="status"
          label="order status"
          placeholder="current status"
          options={statuses}
        />
      </FormModal>
    </Modal>
  );
}
