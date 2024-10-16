import { Block } from "@/components/(dashboard)/block";
import { CardView } from "@/components/(dashboard)/card-view";
import { ProductCard } from "@/components/(dashboard)/cards/product-card";
import { DataCell } from "@/components/data-cell";
import { Heading } from "@/components/heading";
import { getData } from "@/utils/api-calls";

export default async function Page({ params }) {
  const res = await getData(`orders/${params.id}`, 0);
  const order = res.response.payload;

  return (
    <div>
      <Block title="Order Details" />

      <div className="mt-8 space-y-8">
        <div className="grid grid-cols-3 gap-4">
          <DataCell dataName="Order ID" dataValue={order?._id} />
          <DataCell dataName="Customer Name" dataValue={order?.name} />
          <DataCell dataName="Customer Address" dataValue={order?.address} />
          <DataCell dataName="Location" dataValue={order?.location} />
          <DataCell dataName="Customer Phone" dataValue={order?.phone} />
          <DataCell
            dataName="Total Before discount"
            dataValue={order?.totalBeforeDiscount}
          />
          <DataCell
            dataName="total after discount"
            dataValue={order?.totalAfterDiscount}
          />
          <DataCell
            dataName="total after comission"
            dataValue={order?.totalAfterComission}
          />
          <DataCell
            dataName="seller total amount"
            dataValue={order?.sellerTotal}
          />
          <DataCell
            dataName="delivery charge"
            dataValue={order?.deliveryCharge}
          />
          <DataCell
            dataName="total with delivery charge"
            dataValue={order?.totalWithDeliveryCharge}
          />
          <DataCell
            dataName="discount percentage"
            dataValue={`${order?.discountPercentage}%`}
          />
          <DataCell dataName="order status" dataValue={order?.status} />
          <DataCell
            dataName="coupon code"
            dataValue={order?.couponCode?.code}
          />
          <DataCell dataName="comission" dataValue={order?.comission} />
          <DataCell
            dataName="comission to"
            dataValue={order?.comissionTo?.name}
          />
          <DataCell
            dataName="payment method"
            dataValue={order?.paymentMethod}
          />
          <DataCell
            dataName="payment status"
            dataValue={order?.paymentStatus}
          />
          <DataCell
            dataName="order date"
            dataValue={new Date(order?.orderDate).toDateString()}
          />
        </div>

        <div className="space-y-4">
          <Heading>Ordered Items</Heading>
          <CardView>
            {order?.products?.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </CardView>
        </div>
      </div>
    </div>
  );
}
