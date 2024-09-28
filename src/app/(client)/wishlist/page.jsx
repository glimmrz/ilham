import { Product } from "@/components/product-cards/product";
import { ProductView } from "@/components/product-view";
import { Container } from "@/components/wrappers/container";

export default function Page() {
  return (
    <Container>
      <ProductView title="wishlist items">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductView>
    </Container>
  );
}
