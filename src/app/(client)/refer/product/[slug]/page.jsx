import { getData } from "@/utils/api-calls";
import { Container } from "@/components/wrappers/container";
import { ProductPageSkeleton } from "@/components/skeletons/productpage-skeleton";
import { Suspense } from "react";
import { Section } from "@/components/section";
import { ProductImages } from "@/components/product-page/product-images";
import { ProductSpecifications } from "@/components/product-page/product-specifications";
import { ProductDetails } from "@/components/product-page/product-details";
import { Review } from "@/components/review";
import { ProductView } from "@/components/product-view";
import { ProductSmall } from "@/components/product-cards/product-small";
import { ReferActions } from "@/components/product-page/refer-actions";

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
              <ReferActions currentProduct={res.response.payload} />
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

export default async function Page({ params, searchParams }) {
  const { referrer } = searchParams;

  // Set referrer cookie for 30 days
  if (referrer) {
    await setCookie("referrer", referrer, 2592000);
  }

  return (
    <Container>
      <Suspense fallback={<ProductPageSkeleton />}>
        <ProductData slug={params.slug} />
      </Suspense>
    </Container>
  );
}
