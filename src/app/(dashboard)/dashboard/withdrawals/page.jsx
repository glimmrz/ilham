import { Block } from "@/components/(dashboard)/block";
import { CardView } from "@/components/(dashboard)/card-view";
import { WithdrawalCard } from "@/components/(dashboard)/cards/withdrawal-card";
import { getData } from "@/utils/api-calls";
import { Suspense } from "react";

async function Withdrawals() {
  const res = await getData("withdrawal", 0);

  return (
    <CardView>
      {res.response?.payload?.map((withdrawal, index) => (
        <WithdrawalCard key={index} withdrawal={withdrawal} />
      ))}
    </CardView>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Block title="withdrawal requests">
        <Withdrawals />
      </Block>
    </Suspense>
  );
}
