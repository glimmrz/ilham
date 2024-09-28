import { Icon } from "./icon";

export function RatingStars({ rating }) {
  return (
    <div className="flex items-center gap-1 mt-1 mb-1">
      <Icon icon="star" className="text-primary" />
      <Icon icon="star" className="text-primary" />
      <Icon icon="star" className="text-primary" />
      <Icon icon="star" className="text-primary" />
    </div>
  );
}
