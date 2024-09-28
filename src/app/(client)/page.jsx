import { Container } from "@/components/wrappers/container";
import { Product } from "@/components/product-cards/product";
import { ProductView } from "@/components/product-view";
import { PromoSlider } from "@/components/promo-slider";

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
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductView>

      <PromoSlider />
    </Container>
  );
}
