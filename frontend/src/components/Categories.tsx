import RightArrow from "./icons/RightArrow";
import { Link } from "react-router-dom";
import Earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import Headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import Speakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import Button from "./ui/Button";

export default function Categories() {
  return (
    <section className="mx-auto mt-12 mb-[9.375rem] flex w-full max-w-[1110px] flex-col items-center justify-evenly gap-4 px-6 text-center text-[15px] font-bold uppercase md:flex-row md:px-10 min-[1150px]:px-0">
      <Link
        to="/headphones"
        className={`group relative flex w-full max-w-[327px] cursor-pointer flex-col gap-4 pt-[52px] text-center font-bold md:max-w-[223px] md:pt-20 min-[1110px]:max-w-[350px]`}
      >
        <div className="flex w-full flex-col items-center rounded-lg bg-gray pb-2 pt-[88px] min-[1110px]:pt-[116px]">
          <span className="block text-[15px] tracking-[1px] transition-transform group-hover:scale-105">
            Headphones
          </span>
          <div className="flex items-center justify-center gap-[14px]">
            <Button variant="tertiary">
              <span className="tracking-[1px] opacity-50 transition-transform group-hover:scale-105 group-hover:text-orange group-hover:opacity-100">
                Shop
              </span>
              <RightArrow className="ml-2" />
            </Button>
          </div>
        </div>
        <img
          src={Headphones}
          alt="Headphones"
          className="absolute top-0 order-first -translate-y-1/4 scale-50 transition-transform md:translate-y-1 md:scale-75 md:group-hover:scale-[80%] min-[1110px]:-translate-y-16"
        />
      </Link>
      <Link
        to="/speakers"
        className="group relative flex w-full max-w-[327px] cursor-pointer flex-col gap-4 pt-[52px] text-center font-bold md:max-w-[223px] md:pt-20 min-[1110px]:max-w-[350px]"
      >
        <div className="flex w-full flex-col items-center rounded-lg bg-gray pb-2 pt-[88px] min-[1110px]:pt-[116px]">
          <span className="block text-[15px] tracking-[1px] transition-transform group-hover:scale-105">
            Speakers
          </span>
          <div className="flex items-center justify-center gap-[14px]">
            <Button variant="tertiary">
              <span className="tracking-[1px] opacity-50 transition-transform group-hover:scale-105 group-hover:text-orange group-hover:opacity-100">
                Shop
              </span>
              <RightArrow className="ml-2" />
            </Button>
          </div>
        </div>
        <img
          src={Speakers}
          alt="Speakers"
          className="absolute top-0 order-first -translate-y-1/4 scale-50 transition-transform md:translate-y-1 md:scale-75 md:group-hover:scale-[80%] min-[1110px]:-translate-y-16"
        />
      </Link>
      <Link
        to="/earphones"
        className="group relative flex w-full max-w-[327px] cursor-pointer flex-col gap-4 pt-[52px] text-center font-bold md:max-w-[223px] md:pt-20 min-[1110px]:max-w-[350px]"
      >
        <div className="flex w-full flex-col items-center rounded-lg bg-gray pb-2 pt-[88px] min-[1110px]:pt-[116px]">
          <span className="block text-[15px] tracking-[1px] transition-transform group-hover:scale-105">
            Earphones
          </span>
          <div className="flex items-center justify-center gap-[14px]">
            <Button variant="tertiary">
              <span className="tracking-[1px] opacity-50 transition-transform group-hover:scale-105 group-hover:text-orange group-hover:opacity-100">
                Shop
              </span>
              <RightArrow className="ml-2" />
            </Button>
          </div>
        </div>
        <img
          src={Earphones}
          alt="Earphone"
          className="absolute top-0 order-first -translate-y-1/4 scale-50 transition-transform md:translate-y-1 md:scale-75 md:group-hover:scale-[80%] min-[1110px]:-translate-y-16"
        />
      </Link>
    </section>
  );
}
