import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";
import InfoSection from "./Info-Section";
import Categories from "./Categories";

// assets
import MobileYX1 from "../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg";
import TabletYX1 from "../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg";
import DesktopYX1 from "../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";

export default function Earphones() {
  return (
    <>
      <Header />
      <main>
        <h1 className="mx-auto w-full max-w-[1440px] bg-black py-8 text-center text-[40px] font-bold uppercase leading-[44px] tracking-normal text-white">
          Earphones
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
                The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your
                premium headphone experience by reproducing the balanced depth and precision of
                studio-quality sound.
              </p>
              <Button>See Product</Button>
            </div>
            <picture className="order-first min-[1110px]:basis-1/2">
              <source media="(min-width: 1110px)" srcSet={DesktopYX1} />
              <source media="(min-width: 700px)" srcSet={TabletYX1} />
              <img
                src={MobileYX1}
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
