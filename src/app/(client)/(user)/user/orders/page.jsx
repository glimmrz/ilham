import { Heading } from "@/components/heading";
import { OrdercontainerSkeleton } from "@/components/skeletons/ordercontainer-skeleton";
import { OrderContainer } from "@/components/user/order/order-container";
import { Suspense } from "react";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function OrderData() {
  await delay(5000);

  return (
    <div className="grid gap-4">
      <OrderContainer />
      <OrderContainer />
      <OrderContainer />
      <OrderContainer />
      <OrderContainer />
    </div>
  );
}

export default async function Page() {
  return (
    <>
      <Heading className="my-4">Order details</Heading>
      <Suspense fallback={<OrdercontainerSkeleton />}>
        <OrderData />
      </Suspense>
    </>
  );
}
