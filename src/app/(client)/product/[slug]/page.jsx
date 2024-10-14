import { ProductSmall } from "@/components/product-cards/product-small";
import { ProductActions } from "@/components/product-page/product-actions";
import { ProductDetails } from "@/components/product-page/product-details";
import { ProductImages } from "@/components/product-page/product-images";
import { ProductSpecifications } from "@/components/product-page/product-specifications";
import { ProductView } from "@/components/product-view";
import { Review } from "@/components/review";
import { Section } from "@/components/section";
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

  return (
    <>
      <Section>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          {/* Product Images */}
          <ProductImages currentProduct={res.response.payload} />
          {/* Product Details */}
          <ProductSpecifications
            currentProduct={res.response.payload}
            actionButtons={
              <ProductActions currentProduct={res.response.payload} />
            }
          />
        </div>
      </Section>
      {/* Product description */}
      <ProductDetails currentProduct={res.response.payload} />
      {/* customer reviews */}
      <div className="lg:grid lg:grid-cols-[2fr_1fr] lg:gap-2">
        <Section className="flex flex-col gap-2">
          <Review />
          <Review />
          <Review />
          {/* <Rating /> */}
        </Section>

        <ProductView className="grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
          <ProductSmall />
          <ProductSmall />
          <ProductSmall />
        </ProductView>
      </div>
    </>
  );
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
