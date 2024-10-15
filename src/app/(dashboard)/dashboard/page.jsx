import { Block } from "@/components/(dashboard)/block";
import { Empty } from "@/components/empty";
import { TotalCard } from "@/components/total-card";
import { getData } from "@/utils/api-calls";
import { Suspense } from "react";

async function DashboardData() {
  const res = await getData("dashboard-data", 0);

  const summaryData = [
    {
      dataKey: "total revenue",
      dataValue: `৳ ${res.response.payload?.totalEarnings / 100}`,
      icon: "total",
    },
    {
      dataKey: "total orders",
      dataValue: res.response.payload?.totalOrders,
      icon: "total",
    },
    {
      dataKey: "partner revenue",
      dataValue: `৳ ${res.response.payload?.partnerEarnings / 100}`,
      icon: "total",
    },
  ];

  const orderData = [
    {
      dataKey: "pending orders",
      dataValue: res.response.payload?.pendingOrders,
      icon: "pending",
    },
    {
      dataKey: "processing orders",
      dataValue: res.response.payload?.processingOrders,
      icon: "processing",
    },
    {
      dataKey: "completed orders",
      dataValue: res.response.payload?.completedOrders,
      icon: "verified",
    },
    {
      dataKey: "cancelled orders",
      dataValue: res.response.payload?.cancelledOrders,
      icon: "cancel",
    },
  ];

  return (
    <div className="grid gap-8">
      {/* Summary */}
      <Block title="summary">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-4">
          {summaryData.map((data, index) => (
            <TotalCard key={index} data={data} />
          ))}
        </div>
      </Block>
      {/* Order Status */}
      <Block title="order status">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-4">
          {orderData.map((data, index) => (
            <TotalCard key={index} data={data} />
          ))}
        </div>
      </Block>
      {/* Recent Orders */}
      <Block title="recent orders">
        <Empty message="looks like there's no data to display." />
      </Block>
      {/* Popular Products */}
      <Block title="popular products">
        <Empty message="looks like there's no data to display." />
      </Block>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <DashboardData />
    </Suspense>
  );
}
