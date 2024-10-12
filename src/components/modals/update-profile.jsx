"use client";
import { Button } from "@/components/ui/button";
import { InputGroup } from "../input-group";
import { useState } from "react";
import { Modal } from "./modal";
import { notify } from "@/utils/toast";
import { putData } from "@/utils/api-calls";
import { useRouter } from "next/navigation";

export function UpdateProfile({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const fd = new FormData(e.target);
      const formData = Object.fromEntries(fd.entries());

      const res = await putData(`users/${data?._id}`, {
        ...formData,
      });

      if (res.error) {
        return notify(res.response.msg);
      }

      notify(res.response.msg);
      setIsModalOpen(false);
      router.refresh();
    } catch (err) {
      notify(err.message);
    } finally {
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
        <InputGroup
          type="date"
          name="birthdate"
          placeholder=""
          label="birthdate"
          defaultValue={data?.birthdate}
        />
        <InputGroup
          name="phone"
          placeholder=""
          label="phone number"
          defaultValue={data?.phone}
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
