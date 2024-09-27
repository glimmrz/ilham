import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function InputGroup({ className, ...props }) {
  const { label, ...others } = props;

  return (
    <div className={cn("grid w-full items-center gap-1.5", className)}>
      <Label htmlFor={props.name} className="capitalize">
        {props.label}
      </Label>
      <Input {...others} />
    </div>
  );
}
