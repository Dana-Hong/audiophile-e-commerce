// library imports
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

// context
import { CheckoutContext } from "../context/CheckoutContext";

// components
import OrderConfirmModal from "../components/modals/OrderConfirmation";
import Button from "../components/ui/Button";
import Input from "../components/ui/inputs/Input";
import Radio from "../components/ui/inputs/Radio";

// utils
import { formatPrice } from "../utils/utils";
import useCartContext from "../hooks/useCartContext";

export default function Checkout() {
  const { cartModal } = useCartContext();
  const { checkout } = useContext(CheckoutContext);
  const [orderConfirmOpen, setOrderConfirmOpen] = useState(false);

  const checkoutItems = checkout.map((item) => {
    const { name, image, price, quantity } = item;
    const formattedPrice = formatPrice(price);
    return (
      <div key={name} className="flex items-center gap-4">
        <img src={image} alt="" className="h-16 w-16 rounded-lg" />
        <div className="flex grow flex-col">
          <div className="flex justify-between">
            <p className="font-bold">{name}</p>
            <p className="w-5 opacity-50">x{quantity}</p>
          </div>
          <p className="text-sm opacity-50">{formattedPrice}</p>
        </div>
      </div>
    );
  });

  const subTotal = formatPrice(
    checkout.reduce((acc, curr) => (acc + curr.price) * curr.quantity, 0)
  );

  function handleContinueAndPay() {
    setOrderConfirmOpen(!orderConfirmOpen);
  }

  return (
    <main
      className={`${
        cartModal ? "pt-[85px]" : ""
      } relative gap-8 bg-gray px-6 md:gap-20 md:px-10 min-[1150px]:gap-32 min-[1150px]:px-0`}
    >
      {orderConfirmOpen && <OrderConfirmModal />}
      <div className="mx-auto flex max-w-[1150px] flex-col items-center justify-center gap-8 pt-4 pb-24 min-[1110px]:items-start">
        <Link
          to="/"
          className="mx-auto block w-full self-start bg-gray pb-6 text-[15px] font-medium text-opacity-50 opacity-50 hover:text-orange hover:opacity-100 min-[1110px]:ml-4"
        >
          Go Back
        </Link>
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
                  <Input placeholder="United States" name="Country" type="text" />
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
            <form className="flex flex-col gap-8">
              <h1 className="text-lg font-bold uppercase">Summary</h1>
              <div className="flex flex-col gap-6">{checkoutItems}</div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <p className="uppercase opacity-50">Total</p>
                  <p className="text-lg font-bold">{subTotal}</p>
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
              <Button onClick={handleContinueAndPay} className="self-center">
                Continue &#38; Pay
              </Button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
