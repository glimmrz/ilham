import { CheckCheck, Heart, LogIn, Search, UserPlus } from "lucide-react";

const Icons = {
  search: Search,
  heart: Heart,
  login: LogIn,
  register: UserPlus,
  check: CheckCheck,
};

export function Icon({ size = 14, icon = "", iconColor, strokeWidth = 2 }) {
  const CurrentIcon = Icons[icon];

  if (!CurrentIcon) return null;

  return (
    <CurrentIcon
      size={size}
      color={iconColor}
      height={size}
      width={size}
      strokeWidth={strokeWidth}
    />
  );
}
