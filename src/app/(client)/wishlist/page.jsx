import { Wishlist } from "@/components/wishlist";
import { Container } from "@/components/wrappers/container";

export function metadata() {
  return {
    title: "Whishlist",
  };
}

export default async function Page() {
  return (
    <Container>
      <Wishlist />
    </Container>
  );
}
