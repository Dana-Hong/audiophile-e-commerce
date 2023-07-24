import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";
import InfoSection from "./Info-Section";
import Categories from "./Categories";

// assets
import Mobilezx7 from "../assets/product-zx7-speaker/mobile/image-category-page-preview.jpg";
import Tabletzx7 from "../assets/product-zx7-speaker/tablet/image-category-page-preview.jpg";
import Desktopzx7 from "../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";

import Mobilezx9 from "../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg";
import Tabletzx9 from "../assets/product-zx9-speaker/tablet/image-category-page-preview.jpg";
import Desktopzx9 from "../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";

export default function Speakers() {
  return (
    <>
      <Header />
      <main>
        <h1 className="w-full bg-black py-8 text-center text-[40px] font-bold uppercase leading-[44px] tracking-normal text-white">
          Speakers
        </h1>
        {/* detailed product preview */}
        <section className="mx-auto mb-40 mt-16 w-full max-w-[1110px]">
          <div className="mx-6 flex flex-col items-center gap-14 min-[1110px]:mx-0 min-[1150px]:flex-row">
            <div className="flex flex-col items-center gap-6 text-center md:gap-4 min-[1110px]:basis-1/2 min-[1110px]:items-start min-[1110px]:text-left">
              <h3 className="text-sm uppercase text-orange">New Product</h3>
              <h2 className="max-w-xs text-3xl font-bold uppercase md:pb-4">
                ZX9 speaker
              </h2>
              <p className="max-w-xl text-[15px] opacity-50 md:pb-4 min-[1110px]:max-w-[445px]">
                Upgrade your sound system with the all new ZX9 active speaker.
                It&apos;s a bookshelf speaker system that offers truly wireless
                connectivity -- creating new possibilities for more pleasing and
                practical audio setups.
              </p>
              <Button>See Product</Button>
            </div>
            <picture className="order-first min-[1110px]:basis-1/2">
              <source media="(min-width: 1110px)" srcSet={Desktopzx9} />
              <source media="(min-width: 700px)" srcSet={Tabletzx9} />
              <img
                src={Mobilezx9}
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
                ZX7 SPEAKER
              </h2>
              <p className="max-w-xl text-[15px] opacity-50 md:pb-4 min-[1110px]:max-w-[445px]">
                Stream high quality sound wirelessly with minimal loss. The ZX7
                bookshelf speaker uses high-end audiophile components that
                represents the top of the line powered speakers for home or
                studio use.
              </p>
              <Button>See Product</Button>
            </div>
            <picture className="min-[1110px]:basis-1/2">
              <source media="(min-width: 1110px)" srcSet={Desktopzx7} />
              <source media="(min-width: 700px)" srcSet={Tabletzx7} />
              <img
                src={Mobilezx7}
                alt=""
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
