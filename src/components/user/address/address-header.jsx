import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";

export function AddressHeader() {
  return (
    <header className="flex items-center justify-between my-4">
      <Heading>address book</Heading>
      <Button icon="plus">add new address</Button>
    </header>
  );
}
