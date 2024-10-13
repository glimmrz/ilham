"use client";

import Link from "next/link";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function FormSelect({
  form,
  name,
  label,
  placeholder,
  description,
  options,
}) {
  return (
    <FormField
      control={form.control}
      name={name || ""}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel className="capitalize">{label}</FormLabel>}
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="capitalize">
                <SelectValue placeholder={placeholder || ""} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options?.map((option, index) => (
                <SelectItem
                  value={option?.value}
                  key={index}
                  className="capitalize"
                >
                  {option?.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
