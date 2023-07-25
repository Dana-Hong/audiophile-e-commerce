import { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import OrderConfirmModal from "./OrderConfirmation";
import Button from "./Button";
import Input from "./inputs/Input";
import Radio from "./inputs/Radio";

import xx99mkiiThumb from "../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";

export default function Checkout() {
  const [orderConfirmOpen, setOrderConfirmOpen] = useState(false);

  function handlePayment() {
    return <div></div>;
  }

  return (
    <>
      <Header />
      <main className="relative gap-8 bg-gray px-6 pt-4 md:gap-20 md:px-10 min-[1150px]:gap-32 min-[1150px]:px-0">
        {orderConfirmOpen && <OrderConfirmModal />}
        <div className="mx-auto flex max-w-[1150px] flex-col items-center justify-center gap-8 pb-24 min-[1110px]:items-start">
          <a
            href="/"
            className="mx-auto block w-full self-start bg-gray pb-6 text-[15px] font-medium text-opacity-50 opacity-50 hover:text-orange hover:opacity-100 min-[1110px]:ml-4"
          >
            Go Back
          </a>
          <div className="flex w-full flex-col items-center justify-center gap-8 min-[1110px]:flex-row min-[1110px]:items-start">
            <section className="max-w-[730px] rounded-lg bg-white p-6 md:px-7 md:py-[30px] min-[1110px]:px-12">
              <form action="#" className="flex flex-col gap-8">
                <h1 className="text-2xl font-bold uppercase">Checkout</h1>
                <div className="flex flex-col gap-4">
                  <h2 className="text-sm font-bold uppercase text-orange">Billing details</h2>
                  <div className="flex flex-wrap gap-4">
                    <Input placeholder="John" name="First Name" type="text" className="grow" />
                    <Input placeholder="Doe" name="Last Name" type="text" className="grow" />
                    <Input
                      placeholder="+1 (647) 647 - 6476"
                      name="Number"
                      type="tel"
                      className="grow"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h2 className="text-sm font-bold uppercase text-orange">Shipping Info</h2>
                  <div className="flex flex-wrap gap-4">
                    <Input
                      placeholder="123 Rosewater Court"
                      name="Your Address"
                      type="text"
                      className="grow"
                    />
                    <Input placeholder="10001" name="ZIP Code" type="text" />
                    <Input placeholder="New York" name="City" type="text" />
                    <Input placeholder="State" name="State" type="text" />
                    <Input placeholder="Country" name="United States" type="text" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-sm font-bold uppercase text-orange">Payment Details</h2>
                  <div className="flex flex-wrap gap-4">
                    <Radio name="Payment Method" id="Visa" />
                    <Radio name="Payment Method" id="Mastercard" />
                  </div>
                </div>
              </form>
            </section>
            <section className="w-full max-w-[730px] rounded-lg bg-white p-6 md:px-7 md:py-8 min-[1110px]:max-w-[350px] min-[1110px]:px-8">
              <form action="#" className="flex flex-col gap-8">
                <h1 className="text-lg font-bold uppercase">Summary</h1>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <img src={xx99mkiiThumb} alt="" className="h-16 w-16 rounded-lg" />
                    <div className="flex grow flex-col">
                      <div className="flex justify-between">
                        <p className="font-bold">XX99 MKII</p>
                        <p className="opacity-50">x1</p>
                      </div>
                      <p className="text-sm opacity-50">$ 2,999</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={xx99mkiiThumb} alt="" className="h-16 w-16 rounded-lg" />
                    <div className="flex grow flex-col">
                      <div className="flex justify-between">
                        <p className="font-bold">XX99 MKII</p>
                        <p className="text-sm opacity-50">x1</p>
                      </div>
                      <p className="text-sm opacity-50">$ 2,999</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={xx99mkiiThumb} alt="" className="h-16 w-16 rounded-lg" />
                    <div className="flex grow flex-col">
                      <div className="flex justify-between">
                        <p className="font-bold">XX99 MKII</p>
                        <p className="text-sm opacity-50">x1</p>
                      </div>
                      <p className="text-sm opacity-50">$ 2,999</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <p className="uppercase opacity-50">Total</p>
                    <p className="text-lg font-bold">$ 5,396</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="uppercase opacity-50">Shipping</p>
                    <p className="text-lg font-bold">$ 50</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="uppercase opacity-50">VAT (Included)</p>
                    <p className="text-lg font-bold">$ 1,079</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="uppercase opacity-50">Grand Total</p>
                  <p className="text-lg font-bold text-orange">$ 5,446</p>
                </div>
                <Button link={false} path={false} className="self-center">
                  Continue &#38; Pay
                </Button>
              </form>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
