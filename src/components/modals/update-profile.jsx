"use client";
import { Button } from "@/components/ui/button";
import { InputGroup } from "../input-group";
import { useState } from "react";
import { DatePicker } from "../date-picker";
import { Modal } from "./modal";
import { notify } from "@/utils/toast";

export function UpdateProfile({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState(data?.birthdate);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const data = new FormData(e.target);
      const formData = Object.fromEntries(data.entries());

      console.log({ ...formData, birthdate: date });
    } catch (err) {
      notify(err.message);
    } finally {
      setIsModalOpen(false);
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="Edit profile"
      description="Make changes to your profile here. Click save when you're done."
      triggerLabel="update profile"
      triggerIcon="edit"
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onOpen={() => setIsModalOpen(true)}
    >
      <form onSubmit={handleSubmit} className="grid gap-3">
        <InputGroup
          name="name"
          placeholder=""
          label="name"
          defaultValue={data?.name}
        />
        <DatePicker date={date} setDate={setDate} label="birthdate" />
        <InputGroup
          name="phone"
          placeholder=""
          label="phone number"
          defaultValue={data?.phone}
        />
        <InputGroup
          name="address"
          placeholder=""
          label="address"
          defaultValue={data?.address}
        />
        <InputGroup
          name="code"
          placeholder=""
          label="coupon code"
          defaultValue={data?.code.code}
        />
        <InputGroup
          name="bkash"
          placeholder=""
          label="bkash account number"
          defaultValue={data?.bkash}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={isLoading}
          loading={isLoading}
        >
          Save changes
        </Button>
      </form>
    </Modal>
  );
}
