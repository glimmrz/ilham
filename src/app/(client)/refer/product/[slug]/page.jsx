import { ProductPage } from "@/components/product-page";
import { getData } from "@/utils/api-calls";
import { Container } from "@/components/wrappers/container";
import { ProductPageSkeleton } from "@/components/skeletons/productpage-skeleton";
import { Suspense } from "react";

async function ProductData({ slug, referrer }) {
  const res = await getData(`products/${slug}`);

  return (
    <ProductPage currentProduct={res.response.payload} referrer={referrer} />
  );
}

export default function Page({ params, searchParams }) {
  const { referrer } = searchParams;

  return (
    <Container>
      <Suspense fallback={<ProductPageSkeleton />}>
        <ProductData slug={params.slug} referrer={referrer} />
      </Suspense>
    </Container>
  );
}
