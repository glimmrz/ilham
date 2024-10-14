import Link from "next/link";
import { DataCell } from "../../data-cell";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { UpdateOrder } from "../modals/update-order";

export function OrderCard({ order }) {
  return (
    <Card
      className={`shadow-md ${
        order?.status === "pending"
          ? "border-yellow-400 shadow-yellow-400"
          : order?.status === "processing"
          ? "border-violet-500 shadow-violet-500"
          : order?.status === "delivered"
          ? "border-green-800 shadow-green-800"
          : order?.status === "courier"
          ? "border-teal-400 shadow-teal-400"
          : order?.status === "cancelled"
          ? "border-destructive shadow-destructive"
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
        <div className="grid grid-cols-2 gap-2">
          <Link href={`/dashboard/orders/${order?._id}`}>
            <Button className="w-full" icon="details">
              details
            </Button>
          </Link>
          <UpdateOrder order={order} />
        </div>
      </CardContent>
    </Card>
  );
}
