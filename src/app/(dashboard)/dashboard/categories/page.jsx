import { Block } from "@/components/(dashboard)/block";
import { CardView } from "@/components/(dashboard)/card-view";
import { CategoryCard } from "@/components/(dashboard)/category-card";
import { getData } from "@/utils/api-calls";
import { Suspense } from "react";

async function Categories() {
  const res = await getData("categories", 0);

  return (
    <CardView>
      {res.response.payload?.map((category, index) => (
        <CategoryCard key={index} category={category} />
      ))}
    </CardView>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <Block title="categories">
        <Categories />
      </Block>
    </Suspense>
  );
}
