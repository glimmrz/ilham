"use client";
import { useState } from "react";
import { useCart } from "@/hooks/use-cart";
import { createGrantToken, createPayment } from "@/utils/bkash";
import { useRouter } from "next/navigation";
import { getData, postData } from "@/utils/api-calls";
import { notify } from "@/utils/toast";
import { Heading } from "../heading";
import { InputGroup } from "../input-group";
import { Icon } from "../icon";
import { Button } from "../ui/button";
import { Select } from "../select";
import { useEcommerceEvent } from "@/hooks/use-ecommerce-event";

const locations = [
  {
    value: 8000,
    label: "dhaka - ঢাকা",
  },
  {
    value: 10000,
    label: "chittagong - চট্টগ্রাম",
  },
  {
    value: 10000,
    label: "sylhet - সিলেট",
  },
  {
    value: 10000,
    label: "cumilla - কুমিল্লা",
  },
  {
    value: 10000,
    label: "rangpur - রংপুর",
  },
  {
    value: 10000,
    label: "barisal - বরিশাল",
  },
  {
    value: 10000,
    label: "khulna - খুলনা",
  },
  {
    value: 10000,
    label: "rajshahi - রাজশাহী",
  },
  {
    value: 10000,
    label: "narsingdi - নরসিংদী",
  },
  {
    value: 10000,
    label: "faridpur - ফরিদপুর",
  },
  {
    value: 10000,
    label: "jashore - যশোর",
  },
  {
    value: 10000,
    label: "pabna - পাবনা",
  },
  {
    value: 10000,
    label: "noakhali - নোয়াখালী",
  },
  {
    value: 10000,
    label: "shariatpur - শরীয়তপুর",
  },
  {
    value: 10000,
    label: "magura - মাগুরা",
  },
  {
    value: 10000,
    label: "netrokona - নেত্রকোনা",
  },
  {
    value: 10000,
    label: "panchagarh - পঞ্চগড়",
  },
  {
    value: 10000,
    label: "dinajpur - দিনাজপুর",
  },
  {
    value: 10000,
    label: "kurigram - কুড়িগ্রাম",
  },
  {
    value: 10000,
    label: "sunamganj - সুনামগঞ্জ",
  },
  {
    value: 10000,
    label: "moulvibazar - মৌলভীবাজার",
  },
  {
    value: 10000,
    label: "habiganj - হবিগঞ্জ",
  },
  {
    value: 10000,
    label: "gazipur - গাজীপুর",
  },
  {
    value: 10000,
    label: "kishoreganj - কিশোরগঞ্জ",
  },
  {
    value: 10000,
    label: "bholan - ভোলা",
  },
  {
    value: 10000,
    label: "bhola - ভোলা",
  },
  {
    value: 10000,
    label: "brahmanbaria - ব্রাহ্মণবাড়িয়া",
  },
  {
    value: 10000,
    label: "sherpur - শেরপুর",
  },
  {
    value: 10000,
    label: "joypurhat - জয়পুরহাট",
  },
  {
    value: 10000,
    label: "thakurgaon - ঠাকুরগাঁও",
  },
  {
    value: 10000,
    label: "patuakhali - পটুয়াখালী",
  },
  {
    value: 10000,
    label: "bagerhat - বাগেরহাট",
  },
  {
    value: 10000,
    label: "mymensingh - ময়মনসিংহ",
  },
  {
    value: 10000,
    label: "jhalokati - ঝালকাঠী",
  },
  {
    value: 10000,
    label: "kishoreganj - কিশোরগঞ্জ",
  },
  {
    value: 10000,
    label: "satkhira - সাতক্ষীরা",
  },
  {
    value: 10000,
    label: "sherpur - শেরপুর",
  },
  {
    value: 10000,
    label: "Jessore - যশোর",
  },
];

export function CheckoutForm() {
  const { sendEvent } = useEcommerceEvent();
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

      // Start processing order
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

      // Send tag manager event
      sendEvent({
        event: "purchase",
        ecommerce: {
          transaction_id: res.response?.payload,
          value: total,
          tax: 0,
          shipping: deliveryCharge.value,
          currency: "BDT",
          items: cartItems.map((item) => ({
            item_id: item._id,
            item_name: item.title,
            price: item.price,
            quantity: item.quantity,
          })),
        },
      });

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
                label="city / শহর"
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
                    <span className="text-primary font-bold">
                      ({discount}%)
                    </span>
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
