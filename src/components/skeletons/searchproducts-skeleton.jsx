import { ProductView } from "../product-view";
import { ProductsmallSkeleton } from "./productsmall-skeleton";

export function SearchproductSkeleton() {
  return (
    <ProductView className="grid-cols-1">
      <ProductsmallSkeleton />
      <ProductsmallSkeleton />
      <ProductsmallSkeleton />
    </ProductView>
  );
}
