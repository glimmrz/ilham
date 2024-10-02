import { ProductPage } from "@/components/product-page";
import { ProductPageSkeleton } from "@/components/skeletons/productpage-skeleton";
import { Container } from "@/components/wrappers/container";
import { getData } from "@/utils/api-calls";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const res = await getData(`products/${params.slug}`);

  return {
    title: res.response.payload?.title,
    description: res.response.payload?.seoDescription,
  };
}

async function ProductData({ slug }) {
  const res = await getData(`products/${slug}`);

  return <ProductPage currentProduct={res.response.payload} />;
}

export default async function Page({ params }) {
  return (
    <Container>
      <Suspense fallback={<ProductPageSkeleton />}>
        <ProductData slug={params.slug} />
      </Suspense>
    </Container>
  );
}
