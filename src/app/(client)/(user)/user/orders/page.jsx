import { Heading } from "@/components/heading";
import { OrdercontainerSkeleton } from "@/components/skeletons/ordercontainer-skeleton";
import { OrderContainer } from "@/components/user/order/order-container";
import { getData } from "@/utils/api-calls";
import { getSession } from "@/utils/auth";
import { Suspense } from "react";

export async function generateMetadata() {
  const session = await getSession();

  return {
    title: `${session.payload?.name}'s past orders`,
  };
}

async function OrderData() {
  const session = await getSession();
  const res = await getData(`users/${session.payload?._id}`, 0);

  return (
    <div className="grid gap-4">
      {res.response.payload?.orders?.map((order, index) => (
        <OrderContainer key={index} order={order} />
      ))}
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
