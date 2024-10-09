"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

export function Modal({
  children,
  triggerLabel,
  triggerIcon,
  title,
  description,
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button icon={triggerIcon}>{triggerLabel}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {(title || description) && (
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
        )}

        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
}
