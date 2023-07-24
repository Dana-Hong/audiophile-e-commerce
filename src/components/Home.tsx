import Hero from "./Hero";
import Categories from "./Categories";
import InfoSection from "./Info-Section";
import DesktopZX9Speaker from "../assets/home/desktop/image-speaker-zx9.png";
import TabletZX9Speaker from "../assets/home/tablet/image-speaker-zx9.png";
import MobileZX9Speaker from "../assets/home/mobile/image-speaker-zx9.png";
import DesktopZX7Speaker from "../assets/home/desktop/image-speaker-zx7.jpg";
import TabletZX7Speaker from "../assets/home/tablet/image-speaker-zx7.jpg";
import MobileZX7Speaker from "../assets/home/mobile/image-speaker-zx7.jpg";

import Button from "./Button";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Categories />
      <section className="mx-auto flex w-full max-w-[1110px] flex-col gap-10 px-6 pb-[9.375rem] text-white md:px-10 min-[1150px]:px-0">
        <div className="flex w-full flex-col items-center justify-center rounded-lg bg-orange bg-pattern-circles bg-bottom bg-no-repeat py-14 min-[1110px]:flex-row min-[1110px]:bg-left-bottom min-[1110px]:bg-left">
          <div className="mt-8 flex max-w-[350px] grow flex-col items-center gap-6 text-center min-[1110px]:items-start min-[1110px]:text-left">
            <h2 className="w-min text-4xl font-bold leading-10 text-white lg:text-[3.5rem] lg:leading-[3.5rem]">
              ZX9 SPEAKER
            </h2>
            <p className="text-[15px] font-medium leading-6 opacity-75">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button
              variant="secondary"
              className="bg-black font-bold tracking-[1px] text-white"
            >
              See Product
            </Button>
          </div>
          <picture className="order-first scale-75">
            <source
              media="(min-width: 1110px)"
              srcSet={DesktopZX9Speaker}
              sizes=""
            />
            <source
              media="(min-width: 768px)"
              srcSet={TabletZX9Speaker}
              sizes=""
            />
            <img src={MobileZX9Speaker} alt="zx9 speaker" />
          </picture>
        </div>

        <div className="relative w-full">
          <div className="absolute top-1/2 left-4 flex -translate-y-1/2 flex-col gap-8 text-black md:left-16 lg:left-32">
            <h3 className="text-[1.75rem] font-bold leading-10 tracking-[2px]">
              ZX7 SPEAKER
            </h3>
            <Button
              variant="secondary"
              className="bg-black font-bold tracking-[1px]"
            >
              See Product
            </Button>
          </div>
          <picture className="top-0 order-first w-full">
            <source
              media="(min-width: 769px)"
              srcSet="../assets/home/desktop/image-speaker-zx7.jpg"
              sizes=""
            />
            <source
              media="(min-width: 700px)"
              srcSet="../assets/home/tablet/image-speaker-zx7.jpg"
              sizes=""
            />
            <img
              src="../assets/home/mobile/image-speaker-zx7.jpg"
              alt=""
              className="top-0 rounded-lg"
            />
          </picture>
        </div>

        <div className="flex flex-col gap-6 min-[700px]:flex-row">
          <div className="flex w-full basis-1/2 flex-col justify-center gap-8 rounded-lg bg-gray py-10 pl-6 text-black lg:pl-24">
            <h3 className="text-[1.75rem] font-bold leading-10 tracking-[2px]">
              YX1 EARPHONES
            </h3>
            <button className="w-[160px] max-w-[160px] border-2 py-4 text-center text-[13px] font-bold uppercase tracking-[1px]">
              See product
            </button>
          </div>
          <picture className="order-first basis-1/2 ">
            <source
              media="(min-width: 1110px)"
              srcSet="../assets/home/desktop/image-earphones-yx1.jpg"
              sizes=""
            />
            <source
              media="(min-width: 700px)"
              srcSet="../assets/home/tablet/image-earphones-yx1.jpg"
              sizes=""
            />
            <img
              src="../assets/home/mobile/image-earphones-yx1.jpg"
              alt=""
              className="h-full basis-1/2 rounded-lg"
            />
          </picture>
        </div>
      </section>
      <InfoSection />
    </main>
  );
}