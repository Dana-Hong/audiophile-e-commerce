import { useEffect, useState, useContext } from "react";
import useModalContext from "../hooks/useModalContext";
import { AuthContext } from "../context/AuthContext";
import Categories from "../components/Categories";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import { API_BASE_URL, formatPrice } from "../utils/utils";
import { CheckoutItem } from "./root";

type Order = {
  _id: string;
  items: CheckoutItem[];
  price: number;
  createdAt: string;
};

export default function Orders() {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState<Order[]>([]);
  const { modal } = useModalContext();

  const orderList =
    orders.length !== 0 &&
    orders.map((orders) => {
      const { price, items, _id } = orders;
      const itemList = items.map((item: CheckoutItem) => {
        const { shortname, image, price, category, name, quantity, slug } = item;
        const formattedPrice = formatPrice(price);
        return (
          <div key={name} className="flex items-center gap-4">
            <Link className="font-bold hover:underline" to={`../${category}/${slug}`}>
              <img src={image} alt="" className="h-16 w-16 rounded-lg" />
            </Link>
            <div className="flex grow flex-col">
              <div className="flex justify-between">
                <Link className="font-bold hover:underline" to={`../${category}/${slug}`}>
                  {shortname}
                </Link>
                <p className="opacity-50">x{quantity}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm opacity-50">{formattedPrice}</p>
              </div>
            </div>
          </div>
        );
      });

      const orderQuantity = items.reduce((acc, curr) => acc + curr.quantity, 0);

      return (
        <div
          key={_id}
          className="flex w-full max-w-[1150px] flex-col gap-8 rounded-lg bg-white px-7 py-8"
        >
          <div className="flex flex-col gap-2">
            <p className="truncate text-sm text-orange">Order number:{` ${_id}`}</p>
            <p className="text-lg font-bold uppercase">Items in Order: {`(${orderQuantity})`}</p>
          </div>
          <div className="flex flex-col gap-6">{itemList}</div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between">
              <p className="uppercase opacity-50">Total</p>
              <p className="text-lg font-bold">{formatPrice(price)}</p>
            </div>
          </div>
        </div>
      );
    });

  useEffect(() => {
    (async () => {
      const response = await fetch(`${API_BASE_URL}/api/orders/`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        console.log(data.error);
      }
      if (response.ok) {
        localStorage.setItem("orders", JSON.stringify(data));
        setOrders(data);
      }
    })();
  }, []);

  return (
    <main
      className={`${
        modal.cart || modal.orderConfirm ? "pt-[85px]" : ""
      } relative gap-8 bg-gray px-6 md:gap-20 md:px-10 min-[1150px]:gap-32 min-[1150px]:px-0`}
    >
      <div className="mx-auto flex min-h-[calc(100vh-85px-657px)] max-w-[1150px] flex-col items-center justify-center gap-8 pt-4 pb-24 md:min-[1110px]:min-h-[calc(100vh-85px-425px)] min-[1110px]:min-h-[calc(100vh-85px-388px)] min-[1110px]:items-start">
        <Link
          to="/"
          className="mx-auto block w-full self-start bg-gray pb-6 text-[15px] font-medium text-opacity-50 opacity-50 hover:text-orange hover:opacity-100 min-[1110px]:ml-4"
        >
          Go Back
        </Link>
        {orders && orders.length === 0 ? (
          <div className="w-full rounded-lg bg-white">
            <div className="flex flex-col items-center justify-center gap-4 px-6 pt-6 md:flex-row">
              <p className="text-lg font-medium">You have no orders.</p>
              <Button link path="/">
                Home
              </Button>
            </div>
            <Categories />
          </div>
        ) : (
          <>{orders.length !== 0 && orderList}</>
        )}
      </div>
    </main>
  );
}
