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
const ProductList = async ({ query }) => {
  const res = await getData(`products?${query}&limit=10`);
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
          <ProductList query="featured=true" />
        </Suspense>
      </ProductView>

      <PromoSlider />

      <ProductView
        title="best sellers"
        href={{
          pathname: "/shop",
          query: { sortBySold: "true" },
        }}
      >
        <Suspense fallback={<ProductviewSkeleton />}>
          <ProductList query="sortBySold=true" />
        </Suspense>
      </ProductView>

      <ProductView
        title="featured items"
        href={{
          pathname: "/shop",
          query: { featured: "true" },
        }}
      >
        <Suspense fallback={<ProductviewSkeleton />}>
          <ProductList query="featured=true" />
        </Suspense>
      </ProductView>
    </Container>
  );
}
