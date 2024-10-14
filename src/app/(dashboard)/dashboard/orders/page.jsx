import { Block } from "@/components/(dashboard)/block";
import { OrderCard } from "@/components/(dashboard)/cards/order-card";
import { getData } from "@/utils/api-calls";
import { Suspense } from "react";

async function Orders() {
  const res = await getData("orders", 0);

  return (
    <>
      {res.response.payload?.map((order, index) => (
        <OrderCard key={index} order={order} />
      ))}
    </>
  );
}

export default async function Page() {
  return (
    <>
      <Block title="orders">
        <div className="grid grid-cols-2 gap-4">
          <Suspense fallback={<p>Loading...</p>}>
            <Orders />
          </Suspense>
        </div>
      </Block>
    </>
  );
}
