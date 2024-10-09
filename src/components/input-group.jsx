import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function InputGroup({ className, ...props }) {
  const { label, ...others } = props;

  return (
    <div className={cn("w-full space-y-1.5", className)}>
      <Label
        htmlFor={props.name}
        className={`capitalize ${
          props.required
            ? "after:content-['*'] after:text-destructive after:pl-1 after:text-lg"
            : ""
        }`}
      >
        {props.label}
      </Label>
      <Input {...others} />
    </div>
  );
}
