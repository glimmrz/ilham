"use client";

import { DataCell } from "../data-cell";
import { Button } from "../ui/button";
import { Card, CardContent, CardTitle } from "../ui/card";

export function AddressCard({ address }) {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col justify-between">
          <div>
            <CardTitle>jane doe</CardTitle>
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
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button>edit</Button>
            <Button variant="destructive">delete</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
