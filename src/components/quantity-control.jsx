"use client";
import { Button } from "./ui/button";

export function QuantityControl({ id, title, quantity }) {
  return (
    <div className="w-fit rounded-md flex items-center gap-4">
      <Button icon="plus" onClick={() => {}} />
      <span className="font-bold text-base">{quantity}</span>
      <Button icon="minus" onClick={() => {}} />
    </div>
  );
}
