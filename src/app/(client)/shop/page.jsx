import { Container } from "@/components/container";
import { Product } from "@/components/product-cards/product";
import { ProductView } from "@/components/product-view";

export default function Page() {
  return (
    <Container>
      <ProductView title="all products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductView>
    </Container>
  );
}
