"use client";
import { InputGroup } from "../input-group";
import { Button } from "../ui/button";
import { Modal } from "./modal";

export function AddAddress() {
  const handleSubmit = (e) => {};

  return (
    <Modal
      title="add new address"
      description="Add new address here. you can modify them later."
      triggerLabel="add address"
      triggerIcon="plus"
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
            name="name"
            placeholder=""
            label="addreess / ঠিকানা"
            defaultValue=""
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <InputGroup
            name="name"
            placeholder=""
            label="city / শহর"
            defaultValue=""
            required
          />
          <InputGroup
            name="name"
            placeholder=""
            label="email / ইমেইল"
            defaultValue=""
          />
        </div>
        <InputGroup
          name="name"
          placeholder=""
          label="phone number / মোবাইল নম্বর"
          defaultValue=""
          required
        />

        <Button type="submit" className="w-full">
          Save address
        </Button>
      </form>
    </Modal>
  );
}
