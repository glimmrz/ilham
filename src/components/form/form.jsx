"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

export function FormModal({ form, onSubmit, children }) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {children}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
