"use client";
import { useCartSidebar } from "@/hooks/controllers";
import { Icon } from "../icon";

export function CartIndicator() {
  const { onOpen } = useCartSidebar();

  return (
    <div
      onClick={onOpen}
      role="button"
      className="fixed top-0 bottom-0 right-0 m-auto h-fit z-10 bg-card border border-muted rounded-md cursor-pointer overflow-hidden shadow-active"
    >
      <div className="px-2 py-1 flex flex-col items-center justify-center gap-1">
        <Icon icon="shoppingbasket" size={32} />
        <span className="text-xs uppercase">6 items</span>
      </div>
      <div className="bg-primary px-2 py-1">
        <span className="text-xs uppercase text-accent">0.00 TK</span>
      </div>
    </div>
  );
}
