import { Heading } from "@/components/heading";
import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/wrappers/container";
import Link from "next/link";

export const metadata = {
  title: "Order Successful | AlgoMart",
  description: "Order placed successfully.",
};

export default async function OrderSuccessPage({ searchParams }) {
  return (
    <Container>
      <div className="min-h-[80vh] pt-4 pb-4 pl-0 pr-0 flex flex-col items-center justify-center gap-2">
        <Icon icon="verified" size={200} />

        <Heading title="order placed successfully." />
        <p className="!text-center">
          Your order is successful and your order is on the way. You will
          receive an email shortly.
        </p>
        <p>
          Order ID:{" "}
          <span className="text-xl font-bold">{searchParams?.id}</span>
        </p>

        <div className="space-x-4">
          <Link href="/track-order">
            <Button>track order</Button>
          </Link>
          <Link href="/">
            <Button>return home</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
