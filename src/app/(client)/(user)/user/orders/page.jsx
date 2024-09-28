import { OrderContainer } from "@/components/order/order-container";
import { CardTitle } from "@/components/ui/card";

export default function Orders({ data }) {
  return (
    <div>
      <CardTitle className="my-4">Order details</CardTitle>
      <div className="grid gap-4">
        <OrderContainer />
        <OrderContainer />
        <OrderContainer />
        <OrderContainer />
        <OrderContainer />
      </div>
    </div>
  );
}
