import { Link } from "react-router-dom";
import OrderConfirmation from "../icons/OrderConfirmation";
import xx99mkiiThumb from "../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";

export default function OrderConfirmModal() {
  return (
    <div className="absolute z-10 bg-black bg-opacity-70 px-6">
      <div className="mx-auto w-full max-w-[540px] rounded-lg bg-white p-8">
        <OrderConfirmation />
        <p className="mt-8 text-2xl font-bold uppercase">Thank you for your order</p>
        <p className="mt-6 opacity-50">You will receive an email confirmation shortly.</p>
        <div className="mt-8 flex flex-col min-[500px]:flex-row">
          <div className="flex grow flex-col gap-4 rounded-t-lg bg-gray px-4 py-6 text-xs min-[500px]:rounded-l-lg min-[500px]:rounded-r-none min-[500px]:text-sm">
            <div className="flex items-center">
              <div className="grow font-bold">
                <div className="flex justify-between">
                  <p className="uppercase text-black">xx99 mk ii</p>
                  <p className="opacity-50">x1</p>
                </div>
                <p className="opacity-50">2,999</p>
              </div>
              <img
                src={xx99mkiiThumb}
                alt="headphones thumbnail"
                className="order-first h-12 w-12"
              />
            </div>
            <p className="border-t border-t-zinc-300 pt-4 text-center text-xs">
              and 2 other item(s)
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 rounded-b-lg bg-almostBlack px-4 pt-4 pb-5 text-white min-[500px]:rounded-l-none min-[500px]:rounded-r-lg">
            <p className="uppercase opacity-50">grand total</p>
            <p className="text-lg">$ 5, 446</p>
          </div>
        </div>
        <Link to="../" className="mt-12">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
