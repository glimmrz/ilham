import { DataCell } from "@/components/data-cell";
import { OrderCard } from "./order-card";
import { Badge } from "@/components/ui/badge";

export function OrderContainer({ order }) {
  return (
    <div className="rounded-md shadow-regular bg-accent dark:bg-background p-2">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <DataCell dataName="order date" dataValue="July 17, 2024" />
          <DataCell dataName="total" dataValue="৳20" />
          <DataCell dataName="order ID" dataValue="jsghwyifg467trrif" />
        </div>
        <Badge>pending</Badge>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  );
}
