import { Suspense } from "react";
import { Container } from "@/components/wrappers/container";
import { Product } from "@/components/product-cards/product";
import { ProductView } from "@/components/product-view";
import { PromoSlider } from "@/components/promo-slider";
import { ProductviewSkeleton } from "@/components/skeletons/productview-skeleton";
import { getData } from "@/utils/api-calls";

export const metadata = {
  title: "Home",
};

// component for product lists
const ProductList = async ({ type }) => {
  const res = await getData(`products?type=${type}&limit=10`);
  return (
    <>
      {res.response.payload?.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </>
  );
};

export default async function Home() {
  return (
    <Container>
      <ProductView
        title="popular picks"
        href={{
          pathname: "/shop",
          query: { category: "popular" },
        }}
      >
        <Suspense fallback={<ProductviewSkeleton />}>
          <ProductList type="popular" />
        </Suspense>
      </ProductView>

      <PromoSlider />

      <ProductView
        title="best sellers"
        href={{
          pathname: "/shop",
          query: { category: "mostsold" },
        }}
      >
        <Suspense fallback={<ProductviewSkeleton />}>
          <ProductList type="mostsold" />
        </Suspense>
      </ProductView>

      <ProductView
        title="featured items"
        href={{
          pathname: "/shop",
          query: { category: "featured" },
        }}
      >
        <Suspense fallback={<ProductviewSkeleton />}>
          <ProductList type="featured" />
        </Suspense>
      </ProductView>
    </Container>
  );
}
