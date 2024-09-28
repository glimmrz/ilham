"use client";
import { AddressCard } from "@/components/address/address-card";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";

export default function Address({ data }) {
  return (
    <>
      <div className="flex items-center justify-between my-4">
        <Heading>address book</Heading>
        <Button icon="plus">add new address</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(350px,_.5fr))] gap-4">
        <AddressCard />
        <AddressCard />
        <AddressCard />
        <AddressCard />
      </div>
    </>
  );
}
