import { Heading } from "@/components/heading";
import { OrderContainer } from "@/components/order/order-container";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Page() {
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
