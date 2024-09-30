import { Container } from "@/components/wrappers/container";
import { Product } from "@/components/product-cards/product";
import { ProductView } from "@/components/product-view";
import { Suspense } from "react";
import { ProductviewSkeleton } from "@/components/skeletons/productview-skeleton";
import { getData } from "@/utils/api-calls";

async function Products({ category }) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await getData(`products`);

  return (
    <>
      {res.response.payload?.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </>
  );
}

export default function Page() {
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
