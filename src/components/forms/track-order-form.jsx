"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormModal } from "../form/form";
import { useState } from "react";
import { FormInput } from "../form/form-input";
import { errorNotification, warningNotification } from "@/utils/toast";
import { getData } from "@/utils/api-calls";
import { DataCell } from "../data-cell";
import { Heading } from "../heading";
import { CardView } from "../(dashboard)/card-view";
import { ProductCard } from "../(dashboard)/cards/product-card";
import { Badge } from "../ui/badge";

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
      const res = await getData(`orders/${data.key}`, 0);
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
    <div className="w-full">
      <div className="w-full flex items-center justify-center">
        <div className="w-full md:w-[500px]">
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
              label="enter order ID"
              placeholder="ORDER ID"
              required
            />
          </FormModal>
        </div>
      </div>
      {orderData && (
        <div className="mt-8 space-y-8 w-full">
          <div>
            <Heading>Order details</Heading>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              <div className="grid">
                <DataCell dataName="Order Status" />
                <Badge
                  className={`h-fit w-fit ${
                    orderData?.status === "delivered" ? "bg-green-800" : ""
                  }`}
                >
                  {orderData?.status}
                </Badge>
              </div>
              <DataCell dataName="name" dataValue={orderData?.name} />
              <DataCell dataName="address" dataValue={orderData?.address} />
              <DataCell dataName="phone number" dataValue={orderData?.phone} />
              <DataCell
                dataName="order total"
                dataValue={`৳ ${orderData?.total / 100}`}
              />
            </div>
          </div>

          <div className="space-y-4">
            <Heading>Ordered Items</Heading>
            <CardView>
              {orderData?.products?.map((product, index) => (
                <ProductCard key={index} product={product} disabled />
              ))}
            </CardView>
          </div>
        </div>
      )}
    </div>
  );
}
