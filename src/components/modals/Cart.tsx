// libraries
import { useContext } from "react";

// hooks and context
import useCartContext from "../../hooks/useCartContext";
import { CheckoutContext } from "../../context/CheckoutContext";

// components
import Button from "../ui/Button";

// icons
import Trash from "../icons/Trash";

// utils
import { formatPrice } from "../../utils/utils";

export default function Cart() {
  const { setCartModal } = useCartContext();
  const { checkout, setCheckout } = useContext(CheckoutContext);

  const checkoutItems = checkout.map((item) => {
    const { name, shortname, image, price, quantity } = item;
    const formattedPrice = formatPrice(price);
    return (
      <div key={name} className="flex items-center gap-4">
        <img src={image} alt="" className="h-16 w-16 rounded-lg" />
        <div className="flex grow flex-col">
          <div className="flex justify-between">
            <p className="font-bold">{shortname}</p>
            <p className="opacity-50">x{quantity}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm opacity-50">{formattedPrice}</p>
            <div onClick={() => handleTrashClick(name)}>
              <Trash className="h-5 w-5 cursor-pointer hover:fill-orange" />
            </div>
          </div>
        </div>
      </div>
    );
  });

  const subTotal = formatPrice(
    checkout.reduce((acc, curr) => (acc + curr.price) * curr.quantity, 0)
  );

  function handleTrashClick(name: string) {
    setCheckout((c) => c.filter((item) => item.name !== name));
  }

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    setCartModal(false);
  }

  function handleModalClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
  }

  return (
    <div
      onClick={(e) => handleClick(e)}
      className="fixed z-30 min-h-screen w-full bg-zinc-900 bg-opacity-60 pt-6 md:pt-8"
    >
      <div className="mx-auto flex w-full max-w-[1110px] justify-center px-4 min-[425px]:justify-end min-[425px]:px-0">
        <div
          onClick={(e) => handleModalClick(e)}
          className="flex max-w-sm flex-col gap-8 rounded-lg bg-white px-7 py-8 min-[425px]:mr-[calc(5%)]"
        >
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
              <Button link path="/" variant="secondary" className="grow">
                Home
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
