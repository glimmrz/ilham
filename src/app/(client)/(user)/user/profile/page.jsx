import { DataCell } from "@/components/data-cell";
import { Heading } from "@/components/heading";
import { Icon } from "@/components/icon";
import { UpdateProfile } from "@/components/modals/update-profile";
import { WithdrawMoney } from "@/components/modals/withdraw-money";
import { ProfileSkeleton } from "@/components/skeletons/profile-skeleton";
import { TotalCard } from "@/components/total-card";
import { Button } from "@/components/ui/button";
import { getData } from "@/utils/api-calls";
import { getSession } from "@/utils/auth";
import { Suspense } from "react";

export async function generateMetadata() {
  const session = await getSession();

  return {
    title: `${session.payload?.name}'s profile`,
  };
}

async function ProfileData() {
  const session = await getSession();
  const res = await getData(`users/${session.payload?._id}`, 0);

  return (
    <>
      <div className="flex justify-between items-center mb-4 md:mb-1">
        <Heading>{res.response?.payload?.name}</Heading>
        <UpdateProfile data={res.response?.payload} />
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-2 md:gap-6">
        <div className="flex items-center gap-2">
          <Icon icon="location" size={20} />
          <p>Bangladesh</p>
        </div>
        <div className="flex items-center gap-2">
          <Icon icon="email" size={20} />
          <p>{res.response?.payload?.email}</p>
        </div>
        <div className="flex items-center gap-2">
          <Icon icon="verified" size={20} />
          <p>
            Member since{" "}
            {new Date(res.response?.payload?.createdAt).toDateString()}
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse mt-4 mb-4 md:grid md:grid-cols-2">
        <div className="pt-2 pb-2 pl-0 pr-0 flex flex-col gap-x-0 gap-y-4 md:gap-y-8">
          <DataCell
            dataName="gender"
            dataValue={
              res.response?.payload?.gender
                ? res.response?.payload?.gender
                : "-----"
            }
          />
          <DataCell
            dataName="birthdate"
            dataValue={
              res.response?.payload?.birthdate
                ? new Date(res.response?.payload?.birthdate)?.toDateString()
                : "-----"
            }
          />
          <DataCell
            dataName="phone number"
            dataValue={
              res.response?.payload?.phone
                ? res.response?.payload?.phone
                : "-----"
            }
          />
          <DataCell
            dataName="bKash number"
            dataValue={
              res.response?.payload?.bkash
                ? res.response?.payload?.bkash
                : "-----"
            }
          />
        </div>
        <div className="pt-2 pb-2 pl-0 pr-0 flex flex-col gap-x-0 gap-y-4 md:gap-y-8">
          <DataCell
            dataName="coupon code"
            dataValue={
              res.response?.payload?.code?.code
                ? res.response?.payload?.code?.code
                : "-----"
            }
          />
          <DataCell dataName="password" dataValue="*******" />
        </div>
      </div>

      <div className="mt-4 mb-4 grid grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] gap-2">
        <TotalCard
          data={{
            icon: "coupon",
            dataKey: "coupon code",
            dataValue: res.response?.payload?.code?.code
              ? res.response?.payload?.code?.code?.toUpperCase()
              : "-----",
          }}
        />
        <TotalCard
          data={{
            icon: "pending",
            dataKey: "pending earnings",
            dataValue: `৳ ${res.response?.payload?.pendingComission / 100}`,
          }}
        />
        <TotalCard
          data={{
            icon: "revenue",
            dataKey: "available earnings",
            dataValue: `৳ ${res.response?.payload?.availableComission / 100}`,
          }}
        />
        <TotalCard
          data={{
            icon: "cancel",
            dataKey: "cancelled earnings",
            dataValue: `৳ ${res.response?.payload?.cancelledComission / 100}`,
          }}
        />
        <TotalCard
          data={{
            icon: "withdrawMoney",
            dataKey: "withdrawn earnings",
            dataValue: `৳ ${res.response?.payload?.withdrawnComission / 100}`,
          }}
        />
      </div>

      <WithdrawMoney />
    </>
  );
}

export default async function Page() {
  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <ProfileData />
    </Suspense>
  );
}
