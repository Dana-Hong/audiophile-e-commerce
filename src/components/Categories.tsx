import Earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import Headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import Speakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import Button from "./Button";

export default function Categories() {
  return (
    <section className="mx-auto mt-12 mb-[9.375rem] flex w-full max-w-[1110px] flex-col items-center justify-evenly gap-4 px-6 text-center text-[15px] font-bold uppercase md:flex-row md:px-10 min-[1150px]:px-0">
      <div
        className={`relative flex w-full max-w-[327px] flex-col gap-4 pt-[52px] text-center font-bold md:max-w-[223px] md:pt-20 min-[1110px]:max-w-[350px]`}
      >
        <div className="flex w-full flex-col items-center rounded-lg bg-gray pb-2 pt-[88px] min-[1110px]:pt-[116px]">
          <span className="block text-[15px] tracking-[1px]">Headphones</span>
          <div className="flex items-center justify-center gap-[14px]">
            <Button variant="tertiary">
              <span className="tracking-[1px] opacity-50">Shop</span>
            </Button>
          </div>
        </div>
        <img
          src={Headphones}
          alt="Headphones"
          className="absolute top-0 order-first -translate-y-1/4 scale-50 md:translate-y-1 md:scale-75 min-[1110px]:-translate-y-16"
        />
      </div>
      <div
        className={`relative flex w-full max-w-[327px] flex-col gap-4 pt-[52px] text-center font-bold md:max-w-[223px] md:pt-20 min-[1110px]:max-w-[350px]`}
      >
        <div className="flex w-full flex-col items-center rounded-lg bg-gray pb-2 pt-[88px] min-[1110px]:pt-[116px]">
          <span className="block text-[15px] tracking-[1px]">Speakers</span>
          <div className="flex items-center justify-center gap-[14px]">
            <Button variant="tertiary">
              <span className="tracking-[1px] opacity-50">Shop</span>
            </Button>
          </div>
        </div>
        <img
          src={Speakers}
          alt="Speakers"
          className="absolute top-0 order-first -translate-y-1/4 scale-50 md:translate-y-1 md:scale-75 min-[1110px]:-translate-y-16"
        />
      </div>
      <div
        className={`relative flex w-full max-w-[327px] flex-col gap-4 pt-[52px] text-center font-bold md:max-w-[223px] md:pt-20 min-[1110px]:max-w-[350px]`}
      >
        <div className="flex w-full flex-col items-center rounded-lg bg-gray pb-2 pt-[88px] min-[1110px]:pt-[116px]">
          <span className="block text-[15px] tracking-[1px]">Earphones</span>
          <div className="flex items-center justify-center gap-[14px]">
            <Button variant="tertiary">
              <span className="tracking-[1px] opacity-50">Shop</span>
            </Button>
          </div>
        </div>
        <img
          src={Earphones}
          alt="Earphone"
          className="absolute top-0 order-first -translate-y-1/4 scale-50 md:translate-y-1 md:scale-75 min-[1110px]:-translate-y-16"
        />
      </div>
    </section>
  );
}
