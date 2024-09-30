import { Heading } from "@/components/heading";
import { OrderContainer } from "@/components/user/order/order-container";
import { Suspense } from "react";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function OrderData() {
  await delay(5000);

  return (
    <>
      <Heading className="my-4">Order details</Heading>
      <div className="grid gap-4">
        <OrderContainer />
        <OrderContainer />
        <OrderContainer />
        <OrderContainer />
        <OrderContainer />
      </div>
    </>
  );
}

export default async function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <OrderData />
    </Suspense>
  );
}
