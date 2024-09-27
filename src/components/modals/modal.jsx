"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export function Modal({ children, isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full md:max-w-[95%]">
        {children}
      </DialogContent>
    </Dialog>
  );
}
