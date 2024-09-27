import { CategoryView } from "@/components/category-view";
import { Container } from "@/components/container";
import { Product } from "@/components/product-cards/product";
import { ProductView } from "@/components/product-view";
import { PromoSlider } from "@/components/promo-slider";

const Page = () => {
  return (
    <Container>
      <PromoSlider />
      <CategoryView />

      <ProductView title="groceries">
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
};

export default Page;
