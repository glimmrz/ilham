"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

export function Modal({
  children,
  triggerLabel,
  triggerIcon,
  title,
  description,
  isOpen,
  onClose,
  onOpen,
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <Button onClick={onOpen} icon={triggerIcon}>
        {triggerLabel}
      </Button>

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
