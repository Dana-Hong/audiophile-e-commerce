import { useContext } from "react";
import { CheckoutContext } from "../../context/CheckoutContext";
import Button from "../ui/Button";
import { formatPrice } from "../../utils/utils";

export default function Cart() {
  const { checkout, setCheckout } = useContext(CheckoutContext);

  const checkoutItems = checkout.map((item) => {
    const { name, image, price, quantity } = item;
    const formattedPrice = formatPrice(price);
    return (
      <div key={name} className="flex items-center gap-4">
        <img src={image} alt="" className="h-16 w-16 rounded-lg" />
        <div className="flex grow flex-col">
          <div className="flex justify-between">
            <p className="font-bold">{name}</p>
            <p className="opacity-50">x{quantity}</p>
          </div>
          <p className="text-sm opacity-50">{formattedPrice}</p>
        </div>
      </div>
    );
  });

  const subTotal = formatPrice(
    checkout.reduce((acc, curr) => (acc + curr.price) * curr.quantity, 0)
  );

  return (
    <div className="fixed z-30 min-h-screen w-full bg-zinc-900 bg-opacity-60 pt-6 md:pt-8">
      <div className="mx-auto flex w-full max-w-[1110px] justify-end">
        <div className="mr-[calc(5%)] flex max-w-sm flex-col gap-8 rounded-lg bg-white px-7 py-8">
          <div className="flex justify-between">
            <p className="text-lg font-bold uppercase">Cart {`(${checkout.length})`}</p>
            <button onClick={() => setCheckout([])} className="underline opacity-50">
              Remove all
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {checkoutItems.length === 0 ? (
              <p className="opacity-50">No items in cart.</p>
            ) : (
              checkoutItems
            )}
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between">
              <p className="uppercase opacity-50">Total</p>
              <p className="text-lg font-bold">{subTotal}</p>
            </div>

            <div className="flex gap-2">
              <Button link path="/cart" variant="secondary" className="grow">
                Cart
              </Button>
              <Button link path="/checkout" className="grow">
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
