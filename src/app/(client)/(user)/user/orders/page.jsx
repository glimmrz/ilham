import { Heading } from "@/components/heading";
import { OrderContainer } from "@/components/order/order-container";

export default function Orders({ data }) {
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
