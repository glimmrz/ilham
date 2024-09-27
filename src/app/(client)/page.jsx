import { Container } from "@/components/container";
import { DialogModal } from "@/components/modals/dialog-modal";
import { Product } from "@/components/product-cards/product";
import { ProductView } from "@/components/product-view";
import { PromoSlider } from "@/components/promo-slider";

export default function Home() {
  return (
    <Container>
      <ProductView title="popular picks">
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
