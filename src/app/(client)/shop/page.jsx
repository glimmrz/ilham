import { Container } from "@/components/wrappers/container";
import { Product } from "@/components/product-cards/product";
import { ProductView } from "@/components/product-view";
import { Suspense } from "react";
import { ProductviewSkeleton } from "@/components/skeletons/productview-skeleton";
import { getData } from "@/utils/api-calls";

export function metadata() {
  return {
    title: "Shop",
  };
}

async function Products() {
  const res = await getData(`products`);

  return (
    <>
      {res.response.payload?.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </>
  );
}

export default async function Page() {
  return (
    <Container>
      <ProductView title="all products">
        <Suspense fallback={<ProductviewSkeleton />}>
          <Products />
        </Suspense>
      </ProductView>
    </Container>
  );
}
