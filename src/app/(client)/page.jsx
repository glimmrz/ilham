import { Container } from "@/components/wrappers/container";
import { Product } from "@/components/product-cards/product";
import { ProductView } from "@/components/product-view";
import { PromoSlider } from "@/components/promo-slider";
import { getData } from "@/utils/api-calls";
import { Suspense } from "react";

const PopularProducts = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await getData("products");

  return (
    <>
      {res.response.payload?.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </>
  );
};

const BestSellers = async () => {
  const res = await getData("products");

  return (
    <>
      {res.response.payload?.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </>
  );
};

const FeaturedItems = async () => {
  const res = await getData("products");

  return (
    <>
      {res.response.payload?.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </>
  );
};

export default function Home() {
  return (
    <Container>
      <ProductView
        title="popular picks"
        href={{
          pathname: "/shop",
          query: { category: "popular" },
        }}
      >
        <Suspense fallback={<p>Loading...</p>}>
          <PopularProducts />
        </Suspense>
      </ProductView>

      <PromoSlider />

      <ProductView
        title="best sellers"
        href={{
          pathname: "/shop",
          query: { category: "popular" },
        }}
      >
        <Suspense fallback={<p>Loading...</p>}>
          <BestSellers />
        </Suspense>
      </ProductView>

      <ProductView
        title="featured items"
        href={{
          pathname: "/shop",
          query: { category: "featured" },
        }}
      >
        <Suspense fallback={<p>Loading...</p>}>
          <FeaturedItems />
        </Suspense>
      </ProductView>
    </Container>
  );
}
