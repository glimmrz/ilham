import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function InputGroup({ className, ...props }) {
  const { label, ...others } = props;

  return (
    <div className={cn("w-full space-y-1.5", className)}>
      <Label
        htmlFor={props.name}
        className={`capitalize relative ${
          props.required
            ? "after:content-['*'] after:absolute after:text-destructive after:text-lg"
            : ""
        }`}
      >
        {props.label}
      </Label>
      <Input {...others} />
    </div>
  );
}
