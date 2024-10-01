import { CheckoutSummary } from "@/components/checkout/checkout-summary";
import { CheckoutForm } from "@/components/forms/checkout-form";
import { Container } from "@/components/wrappers/container";

export const metadata = {
  title: "Checkout | ilham",
  description: "Proceed to complete your order.",
};

export default function Page() {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-8 md:gap-4 lg:gap-8 md:grid-cols-2">
        <div className="md:p-2 lg:pt-2 lg:pb-2 lg:pl-8 lg:pr-8 xl:pl-20 xl:pr-20">
          <CheckoutForm />
        </div>
        <div className="h-fit bg-accent rounded-md md:sticky top-[calc(theme(height.navbar)+theme(height.linkbar)+theme(gap.2))] row-start-1 md:row-start-auto md:p-2 lg:pt-2 lg:pb-2 lg:pl-8 lg:pr-8 xl:pl-20 xl:pr-20">
          <CheckoutSummary />
        </div>
      </div>
    </Container>
  );
}