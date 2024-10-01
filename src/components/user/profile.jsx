import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { DataCell } from "@/components/data-cell";
import { TotalCard } from "@/components/total-card";
import { Heading } from "@/components/heading";

export function Profile({ data }) {
  return (
    <>
      <div className="flex justify-between items-center mb-4 md:mb-1">
        <Heading>{data?.name}</Heading>
        <Button icon="edit">edit profile</Button>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-2 md:gap-6">
        <div className="flex items-center gap-2">
          <Icon icon="location" size={20} />
          <p>Bangladesh</p>
        </div>
        <div className="flex items-center gap-2">
          <Icon icon="email" size={20} />
          <p>{data?.email}</p>
        </div>
        <div className="flex items-center gap-2">
          <Icon icon="verified" size={20} />
          <p>Member since {new Date(data?.createdAt).toDateString()}</p>
        </div>
      </div>

      <div className="flex flex-col-reverse mt-4 mb-4 md:grid md:grid-cols-2">
        <div className="pt-2 pb-2 pl-0 pr-0 flex flex-col gap-x-0 gap-y-4 md:gap-y-8">
          <DataCell
            dataName="gender"
            dataValue={data?.gender ? data?.gender : "-----"}
          />
          <DataCell
            dataName="birthdate"
            dataValue={
              data?.birthdate
                ? new Date(data?.birthdate)?.toDateString()
                : "-----"
            }
          />
          <DataCell
            dataName="phone number"
            dataValue={data?.phone ? data?.phone : "-----"}
          />
          <DataCell
            dataName="address"
            dataValue={data?.address ? data?.address : "-----"}
          />
        </div>
        <div className="pt-2 pb-2 pl-0 pr-0 flex flex-col gap-x-0 gap-y-4 md:gap-y-8">
          <DataCell
            dataName="coupon code"
            dataValue={data?.code?.code ? data?.code?.code : "-----"}
          />
          <DataCell dataName="password" dataValue="*******" />
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] gap-2">
        <TotalCard
          data={{
            icon: "coupon",
            dataKey: "coupon code",
            dataValue: data?.code?.code
              ? data?.code?.code?.toUpperCase()
              : "-----",
          }}
        />
        <TotalCard
          data={{
            icon: "revenue",
            dataKey: "pending earnings",
            dataValue: `৳ ${data?.pendingComission / 100}`,
          }}
        />
        <TotalCard
          data={{
            icon: "revenue",
            dataKey: "confirmed earnings",
            dataValue: `৳ ${data?.availableComission / 100}`,
          }}
        />
        <TotalCard
          data={{
            icon: "revenue",
            dataKey: "withdrawn earnings",
            dataValue: `৳ ${data?.withdrawnComission / 100}`,
          }}
        />
      </div>
    </>
  );
}
