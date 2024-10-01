import { Suspense } from "react";
import { ProductSmall } from "../product-cards/product-small";
import { ProductView } from "../product-view";
import { getData } from "@/utils/api-calls";
import { SearchproductSkeleton } from "../skeletons/searchproducts-skeleton";

async function SearchResponse({ searchKey }) {
  if (!searchKey) return;

  const res = await getData(`products?searchKey=${searchKey}`);

  return (
    <>
      {res.response.payload?.map((product, index) => (
        <ProductSmall key={index} product={product} />
      ))}
    </>
  );
}

export function SearchResults({ searchKey }) {
  return (
    <div className="w-full">
      <ProductView className="grid-cols-1">
        <Suspense fallback={<SearchproductSkeleton />}>
          <SearchResponse searchKey={searchKey} />
        </Suspense>
      </ProductView>
    </div>
  );
}
