import { Block } from "@/components/(dashboard)/block";
import { CardView } from "@/components/(dashboard)/card-view";
import { ExpenseCard } from "@/components/(dashboard)/cards/expense-card";
import { getData } from "@/utils/api-calls";
import { Suspense } from "react";

async function Expenses() {
  const res = await getData("expenses", 0);

  return (
    <CardView>
      {res.response.payload?.map((expense, index) => (
        <ExpenseCard key={index} expense={expense} />
      ))}
    </CardView>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Block title="expenses">
        <Expenses />
      </Block>
    </Suspense>
  );
}
