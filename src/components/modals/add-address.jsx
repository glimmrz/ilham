"use client";
import { postData } from "@/utils/api-calls";
import { InputGroup } from "../input-group";
import { Button } from "../ui/button";
import { Modal } from "./modal";
import { useState } from "react";
import { notify } from "@/utils/toast";
import { useRouter } from "next/navigation";

export function AddAddress() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const data = new FormData(e.target);
      const formData = Object.fromEntries(data.entries());

      const res = await postData("address", formData);

      if (res.error) {
        return notify(res.response.msg);
      }

      notify(res.response.msg);
      router.refresh();
    } catch (err) {
      notify(err.message);
    } finally {
      setIsModalOpen(false);
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="add new address"
      description="Add new address here. you can modify them later."
      triggerLabel="add address"
      triggerIcon="plus"
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onOpen={() => setIsModalOpen(true)}
    >
      <form onSubmit={handleSubmit} className="grid gap-3">
        <div className="grid grid-cols-2 gap-2">
          <InputGroup
            name="name"
            placeholder=""
            label="name / নাম"
            defaultValue=""
            required
          />
          <InputGroup
            name="address"
            placeholder=""
            label="addreess / ঠিকানা"
            defaultValue=""
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <InputGroup
            name="city"
            placeholder=""
            label="city / শহর"
            defaultValue=""
            required
          />
          <InputGroup
            name="email"
            placeholder=""
            label="email / ইমেইল"
            defaultValue=""
          />
        </div>
        <InputGroup
          name="phone"
          placeholder=""
          label="phone number / মোবাইল নম্বর"
          defaultValue=""
          required
        />

        <Button
          type="submit"
          icon="save"
          className="w-full"
          disabled={isLoading}
          loading={isLoading}
        >
          Save address
        </Button>
      </form>
    </Modal>
  );
}
