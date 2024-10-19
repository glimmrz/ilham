"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormModal } from "../form/form";
import { useState } from "react";
import { FormInput } from "../form/form-input";
import { errorNotification, warningNotification } from "@/utils/toast";
import { getData } from "@/utils/api-calls";

const formSchema = z.object({
  key: z.string().min(11, {
    message: "Please enter at least 11 characters.",
  }),
});

export function TrackOrderForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [orderData, setOrderData] = useState(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      key: "",
    },
  });

  const handleSubmit = async (data) => {
    setIsLoading(true);

    try {
      const res = await getData(`orders/${data.key}`);
      if (res.error) return errorNotification(res.response.msg);
      if (!res.response?.payload) return warningNotification("No data found.");

      setOrderData(res.response.payload);
    } catch (err) {
      errorNotification(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <FormModal
        form={form}
        loading={isLoading}
        formLabel="search"
        disabled={isLoading}
        onSubmit={handleSubmit}
      >
        <FormInput
          form={form}
          name="key"
          placeholder="Start typing..."
          required
        />
      </FormModal>

      {orderData && <span>Hi</span>}
    </div>
  );
}
