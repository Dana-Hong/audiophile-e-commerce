import Button from "./Button";
import xx99mkiiThumb from "../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";

export default function Cart() {
  return (
    <div className="absolute z-20 min-h-screen w-full pt-6 md:pt-8">
      <div className="ml-auto flex max-w-sm flex-col gap-8 rounded-lg bg-white px-7 py-8">
        <div className="flex justify-between">
          <p className="text-lg font-bold uppercase">Cart (3)</p>
          <button className="underline opacity-50">Remove all</button>
        </div>
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
        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <p className="uppercase opacity-50">Total</p>
            <p className="text-lg font-bold">$ 5,396</p>
          </div>

          <Button link path="./checkout" className="self-center">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
