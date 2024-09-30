"use client";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import { AddressSkeleton } from "../../skeletons/address-skeleton";
import { AddressCard } from "./address-card";

async function AddressCards() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(350px,_.5fr))] gap-4">
      <AddressCard />
      <AddressCard />
      <AddressCard />
      <AddressCard />
    </div>
  );
}

export function Address({ data }) {
  return (
    <>
      <div className="flex items-center justify-between my-4">
        <Heading>address book</Heading>
        <Button icon="plus">add new address</Button>
      </div>
      <Suspense fallback={<AddressSkeleton />}>
        <AddressCards />
      </Suspense>
    </>
  );
}
