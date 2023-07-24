import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";
import Numbers from "./inputs/Numbers";
import Categories from "./Categories";
import InfoSection from "./Info-Section";

import Mobilexx99mk2 from "../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import Tabletxx99mk2 from "../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg";
import Desktopxx99mk2 from "../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";

import MobileGallery1 from "../assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg";
import MobileGallery2 from "../assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg";
import MobileGallery3 from "../assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg";

import TabletGallery1 from "../assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg";
import TabletGallery2 from "../assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg";
import TabletGallery3 from "../assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg";

import DesktopGallery1 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import DesktopGallery2 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import DesktopGallery3 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";

import Mobilexx99mk1 from "../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import Tabletxx99mk1 from "../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";
import Desktopxx99mk1 from "../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";

import Mobilexx59 from "../assets/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import Tabletxx59 from "../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg";
import Desktopxx59 from "../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";

import Mobilezx7 from "../assets/product-zx7-speaker/tablet/image-category-page-preview.jpg";
import Tabletzx7 from "../assets/product-zx7-speaker/mobile/image-category-page-preview.jpg";
import Desktopzx7 from "../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";

type ProductPageProps = {};

export default function ProductPage() {
  return (
    <>
      <Header />
      <a
        href="/"
        className="mx-auto mb-14 mt-20 block max-w-[1150px] px-6 text-[15px] font-medium text-opacity-50 hover:text-orange md:px-10 min-[1150px]:px-0"
      >
        Go Back
      </a>
      <section className="mx-auto mb-[90px] flex max-w-[1150px] flex-col items-center gap-8 px-6 md:flex-row md:gap-20 md:px-10 min-[1150px]:gap-32 min-[1150px]:px-0">
        <div className="flex flex-col items-center gap-6 text-center md:gap-4 min-[1110px]:basis-1/2 min-[1110px]:items-start min-[1110px]:text-left">
          <h3 className="text-sm uppercase text-orange">New Product</h3>
          <h2 className="max-w-xs text-3xl font-bold uppercase md:pb-4">
            XX99 Mark II Headphones
          </h2>
          <p className="w-full max-w-xl text-[15px] opacity-50 md:pb-4">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <p className="text-lg font-bold uppercase tracking-[1.3px]">$2,999</p>
          <div className="flex gap-4">
            <Numbers />
            <Button>Add to Cart</Button>
          </div>
        </div>

        <picture className="order-first">
          <source media="(min-width: 1110px)" src={Desktopxx99mk2} />
          <source media="(min-width: 768px)" srcSet={Tabletxx99mk2} />
          <img
            src={Mobilexx99mk2}
            className="rounded-md"
            alt="xx99 mark II headphones"
          />
        </picture>
      </section>
      <section className="mx-auto mb-[90px] flex max-w-[1150px] flex-col items-center gap-8 px-6 md:flex-row md:gap-20 md:px-10 min-[1110px]:items-start min-[1150px]:gap-32 min-[1150px]:px-0">
        <div className="flex flex-col gap-6 md:basis-[60%]">
          <h2 className="text-2xl font-bold uppercase">Features</h2>
          <div className="flex flex-col gap-6 opacity-50 md:max-w-3xl">
            <p>
              Featuring a genuine leather head strap and premium earcups, these
              headphones deliver superior comfort for those who like to enjoy
              endless listening. It includes intuitive controls designed for any
              situation. Whether you&apos;re taking a business call or just in
              your own personal space, the auto on/off and pause features ensure
              that you&apos;ll never miss a beat.
            </p>
            <p>
              Featuring a genuine leather head strap and premium earcups, these
              headphones deliver superior comfort for those who like to enjoy
              endless listening. It includes intuitive controls designed for any
              situation. Whether you&apos;re taking a business call or just in
              your own personal space, the auto on/off and pause features ensure
              that you&apos;ll never miss a beat. The advanced Active Noise
              Cancellation with built-in equalizer allow you to experience your
              audio world on your terms. It lets you enjoy your audio in peace,
              but quickly interact with your surroundings when you need to.
              Combined with Bluetooth 5. 0 compliant connectivity and 17 hour
              battery life, the XX99 Mark II headphones gives you superior
              sound, cutting-edge technology, and a modern design aesthetic.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:basis-[40%]">
          <h2 className="text-2xl font-bold uppercase">In the box</h2>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-6">
              <div className="font-bold text-orange">1x</div>
              <div className="opacity-50">Headphone Unit</div>
            </li>
            <li className="flex gap-6">
              <div className="font-bold text-orange">2x</div>
              <div className="opacity-50">Replacement Earcups</div>
            </li>
            <li className="flex gap-6">
              <div className="font-bold text-orange">1x</div>
              <div className="opacity-50">User Manual</div>
            </li>
            <li className="flex gap-6">
              <div className="font-bold text-orange">1x</div>
              <div className="opacity-50">3.5mm 5m Audio Cable</div>
            </li>
            <li className="flex gap-6">
              <div className="font-bold text-orange">1x</div>
              <div className="opacity-50">Travel Bag</div>
            </li>
          </ul>
        </div>
      </section>
      <section className="mx-auto mb-[90px] flex max-w-[1150px] flex-col items-center justify-center gap-6 px-6 md:flex-row md:px-10 min-[1150px]:px-0">
        <div className="flex flex-col gap-6">
          <picture>
            <source srcSet={DesktopGallery1} media="(min-width: 1110px)" />
            <source srcSet={TabletGallery1} media="(min-width: 768px)" />
            <img src={MobileGallery1} alt="" className="rounded-lg" />
          </picture>
          <picture>
            <source srcSet={DesktopGallery2} media="(min-width: 1110px)" />
            <source srcSet={TabletGallery2} media="(min-width: 768px)" />
            <img src={MobileGallery2} alt="" className="rounded-lg" />
          </picture>
        </div>
        <picture className="flex max-w-[1150px] md:px-10 min-[1110px]:px-0">
          <source srcSet={DesktopGallery3} media="(min-width: 1110px)" />
          <source srcSet={TabletGallery3} media="(min-width: 768px)" />
          <img src={MobileGallery3} alt="" className="rounded-lg" />
        </picture>
      </section>
      <section className="mx-auto mb-40 max-w-[1150px] px-6 md:flex-row md:px-10 min-[1150px]:px-0">
        <h2 className="mb-10 text-center text-2xl font-bold uppercase md:mb-14 min-[1110px]:mb-16">
          You may also like
        </h2>
        <div className="flex flex-col items-center gap-14 md:flex-row md:gap-3 min-[1110px]:gap-8">
          <div className="flex flex-col items-center gap-8">
            <p className="text-2xl font-bold uppercase">XX99 Mark I</p>
            <Button>See Product</Button>
            <picture className="order-first flex max-w-[1150px] min-[1110px]:px-0">
              <source srcSet={Desktopxx99mk1} media="(min-width: 1110px)" />
              <source srcSet={Tabletxx99mk1} media="(min-width: 768px)" />
              <img src={Mobilexx99mk1} alt="" className="rounded-lg" />
            </picture>
          </div>
          <div className="flex flex-col items-center gap-8">
            <p className="text-2xl font-bold uppercase">XX99 Mark I</p>
            <Button>See Product</Button>
            <picture className="order-first flex max-w-[1150px] min-[1110px]:px-0">
              <source srcSet={Desktopxx99mk1} media="(min-width: 1110px)" />
              <source srcSet={Tabletxx99mk1} media="(min-width: 768px)" />
              <img src={Mobilexx99mk1} alt="" className="rounded-lg" />
            </picture>
          </div>
          <div className="flex flex-col items-center gap-8">
            <p className="text-2xl font-bold uppercase">XX99 Mark I</p>
            <Button>See Product</Button>
            <picture className="order-first flex max-w-[1150px] min-[1110px]:px-0">
              <source srcSet={Desktopxx99mk1} media="(min-width: 1110px)" />
              <source srcSet={Tabletxx99mk1} media="(min-width: 768px)" />
              <img src={Mobilexx99mk1} alt="" className="rounded-lg" />
            </picture>
          </div>
        </div>
      </section>
      <Categories />
      <InfoSection />
      <Footer />
    </>
  );
}
