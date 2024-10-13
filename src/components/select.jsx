"use client";
import React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function Select({
  placeholder,
  label,
  options,
  value,
  setValue,
  ...props
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="grid gap-1.5 w-full">
      <label
        htmlFor=""
        className={`capitalize text-sm ${
          props.required
            ? "after:content-['*'] after:text-destructive after:pl-1 after:text-lg"
            : ""
        }`}
      >
        {label}
      </label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between border-input text-muted-foreground"
          >
            {value.label
              ? options.find((framework) => framework.label === value.label)
                  ?.label
              : placeholder}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder={placeholder} />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {options.map((framework, index) => (
                  <CommandItem
                    className="capitalize w-full"
                    key={index}
                    value={framework.value}
                    onSelect={() => {
                      setValue(framework);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value.label === framework.label
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    <div className="w-full flex items-center justify-between">
                      {framework.label}
                      <p className="uppercase text-muted-foreground">
                        ({framework.value / 100}tk)
                      </p>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
