"use client";
import { useState } from "react";
import { useCart } from "@/hooks/use-cart";
import { createGrantToken, createPayment } from "@/utils/bkash";
import { useRouter } from "next/navigation";
import { postData } from "@/utils/api-calls";
import { notify } from "@/utils/toast";
import { Heading } from "../heading";
import { InputGroup } from "../input-group";
import { Icon } from "../icon";
import { Button } from "../ui/button";
import { Select } from "../select";

const locations = [
  {
    value: 8000,
    label: "dhaka",
  },
  {
    value: 10000,
    label: "chittagong",
  },
  {
    value: 10000,
    label: "sylhet",
  },
  {
    value: 10000,
    label: "cumilla",
  },
  {
    value: 10000,
    label: "rangpur",
  },
];

export function CheckoutForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(null);
  const [deliveryCharge, setDeliveryCharge] = useState({
    label: "",
    value: 0,
  });
  const { cartItems, total, onClear } = useCart();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const data = new FormData(e.target);
      const formData = Object.fromEntries(data.entries());

      if (!formData.paymentMethod) {
        return notify("Please select payment method.");
      }

      if (deliveryCharge.value <= 0) {
        return notify("Please select city.");
      }

      const res = await postData("orders", {
        ...formData,
        products: cartItems,
        total: total,
        couponCode: couponCode,
        deliveryCharge: parseInt(deliveryCharge.value),
        location: deliveryCharge.label,
      });

      if (res.error) {
        return notify(res.response.msg);
      }

      if (formData.paymentMethod === "BKASH") {
        const grantToken = await createGrantToken();
        if (grantToken.error) {
          return notify("An error occured during payment. Please try again.");
        }

        const paymenturl = await createPayment({}, grantToken.payload);
        if (paymenturl.error) {
          return notify("An error occured during payment. Please try again.");
        }

        router.push(paymenturl.payload);
      }

      onClear();
      router.push(`/success?id=${res.response?.payload}`);
      notify(res.response.msg);
    } catch (err) {
      notify(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCoupon = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!couponCode) {
        return notify("Please enter valid a coupon code.");
      }

      const res = await getData(`coupons/${couponCode}`, 0);
      if (res.error) {
        setCouponCode("");
        return notify(res.response.msg);
      }

      setDiscount(res.response.payload.discount);
      notify("Coupon code applied successfully.");
    } catch (err) {
      notify(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form
        className="flex flex-col gap-4"
        aria-label="checkout form"
        onSubmit={handleSubmit}
      >
        <div>
          <Heading>shipping information</Heading>
          <div className="flex flex-col gap-4 mt-4">
            <InputGroup
              label="full name / পুরো নাম"
              placeholder="John Doe"
              aria-label="customer name"
              name="name"
              required
            />
            <InputGroup
              label="address / ঠিকানা"
              placeholder="21/3, Mariana Drive, AC"
              aria-label="delivery address"
              name="address"
              required
            />
            <div className="grid md:grid-cols-2 gap-2 md:gap-4">
              <Select
                placeholder="select city"
                options={locations}
                value={deliveryCharge}
                setValue={setDeliveryCharge}
                label="phone number / মোবাইল নম্বর"
                required
              />

              <InputGroup
                label="phone number / মোবাইল নম্বর"
                placeholder="01..."
                aria-label="phone"
                name="phone"
                required
              />
            </div>
          </div>
        </div>

        {/* Coupon code */}
        <div className="grid gap-4 border border-shade border-dashed p-4 rounded-md">
          <InputGroup
            label="coupon code / কুপন"
            placeholder="example2024"
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <Button
            icon="discount"
            onClick={handleCoupon}
            loading={isLoading}
            disabled={isLoading || cartItems.length === 0}
          >
            apply coupon
          </Button>
        </div>

        {/* Payment method */}
        <div className="mt-4">
          <Heading>payment method</Heading>
          <div className="grid gap-2 md:gap-4 mt-4">
            {/* Option 1 */}
            <div className="w-full">
              <input
                value="COD"
                type="radio"
                id="paymentMethod"
                name="paymentMethod"
                className="hidden peer"
              />
              <label
                htmlFor="paymentMethod"
                className="flex items-center gap-2 p-4 w-full border border-dashed rounded-md cursor-pointer peer-checked:border-primary peer-checked:border-solid"
              >
                <Icon icon="cod" size={22} />
                <span>Cash On Delivery / পণ্য পেয়ে পেমেন্ট</span>
              </label>
            </div>

            {/* Option 2 */}
            <div className="w-full">
              <input
                value="BKASH"
                type="radio"
                id="paymentMethod2"
                name="paymentMethod"
                className="hidden peer"
              />
              <label
                htmlFor="paymentMethod2"
                className="flex items-center gap-2 p-4 w-full border border-dashed rounded-md cursor-pointer peer-checked:border-primary peer-checked:border-solid"
              >
                <Icon icon="bkash" size={22} />
                <span>bKash pay / বিকাশ পেমেন্ট</span>
              </label>
            </div>
          </div>
        </div>

        {/* Order summary */}
        <div className="p-2 bg-accent">
          <table className="w-full rounded-md">
            <tbody>
              <tr>
                <td className="capitalize pt-3 pb-3 pl-0 pr-0">Sub Total</td>
                <td className="capitalize pt-3 pb-3 pl-0 pr-0">
                  ৳{(total / 100).toFixed(2)}
                </td>
              </tr>
              <tr>
                <td className="capitalize pt-3 pb-3 pl-0 pr-0">
                  Delivery Charge
                </td>
                <td className="capitalize pt-3 pb-3 pl-0 pr-0">
                  ৳{(deliveryCharge.value / 100).toFixed(2)}
                </td>
              </tr>
              <tr>
                <td className="capitalize pt-3 pb-3 pl-0 pr-0">Discount</td>
                <td className="capitalize pt-3 pb-3 pl-0 pr-0">
                  ৳{(((total / 100) * discount) / 100).toFixed(2)}{" "}
                  {discount && (
                    <span className="text-theme font-bold">({discount}%)</span>
                  )}
                </td>
              </tr>
              <tr className="text-3xl">
                <td className="capitalize pt-3 pb-3 pl-0 pr-0">Order total</td>
                <td className="capitalize pt-3 pb-3 pl-0 pr-0">
                  ৳
                  {discount
                    ? (
                        (parseInt(total) -
                          parseInt(total * discount) / 100 +
                          parseInt(deliveryCharge.value)) /
                        100
                      ).toFixed(2)
                    : (
                        (parseInt(total) + parseInt(deliveryCharge.value)) /
                        100
                      ).toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Button
          type="submit"
          icon="card"
          loading={isLoading}
          disabled={isLoading || cartItems.length === 0}
        >
          place order
        </Button>
      </form>
    </div>
  );
}