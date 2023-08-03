// libraries
import { useContext } from "react";

// hooks / context
import useModalContext from "../../hooks/useOrderConfirmContext";
import { CheckoutContext } from "../../context/CheckoutContext";

// components
import Button from "../ui/Button";

// icons
import OrderConfirmation from "../icons/OrderConfirmation";

import { formatPrice } from "../../utils/utils";

export default function OrderConfirmModal() {
  const { setModal } = useModalContext();
  const { checkout } = useContext(CheckoutContext);
  const firstItem = checkout[0];
  const { shortname, image, price, quantity } = firstItem;

  const subTotal = formatPrice(
    checkout.reduce((acc, curr) => (acc + curr.price) * curr.quantity, 0)
  );

  const formattedPrice = formatPrice(price);
  function handleBackgroundClick() {
    setModal({ cart: false, orderConfirm: false });
  }

  function handleModalClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
  }

  return (
    <div
      onClick={handleBackgroundClick}
      className="fixed z-30 min-h-screen w-full bg-zinc-900 bg-opacity-60 pt-6 md:pt-8"
    >
      <div
        onClick={(e) => handleModalClick(e)}
        className="mx-auto w-full max-w-[540px] rounded-lg bg-white p-8 md:p-12"
      >
        <OrderConfirmation />
        <p className="mt-8 text-2xl font-bold uppercase">Thank you for your order</p>
        <p className="mt-6 opacity-50">You will receive an email confirmation shortly.</p>
        <div className="mt-8 flex flex-col min-[500px]:flex-row">
          <div className="flex grow basis-[55%] flex-col gap-4 rounded-t-lg bg-gray px-4 py-6 text-xs min-[500px]:rounded-l-lg min-[500px]:rounded-r-none min-[500px]:text-sm">
            <div className="flex items-center">
              <div className="grow font-bold">
                <div className="flex justify-between">
                  <p className="uppercase text-black">{shortname}</p>
                  <p className="opacity-50">x{quantity}</p>
                </div>
                <p className="opacity-50">{formattedPrice}</p>
              </div>
              <img src={image} alt="headphones thumbnail" className="order-first h-12 w-12" />
            </div>
            {checkout.length > 1 && (
              <p className="border-t border-t-zinc-300 pt-4 text-center text-xs">
                and {checkout.length - 1} other item(s)
              </p>
            )}
          </div>
          <div className="flex basis-[45%] flex-col justify-center gap-2 rounded-b-lg bg-almostBlack px-4 pt-4 pb-5 text-white min-[500px]:rounded-l-none min-[500px]:rounded-r-lg">
            <p className="uppercase opacity-50">grand total</p>
            <p className="text-lg">{subTotal}</p>
          </div>
        </div>
        <Button link path="../" className="mt-12 w-full">
          Back to Home
        </Button>
      </div>
    </div>
  );
}
