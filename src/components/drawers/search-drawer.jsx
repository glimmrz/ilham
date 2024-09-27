"use client";

import { useSearchDrawer } from "@/hooks/controllers";
import { DrawerModal } from "./drawer";
import { InputGroup } from "../input-group";
import { ProductView } from "../product-view";
import { Product } from "../product-cards/product";

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
          className="w-96"
          placeholder="organic juice"
          name="search"
          label="search product"
        />

        {/* Search results: Loading skeleton must be added. */}
        <div className="w-full">
          <ProductView>
            <Product />
            <Product />
            <Product />
            <Product />
          </ProductView>
        </div>
      </div>
    </DrawerModal>
  );
};
