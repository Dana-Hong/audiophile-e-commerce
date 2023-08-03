import useModalContext from "../hooks/useModalContext";
import Categories from "../components/Categories";
import InfoSection from "../components/Info-Section";
import DesktopZX9Speaker from "../assets/home/desktop/image-speaker-zx9.png";
import TabletZX9Speaker from "../assets/home/tablet/image-speaker-zx9.png";
import MobileZX9Speaker from "../assets/home/mobile/image-speaker-zx9.png";
import Button from "../components/ui/Button";

export default function Index() {
  const { modal } = useModalContext();
  return (
    <main className={`${modal.cart || modal.orderConfirm ? "pt-[85px]" : ""}`}>
      <section className="mx-auto max-w-[1440px] bg-hero-mobile bg-cover bg-bottom bg-no-repeat text-center text-white min-[400px]:bg-hero-tablet min-[1110px]:bg-hero-desktop min-[1110px]:text-left">
        <div className="mx-auto w-full max-w-[1110px] py-28 min-[400px]:py-32">
          <div className="flex flex-col items-center gap-4 min-[1110px]:items-start">
            <h2 className="text-sm uppercase tracking-[10px] opacity-50">New Product</h2>
            <h1 className="z-10 text-4xl font-bold md:max-w-md md:text-[56px] md:leading-[58px] md:tracking-[2px]">
              XX99 MARK II HEADPHONES
            </h1>
            <p className="max-w-[350px] pt-2 pb-3 text-[15px] font-medium leading-6 opacity-75">
              Experience natural, lifelike audio and exceptional build quality made for the
              passionate music enthusiast.
            </p>
            <Button link path="/headphones/xx99-mark-two-headphones" className="z-10">
              See product
            </Button>
          </div>
        </div>
      </section>
      <Categories />
      <section className="mx-auto flex w-full max-w-[1110px] flex-col gap-10 px-6 pb-[9.375rem] text-white md:px-10 min-[1150px]:px-0">
        <div className="flex w-full flex-col items-center justify-center rounded-lg bg-orange bg-pattern-circles bg-bottom bg-no-repeat py-14 min-[1110px]:flex-row min-[1110px]:bg-left-top">
          <div className="flex grow basis-1/2 flex-col items-center gap-6 text-center min-[1110px]:max-w-[450px] min-[1110px]:items-start min-[1110px]:text-left">
            <h2 className="w-min text-4xl font-bold leading-10 text-white lg:text-[3.5rem] lg:leading-[3.5rem]">
              ZX9 SPEAKER
            </h2>
            <p className="max-w-[280px] text-[15px] font-medium leading-6 opacity-75 md:max-w-[350px]">
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable
              sound.
            </p>
            <Button link path="/speakers/zx9-speaker" variant="secondary">
              See Product
            </Button>
          </div>
          <div className="order-first grow basis-1/2">
            <picture>
              <source media="(min-width: 1110px)" srcSet={DesktopZX9Speaker} />
              <source media="(min-width: 768px)" srcSet={TabletZX9Speaker} />
              <img
                className="order-first scale-75 lg:max-w-sm min-[1110px]:translate-x-24 min-[1110px]:translate-y-12 min-[1110px]:scale-100"
                src={MobileZX9Speaker}
                alt="zx9 speaker"
              />
            </picture>
          </div>
        </div>

        <div className="relative w-full">
          <div className="absolute top-1/2 left-4 flex -translate-y-1/2 flex-col gap-8 text-black md:left-16 lg:left-32">
            <h3 className="text-[1.75rem] font-bold leading-10 tracking-[2px]">ZX7 SPEAKER</h3>
            <Button link path="/speakers/zx7-speaker" variant="secondary">
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
            <h3 className="text-[1.75rem] font-bold leading-10 tracking-[2px]">YX1 EARPHONES</h3>
            <Button link path="earphones/yx1-earphones" variant="secondary">
              See Product
            </Button>
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
