import MobileBestGear from "../assets/shared/mobile/image-best-gear.jpg";
import TabletBestGear from "../assets/shared/tablet/image-best-gear.jpg";
import DesktopBestGear from "../assets/shared/desktop/image-best-gear.jpg";

export default function InfoSection() {
  return (
    <section className="mx-auto mt-6 mb-[7.5rem] flex w-full max-w-[1110px] flex-col items-center gap-8 px-6 md:mb-24 md:gap-16 md:px-10 lg:mb-36 lg:flex-row lg:gap-[30px] min-[1150px]:px-0">
      <div className="mx-auto flex w-full grow basis-1/2 flex-col items-center gap-8 lg:max-w-[445px] min-[1110px]:mx-0">
        <h3 className="text-center text-[1.75rem] font-bold uppercase leading-10 tracking-[1px] md:max-w-xl md:text-[40px] lg:text-left">
          {"Bringing you the "}
          <span className="text-orange">best</span>
          {" audio gear"}
        </h3>
        <p className="text-center opacity-50 md:max-w-xl lg:text-left">
          Located at the heart of New York City, Audiophile is the premier store for high end
          headphones, earphones, speakers, and audio accessories. We have a large showroom and
          luxury demonstration rooms available for you to browse and experience a wide range of our
          products. Stop by our store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <picture className="order-first flex justify-end lg:order-last lg:ml-auto min-[1110px]:basis-1/2">
        <source media="(min-width: 1024px)" srcSet={DesktopBestGear} className="rounded-lg" />
        <source media="(min-width: 768px)" srcSet={TabletBestGear} className="rounded-lg" />
        <img
          src={MobileBestGear}
          alt="Man listening to music using the XX99 Mark II Headphones"
          className="rounded-lg"
        />
      </picture>
    </section>
  );
}
