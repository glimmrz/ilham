"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputGroup } from "../input-group";
import { useState } from "react";
import { DatePicker } from "../date-picker";

export function UpdateProfile() {
  const [date, setDate] = useState();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button icon="edit">update Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>update profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <InputGroup name="" placeholder="" label="name" defaultValue="" />
          <DatePicker date={date} setDate={setDate} label="birthdate" />
          <InputGroup
            name=""
            placeholder=""
            label="phone number"
            defaultValue=""
          />
          <InputGroup name="" placeholder="" label="address" defaultValue="" />
          <InputGroup
            name=""
            placeholder=""
            label="coupon code"
            defaultValue=""
          />
          <InputGroup
            name=""
            placeholder=""
            label="bKash account number"
            defaultValue=""
          />
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
