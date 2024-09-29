import { Container } from "@/components/wrappers/container";
import { Product } from "@/components/product-cards/product";
import { ProductView } from "@/components/product-view";
import { PromoSlider } from "@/components/promo-slider";
import { getData } from "@/utils/api-calls";
import { Suspense } from "react";

const PopularProducts = async () => {
  const res = await getData("products");

  return (
    <ProductView
      title="popular picks"
      href={{
        pathname: "/shop",
        query: { category: "popular" },
      }}
    >
      {res.response.payload?.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </ProductView>
  );
};

const BestSellers = async () => {
  const res = await getData("products");

  return (
    <ProductView
      title="best sellers"
      href={{
        pathname: "/shop",
        query: { category: "popular" },
      }}
    >
      {res.response.payload?.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </ProductView>
  );
};

const FeaturedItems = async () => {
  const res = await getData("products");

  return (
    <ProductView
      title="best sellers"
      href={{
        pathname: "/shop",
        query: { category: "popular" },
      }}
    >
      {res.response.payload?.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </ProductView>
  );
};

export default function Home() {
  return (
    <Container>
      <Suspense fallback={<p>Loading...</p>}>
        <PopularProducts />
      </Suspense>

      <PromoSlider />

      <Suspense fallback={<p>Loading...</p>}>
        <BestSellers />
      </Suspense>

      <Suspense fallback={<p>Loading...</p>}>
        <FeaturedItems />
      </Suspense>
    </Container>
  );
}
