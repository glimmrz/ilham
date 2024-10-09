"use client";

import { DataCell } from "@/components/data-cell";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function AddressCard({ address }) {
  return (
    <Card>
      <CardContent>
        <Heading>jane doe</Heading>
        <div className="mt-3 mb-3 ml-0 mr-0 flex gap-4 justify-between">
          <div className="flex flex-col gap-4">
            <DataCell dataName="address" dataValue="sing street, ireland" />
            <DataCell
              dataName="email"
              dataValue={address?.email ? address?.email : "unset"}
            />
            <DataCell dataName="phone number" dataValue="01873228724" />
          </div>
          <div className="flex flex-col gap-4">
            <DataCell dataName="city" dataValue="dublin" />
            <DataCell dataName="country" dataValue="ireland" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button icon="edit">edit</Button>
          <Button variant="destructive" icon="delete">
            delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
