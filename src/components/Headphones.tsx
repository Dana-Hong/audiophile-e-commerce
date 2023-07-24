import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";
import InfoSection from "./Info-Section";
import Categories from "./Categories";

// assets
import MobileXX99MK2 from "../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";
import TabletXX99MK2 from "../assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import DesktopXX99MK2 from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";

import MobileXX99MK1 from "../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";
import TabletXX99MK1 from "../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import DesktopXX99MK1 from "../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";

import MobileXX59 from "../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg";
import TabletXX59 from "../assets/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import DesktopXX59 from "../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";

export default function Headphones() {
  return (
    <>
      <Header />
      <main>
        <h1 className="w-full bg-black py-8 text-center text-[40px] font-bold uppercase leading-[44px] tracking-normal text-white">
          Headphones
        </h1>
        {/* detailed product preview */}
        <section className="mx-auto mb-40 mt-16 w-full max-w-[1110px]">
          <div className="mx-6 flex flex-col items-center gap-14 min-[1110px]:mx-0 min-[1150px]:flex-row">
            <div className="flex flex-col items-center gap-6 text-center md:gap-4 min-[1110px]:basis-1/2 min-[1110px]:items-start min-[1110px]:text-left">
              <h3 className="text-sm uppercase text-orange">New Product</h3>
              <h2 className="max-w-xs text-3xl font-bold uppercase md:pb-4">
                XX99 Mark II Headphones
              </h2>
              <p className="max-w-xl text-[15px] opacity-50 md:pb-4 min-[1110px]:max-w-[445px]">
                The new XX99 Mark II headphones is the pinnacle of pristine
                audio. It redefines your premium headphone experience by
                reproducing the balanced depth and precision of studio-quality
                sound.
              </p>
              <Button>See Product</Button>
            </div>
            <picture className="order-first min-[1110px]:basis-1/2">
              <source media="(min-width: 1110px)" srcSet={DesktopXX99MK2} />
              <source media="(min-width: 700px)" srcSet={TabletXX99MK2} />
              <img
                src={MobileXX99MK2}
                alt="XX99 Mark II Headphones"
                className="w-full rounded-lg md:max-w-2xl"
              />
            </picture>
          </div>
        </section>
        <section className="mx-auto mb-40 w-full max-w-[1110px]">
          <div className="mx-6 flex flex-col items-center gap-14 min-[1110px]:mx-0 min-[1150px]:flex-row">
            <div className="flex flex-col items-center gap-6 text-center md:gap-4 min-[1110px]:basis-1/2 min-[1110px]:items-start min-[1110px]:text-left">
              <h2 className="max-w-xs text-3xl font-bold uppercase md:pb-4">
                XX99 Mark I Headphones
              </h2>
              <p className="max-w-xl text-[15px] opacity-50 md:pb-4 min-[1110px]:max-w-[445px]">
                As the gold standard for headphones, the classic XX99 Mark I
                offers detailed and accurate audio reproduction for audiophiles,
                mixing engineers, and music aficionados alike in studios and on
                the go.
              </p>
              <Button>See Product</Button>
            </div>
            <picture className="min-[1110px]:basis-1/2">
              <source media="(min-width: 1110px)" srcSet={DesktopXX99MK1} />
              <source media="(min-width: 700px)" srcSet={TabletXX99MK1} />
              <img
                src={MobileXX99MK1}
                alt="XX99 Mark II Headphones"
                className="w-full rounded-lg md:max-w-2xl"
              />
            </picture>
          </div>
        </section>
        <section className="mx-auto mb-40 w-full max-w-[1110px]">
          <div className="mx-6 flex flex-col items-center gap-14 min-[1110px]:mx-0 min-[1150px]:flex-row">
            <div className="flex flex-col items-center gap-6 text-center md:gap-4 min-[1110px]:basis-1/2 min-[1110px]:items-start min-[1110px]:text-left">
              <h2 className="max-w-xs text-3xl font-bold uppercase md:pb-4">
                XX59 Headphones
              </h2>
              <p className="max-w-xl text-[15px] opacity-50 md:pb-4 min-[1110px]:max-w-[445px]">
                Enjoy your audio almost anywhere and customize it to your
                specific tastes with the XX59 headphones. The stylish yet
                durable versatile wireless headset is a brilliant companion at
                home or on the move.
              </p>
              <Button>See Product</Button>
            </div>
            <picture className="order-first min-[1110px]:basis-1/2">
              <source media="(min-width: 1110px)" srcSet={DesktopXX59} />
              <source media="(min-width: 700px)" srcSet={TabletXX59} />
              <img
                src={MobileXX59}
                alt="XX99 Mark II Headphones"
                className="w-full rounded-lg md:max-w-2xl"
              />
            </picture>
          </div>
        </section>

        <Categories />
        <InfoSection />
      </main>
      <Footer />
    </>
  );
}
