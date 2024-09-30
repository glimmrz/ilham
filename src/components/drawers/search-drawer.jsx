"use client";

import { useSearchDrawer } from "@/hooks/controllers";
import { DrawerModal } from "./drawer";
import { InputGroup } from "../input-group";
import { ProductView } from "../product-view";
import { ProductSmall } from "../product-cards/product-small";

export const SearchDrawer = () => {
  const { isOpen, onClose } = useSearchDrawer();

  return (
    <DrawerModal
      isOpen={isOpen}
      onClose={onClose}
      title="search for products"
      subtitle="find the item of your need."
    >
      <div className="flex-col items-center justify-center">
        <InputGroup
          className="w-full md:w-96"
          placeholder="organic juice"
          name="search"
          label="search product"
        />

        {/* Search results: Loading skeleton must be added. */}
        <div className="w-full">
          <ProductView className="grid-cols-1">
            <ProductSmall />
            <ProductSmall />
            <ProductSmall />
            <ProductSmall />
          </ProductView>
        </div>
      </div>
    </DrawerModal>
  );
};
