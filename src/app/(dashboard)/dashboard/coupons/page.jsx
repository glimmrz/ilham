import { Block } from "@/components/(dashboard)/block";
import { CardView } from "@/components/(dashboard)/card-view";
import { CouponCard } from "@/components/(dashboard)/cards/coupon-card";
import { getData } from "@/utils/api-calls";
import { Suspense } from "react";

async function Coupons() {
  const res = await getData("coupons", 0);

  return (
    <CardView>
      {res.response?.payload?.map((coupon, index) => (
        <CouponCard key={index} coupon={coupon} />
      ))}
    </CardView>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Block title="Coupons codes">
        <Coupons />
      </Block>
    </Suspense>
  );
}
