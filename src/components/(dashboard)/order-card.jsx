import Link from "next/link";
import { DataCell } from "../data-cell";
import { Card, CardContent } from "../ui/card";

export function OrderCard({ order }) {
  return (
    <Link href={`/dashboard/orders/${order?._id}`} passHref>
      <Card
        className={`shadow-md ${
          order?.status === "pending"
            ? "border-primary shadow-primary"
            : order?.status === "processing"
            ? "border-violet-500 shadow-violet-500"
            : order?.status === "delivered"
            ? "border-green-800 shadow-green-800"
            : ""
        }`}
      >
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <DataCell dataName="Order ID" dataValue={order?._id} />
            <DataCell dataName="name" dataValue={order?.name} />
            <DataCell dataName="phone" dataValue={order?.phone} />
            <DataCell
              dataName="total"
              dataValue={order?.totalAfterDiscount / 100}
            />
            <DataCell dataName="address" dataValue={order?.address} />
            <DataCell
              dataName="payment status"
              dataValue={order?.paymentStatus}
            />
            <DataCell dataName="order status" dataValue={order?.status} />
            <DataCell
              dataName="order Date"
              dataValue={new Date(order?.orderDate).toDateString()}
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
