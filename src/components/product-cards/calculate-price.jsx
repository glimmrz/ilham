import { cn } from "@/lib/utils";

export function CalculatePrice({ discountedPrice, price, className }) {
  return (
    <div className={cn("flex items-center gap-x-2", className)}>
      {discountedPrice < price && (
        <span className="font-bold text-base text-inherit">
          ৳{(parseInt(discountedPrice) / 100).toFixed(2)}
        </span>
      )}
      <span
        className={`text-sm text-muted-foreground font-bold line-through ${
          discountedPrice > price && "!text-base !text-inherit !no-underline"
        }`}
      >
        ৳{(price / 100).toFixed(2)}
      </span>
    </div>
  );
}
