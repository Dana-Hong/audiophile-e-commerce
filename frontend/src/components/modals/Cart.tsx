// libraries
import { Link } from "react-router-dom";

// hooks
import useCartContext from "../../hooks/useCartContext";
import useModalContext from "../../hooks/useModalContext";
import useAuthContext from "../../hooks/useAuthContext";

// components
import Button from "../ui/Button";

// icons
import Trash from "../icons/Trash";

// utils
import { API_BASE_URL, formatPrice, getSubTotal } from "../../utils/utils";

export default function Cart() {
  const { user } = useAuthContext();
  const { setModal } = useModalContext();
  const { cart, setCart } = useCartContext();

  const checkoutItems = cart.items.map((item) => {
    const { name, slug, category, shortname, image, price, quantity } = item;
    const formattedPrice = formatPrice(price);
    return (
      <div key={name} className="flex items-center gap-4">
        <Link className="font-bold hover:underline" to={`./${category}/${slug}`}>
          <img src={image} alt="" className="h-16 w-16 rounded-lg" />
        </Link>
        <div className="flex grow flex-col">
          <div className="flex justify-between">
            <Link className="font-bold hover:underline" to={`./${category}/${slug}`}>
              {shortname}
            </Link>
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

  const subTotal = formatPrice(getSubTotal(cart));

  async function handleTrashClick(name: string) {
    const updatedCart = { ...cart, items: cart.items.filter((item) => item.name !== name) };
    if (user.email !== "") {
      const cartRequest = await fetch(`${API_BASE_URL}/api/cart/${cart.user_id}`, {
        method: "PATCH",
        body: JSON.stringify({ items: updatedCart.items, user_id: cart.user_id }),
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-type": "application/json",
        },
      });

      const cartData = await cartRequest.json();
      if (cartRequest.ok) {
        console.log(cartData);
      }
      if (!cartRequest.ok) {
        console.log(cartData);
      }
    }
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  }

  function handleBackgroundClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    setModal({ cart: false, orderConfirm: false });
  }

  function handleModalClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
  }

  function handleCheckout() {
    setModal({ cart: false, orderConfirm: false });
  }

  async function handleRemoveAll() {
    const updatedCart = { ...cart, items: [] };
    if (user.email !== "") {
      const cartRequest = await fetch(`${API_BASE_URL}/api/cart/${cart.user_id}`, {
        method: "PATCH",
        body: JSON.stringify({ items: updatedCart.items, user_id: cart.user_id }),
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-type": "application/json",
        },
      });

      const cartData = await cartRequest.json();
      if (cartRequest.ok) {
        console.log(cartData);
      }
      if (!cartRequest.ok) {
        console.log(cartData);
      }
    }
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  }

  return (
    <div
      onClick={handleBackgroundClick}
      className="fixed z-30 min-h-screen w-full bg-zinc-900 bg-opacity-60 pt-6 md:pt-8"
    >
      <div className="mx-auto flex w-full max-w-[1110px] justify-center px-4 min-[425px]:justify-end min-[425px]:px-0">
        <div
          onClick={(e) => handleModalClick(e)}
          className="flex max-w-sm flex-col gap-8 rounded-lg bg-white px-7 py-8 min-[425px]:mr-[calc(5%)]"
        >
          <div className="flex justify-between">
            <p className="text-lg font-bold uppercase">Cart {`(${cart.items.length})`}</p>
            <button onClick={handleRemoveAll} className="underline opacity-50">
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
              <Button onClick={() => handleCheckout} link path="/checkout" className="grow">
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
